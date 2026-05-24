#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = process.cwd();
const report = [];
let ok = true;

function pass(msg){ report.push(`PASS ${msg}`); }
function fail(msg){ ok = false; report.push(`FAIL ${msg}`); }
function warn(msg){ report.push(`WARN ${msg}`); }
function assert(cond, msg){ cond ? pass(msg) : fail(msg); }
function exists(rel){ return fs.existsSync(path.join(root, rel)); }
function read(rel){ return fs.existsSync(path.join(root, rel)) ? fs.readFileSync(path.join(root, rel), 'utf8') : ''; }

const index = read('index.html');
const science = read('science.html');
const dataPath = path.join(root, 'data', 'terminals_v2_3_public_alpha.json');

assert(exists('index.html'), 'Explore Mode index.html exists');
assert(exists('science.html'), 'Workbench Mode science.html exists');
assert(exists('data/terminals_v2_3_public_alpha.json'), 'canonical JSON dataset exists');
assert(exists('data/terminals_v2_3_public_alpha.csv'), 'canonical CSV dataset exists');
assert(exists('data/science_graph_v6.json'), 'Workbench graph data exists');
assert(exists('data/similarity_matrix_v6.json'), 'Workbench similarity matrix data exists');
assert(exists('data/gap_analysis_v6.json'), 'Workbench gap analysis data exists');
assert(exists('data/representative_sets_v6.json'), 'Workbench representative sets data exists');

assert(/id="themeToggle"/.test(index), 'Explore theme toggle exists');
assert(/id="themeToggle"/.test(science), 'Workbench theme toggle exists');
assert(/science\.html/.test(index), 'Explore links to Workbench');
assert(/index\.html/.test(science), 'Workbench links to Explore');
assert(/Workbench Mode/.test(science), 'Workbench naming present');
assert(/Explore Mode/.test(index) || /Explore Mode/.test(science), 'Explore Mode naming present');
assert(/Export all science analyzes/.test(science), 'Workbench export bundle link exists');
assert(/Model assumptions/.test(science), 'Workbench model assumptions drawer exists');
assert(/How to read this/.test(science), 'Workbench how-to drawer exists');
assert(/Similarity Graph/.test(science), 'Similarity Graph view exists');
assert(/Similarity Matrix/.test(science), 'Similarity Matrix view exists');
assert(/Representative Sets/i.test(science), 'Representative Sets view exists');
assert(/Gap Explorer/.test(science), 'Gap Explorer view exists');

for (const [name, html] of [['index.html', index], ['science.html', science]]) {
  const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
  assert(scripts.length > 0, `${name} has inline JavaScript`);
  scripts.forEach((code, i) => {
    try { new Function(code); pass(`${name} inline JavaScript block ${i+1} parses`); }
    catch(e){ fail(`${name} inline JavaScript block ${i+1} parse error: ${e.message}`); }
  });
}

let data = [];
try {
  data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  pass('dataset JSON parses');
} catch(e) {
  fail(`dataset JSON parse error: ${e.message}`);
}

assert(Array.isArray(data), 'dataset is an array');
assert(data.length === 67, `dataset has expected 67 records (found ${data.length})`);

const ids = new Set();
const names = new Set();
const required = [
  'id','Name','public_status_label','PrimaryLanguage','Status',
  'ActivitySignal','RenderingModelGroup','EngineFamily',
  'InteractionComplexity','SemanticLayer','WorkspaceModel','PrimarySource'
];

for (const [i, row] of data.entries()) {
  for (const key of required) {
    if (row[key] === undefined || row[key] === null || row[key] === '') fail(`row ${i+1} missing ${key}`);
  }
  if (ids.has(row.id)) fail(`duplicate id: ${row.id}`); else ids.add(row.id);
  const lname = String(row.Name || '').toLowerCase();
  if (names.has(lname)) fail(`duplicate terminal name: ${row.Name}`); else names.add(lname);
  if (/^(tmux|screen|gnu screen|black screen)$/i.test(String(row.Name || ''))) fail(`blocked out-of-scope terminal present: ${row.Name}`);
}

function parseJson(rel) {
  try {
    const obj = JSON.parse(read(rel));
    pass(`${rel} parses`);
    return obj;
  } catch(e) {
    fail(`${rel} parse error: ${e.message}`);
    return null;
  }
}

const graph = parseJson('data/science_graph_v6.json');
if (graph) {
  assert(Array.isArray(graph.nodes), 'graph nodes array exists');
  assert(Array.isArray(graph.edges), 'graph edges array exists');
  assert(graph.nodes.length === 67, `graph has 67 nodes (found ${graph.nodes.length})`);
  const nodeIds = new Set(graph.nodes.map(n => n.id));
  for (const e of graph.edges || []) {
    if (!nodeIds.has(e.source) || !nodeIds.has(e.target)) fail(`graph edge references missing node: ${e.source} -> ${e.target}`);
  }
  assert((graph.edges || []).some(e => e.type === 'similarity'), 'graph has similarity edges');
}

const matrix = parseJson('data/similarity_matrix_v6.json');
if (matrix) {
  assert(Array.isArray(matrix.labels), 'matrix labels exist');
  assert(Array.isArray(matrix.values), 'matrix values exist');
  assert(matrix.labels.length === 67, `matrix has 67 labels (found ${matrix.labels.length})`);
  assert(matrix.values.length === 67 && matrix.values.every(r => Array.isArray(r) && r.length === 67), 'matrix is 67×67');
}

const gaps = parseJson('data/gap_analysis_v6.json');
if (gaps) {
  const needed = [
    'EngineFamily_x_InteractionComplexity',
    'RenderingModelGroup_x_InteractionComplexity',
    'EngineFamily_x_SemanticLayer',
    'RenderingModelGroup_x_EngineFamily'
  ];
  for (const k of needed) assert(gaps[k], `gap matrix exists: ${k}`);
}

const reps = parseJson('data/representative_sets_v6.json');
if (reps) {
  assert(reps.recommended_10 || reps.strict_minimum_4, 'representative sets include named sets');
}

const assets = [
  'assets/science/nearest_neighbor_pathway_graph.svg',
  'assets/science/clustering_similarity_heatmap.svg',
  'assets/science/terminal_universe_workbench_analyzes_v6.zip'
];
for (const rel of assets) assert(exists(rel), `asset exists: ${rel}`);

console.log(report.join('\n'));
if (!ok) process.exit(1);
