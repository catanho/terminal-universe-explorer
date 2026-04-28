const fs = require("fs");

let ok = 0, fail = 0;
function pass(msg){ console.log("PASS", msg); ok++; }
function bad(msg){ console.log("FAIL", msg); fail++; }

const html = fs.readFileSync("index.html", "utf8");
const data = JSON.parse(fs.readFileSync("data/terminals_v2_3_public_alpha.json", "utf8"));

if (html.includes('id="search"')) pass("search exists"); else bad("search missing");
if (html.includes('id="sort"')) pass("sort dropdown exists"); else bad("sort dropdown missing");
if (html.includes('id="periodicBtn"')) pass("Explorer groups tab exists"); else bad("Explorer groups missing");
if ((html.includes("Scientific Mode: Off") || html.includes("Scientific Mode: Later"))) pass("Scientific Mode button preserved"); else bad("Scientific Mode placeholder missing");
if (!html.includes("scientific=!scientific")) pass("Scientific Mode behavior removed"); else bad("Scientific Mode still toggles behavior");
if (html.includes("function renderExplorerGroups")) pass("Explorer groups renderer exists"); else bad("group renderer missing");

const expectedGroups = ["Ecosystem", "Engine family", "Surface", "Rendering", "Status"];
for (const g of expectedGroups) {
  if (html.includes(`title: '${g}'`) || html.includes(`title: "${g}"`) || html.includes(g)) {
    pass(`group section present: ${g}`);
  } else {
    bad(`group section missing: ${g}`);
  }
}

if (Array.isArray(data)) pass("dataset is array"); else bad("dataset is not array");
if (data.length === 79) pass("dataset has 79 records"); else bad(`dataset has ${data.length} records`);

const ids = new Set();
for (const d of data) {
  if (!d.id) bad(`missing id: ${d.Name || "(unnamed)"}`);
  if (d.id && ids.has(d.id)) bad(`duplicate id: ${d.id}`);
  if (d.id) ids.add(d.id);

  ["Name","PrimarySource","EngineFamily","RenderingSurface","rendering_generation","public_status_label"].forEach(k => {
    if (d[k] === undefined || d[k] === null || d[k] === "") bad(`${d.Name}: missing ${k}`);
  });

  if (d.FirstReleaseYear !== null && (!Number.isInteger(d.FirstReleaseYear) || d.FirstReleaseYear < 1960 || d.FirstReleaseYear > 2026)) {
    bad(`${d.Name}: suspicious FirstReleaseYear ${d.FirstReleaseYear}`);
  }

  if (d.PrimarySource && !/^https?:\/\//.test(d.PrimarySource)) {
    bad(`${d.Name}: PrimarySource is not URL-like`);
  }
}

const nullYears = data.filter(d => d.FirstReleaseYear === null).length;
console.log(`INFO null FirstReleaseYear records: ${nullYears}`);

console.log(`\nRESULT: ${ok} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
