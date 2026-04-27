#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = process.cwd();
const htmlPath = path.join(root, 'index.html');
const dataPath = path.join(root, 'data', 'terminals_v2_3_public_alpha.json');
const report = [];
let ok = true;
function pass(msg){ report.push(`PASS ${msg}`); }
function fail(msg){ ok=false; report.push(`FAIL ${msg}`); }
function warn(msg){ report.push(`WARN ${msg}`); }
function assert(cond, msg){ cond ? pass(msg) : fail(msg); }

assert(fs.existsSync(htmlPath), 'root index.html exists for GitHub Pages');
assert(fs.existsSync(dataPath), 'canonical JSON dataset exists at data/terminals_v2_3_public_alpha.json');

const html = fs.existsSync(htmlPath) ? fs.readFileSync(htmlPath, 'utf8') : '';
assert(/id="search"/.test(html), 'search input exists');
assert(!/id="category"/.test(html), 'redundant category filter is removed from UI');
assert(!/All categories/.test(html), 'category wording is removed from controls');
assert(/id="rendering"/.test(html), 'rendering filter exists');
assert(/id="status"/.test(html), 'status filter exists');
assert(/id="engine"/.test(html), 'engine family filter exists');
assert(/id="surface"/.test(html), 'rendering surface filter exists');
assert(/Explorer groups/.test(html), 'Explorer groups label replaces Periodic groups');
assert(!/>Periodic groups</.test(html), 'Periodic groups button label is not present');
assert(/id="themeToggle"/.test(html), 'light/dark theme toggle exists');
assert(/id="exportCsv"/.test(html), 'CSV export control exists');
assert(/Export current results CSV/.test(html), 'CSV export copy indicates current result set');
assert(/id="modal"/.test(html), 'detail modal exists');
assert(/id="openCompare"/.test(html), 'comparison control exists');
assert(/aria-pressed/.test(html), 'Scientific Mode toggle exposes aria-pressed');
assert(/modeNotice/.test(html), 'Scientific/Explorer mode notice exists');
assert(/scientific-card/.test(html), 'Scientific Mode visibly changes card layout');
assert(/data-theme/.test(html), 'theme system uses data-theme');
assert(/localStorage/.test(html), 'theme persistence uses localStorage');
assert(/fetch\(p\)/.test(html), 'app fetches data dynamically');
assert(/loadData\(\)/.test(html), 'data loader is invoked');
assert(/data\.flatMap\(r=>Object\.keys\(r\)\)/.test(html), 'CSV export uses all dataset columns');

// Syntax audit for inline JS.
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
assert(scripts.length > 0, 'inline JavaScript block found');
for (const [i, code] of scripts.entries()) {
  try { new Function(code); pass(`inline JavaScript block ${i+1} parses`); }
  catch (e) { fail(`inline JavaScript block ${i+1} parse error: ${e.message}`); }
}

let data = [];
try { data = JSON.parse(fs.readFileSync(dataPath, 'utf8')); pass('dataset JSON parses'); }
catch(e){ fail(`dataset JSON parse error: ${e.message}`); }

assert(Array.isArray(data), 'dataset is an array');
assert(data.length === 79, `dataset has expected 79 records (found ${data.length})`);

const ids = new Set();
const names = new Set();
const required = ['id','Name','public_status_label','rendering_generation','EngineFamily','RenderingSurface','Status','PrimarySource'];
for (const [idx, row] of data.entries()) {
  for (const key of required) if (row[key] === undefined || row[key] === null || row[key] === '') fail(`row ${idx+1} missing required field ${key}`);
  if (ids.has(row.id)) fail(`duplicate id: ${row.id}`); else ids.add(row.id);
  const lower = String(row.Name || '').toLowerCase();
  if (names.has(lower)) fail(`duplicate terminal name: ${row.Name}`); else names.add(lower);
  if (/black screen/i.test(String(row.Name || ''))) fail('scope violation remains: Black Screen');
  if (/multiplexer|embedded|wrapper/i.test(String(row.ScopeClass || '') + ' ' + String(row.Category || ''))) fail(`scope violation category/class in ${row.Name}`);
}
if (data.length) pass('all required row-level checks completed');

function uniq(arr){ return [...new Set(arr.filter(v => v !== undefined && v !== null && v !== ''))].sort((a,b)=>String(a).localeCompare(String(b))); }
function filtered({q='', rendering='', status='', engine='', surface=''} = {}) {
  const query = q.trim().toLowerCase();
  return data.filter(d => {
    const hay = [d.Name,d.Language,d.LineageConcept,d.lineage_concept_list,d.Notes,d.EngineFamily,d.RenderingModel,d.Extensibility,d.PrimarySource,d.RenderingSurface,d.rendering_generation,d.DisplayDependency]
      .map(x => Array.isArray(x) ? x.join(' ') : String(x || '')).join(' ').toLowerCase();
    return (!query || hay.includes(query)) &&
      (!rendering || d.rendering_generation === rendering) &&
      (!status || d.public_status_label === status) &&
      (!engine || d.EngineFamily === engine) &&
      (!surface || d.RenderingSurface === surface);
  });
}

const renderings = uniq(data.map(d=>d.rendering_generation));
const statuses = uniq(data.map(d=>d.public_status_label));
const engines = uniq(data.map(d=>d.EngineFamily));
const surfaces = uniq(data.map(d=>d.RenderingSurface));
assert(renderings.length > 1, `rendering filter has multiple values (${renderings.length})`);
assert(statuses.length > 1, `status filter has multiple values (${statuses.length})`);
assert(engines.length > 1, `engine family filter has multiple values (${engines.length})`);
assert(surfaces.length > 1, `surface filter has multiple values (${surfaces.length})`);
assert(filtered({q:'xterm'}).length >= 1, 'search smoke test finds xterm-related records');
assert(filtered({q:'definitely-no-such-terminal-xyz'}).length === 0, 'search empty-state smoke test returns zero');
assert(filtered({rendering: renderings[0]}).length >= 1, 'rendering filter smoke test returns records');
assert(filtered({status: statuses[0]}).length >= 1, 'status filter smoke test returns records');
assert(filtered({engine: engines[0]}).length >= 1, 'engine filter smoke test returns records');
assert(filtered({surface: surfaces[0]}).length >= 1, 'surface filter smoke test returns records');
assert(filtered().length === data.length, 'no-filter result set includes all records');

const allKeys = [...new Set(data.flatMap(r=>Object.keys(r)))];
assert(allKeys.length >= 30, `CSV/full-data key audit sees ${allKeys.length} columns`);

const badSources = data.filter(d => d.PrimarySource && !/^https?:\/\//.test(String(d.PrimarySource)));
if (badSources.length) warn(`${badSources.length} PrimarySource values are not http(s) URLs`); else pass('PrimarySource values are URL-like');

const out = report.join('\n') + '\n';
console.log(out);
fs.writeFileSync(path.join(root, 'docs', 'FUNCTIONAL_AUDIT_v2_7.md'), `# Functional Audit — v2.7\n\nGenerated by \`npm run audit\`.\n\n\`\`\`text\n${out}\`\`\`\n\n## Manual checks still required\n\n- Open the GitHub Pages URL in a browser.\n- Confirm cards render after data load.\n- Search for \`xterm\`, \`kitty\`, and \`alacritty\`.\n- Try rendering, status, engine family, and surface filters.\n- Toggle Scientific Mode and confirm cards visibly expand.\n- Open Explorer groups in Explorer Mode and Scientific Mode.\n- Toggle Light/Dark mode and refresh to verify persistence.\n- Open a terminal card.\n- Shift-click or use “Add to compare” on two terminals, then open comparison.\n- Export current results CSV with no filters and confirm 79 data rows plus header.\n`);
process.exit(ok ? 0 : 1);
