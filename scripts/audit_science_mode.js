#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = process.cwd();
let ok = true;
const report = [];
function pass(msg){ report.push(`PASS ${msg}`); }
function fail(msg){ ok=false; report.push(`FAIL ${msg}`); }
function assert(cond,msg){ cond ? pass(msg) : fail(msg); }
function readJson(rel){
  try { return JSON.parse(fs.readFileSync(path.join(root, rel), 'utf8')); }
  catch(e){ fail(`${rel} JSON parse failed: ${e.message}`); return null; }
}

const data = readJson('data/terminals_v2_3_public_alpha.json') || [];
const graph = readJson('data/science_graph_v6.json') || {nodes:[],edges:[]};
const matrix = readJson('data/similarity_matrix_v6.json') || {labels:[],values:[]};
const gaps = readJson('data/gap_analysis_v6.json') || {};
const reps = readJson('data/representative_sets_v6.json') || {};

const ids = new Set(data.map(d => d.id));
assert(data.length === 67, 'dataset contains 67 terminals');

assert(graph.nodes.length === data.length, 'graph node count equals dataset count');
const graphIds = new Set(graph.nodes.map(n => n.id));
for (const id of ids) assert(graphIds.has(id), `graph contains node ${id}`);

const edgeTypes = new Set(graph.edges.map(e => e.type));
assert(edgeTypes.has('similarity'), 'graph has similarity edges');
assert(edgeTypes.has('lineage/engine'), 'graph has lineage/engine edges');
assert(edgeTypes.has('semantic/workspace'), 'graph has semantic/workspace edges');
assert(edgeTypes.has('historical/context'), 'graph has contextual edges');

for (const e of graph.edges) {
  assert(graphIds.has(e.source), `edge source exists: ${e.source}`);
  assert(graphIds.has(e.target), `edge target exists: ${e.target}`);
}

assert(matrix.labels.length === 67, 'similarity matrix label count is 67');
assert(matrix.values.length === 67, 'similarity matrix row count is 67');
for (const [i,row] of matrix.values.entries()) {
  assert(Array.isArray(row) && row.length === 67, `matrix row ${i+1} length is 67`);
  const diag = row[i];
  assert(Math.abs(diag - 1) < 0.0001, `matrix diagonal ${i+1} equals 1`);
}
for (let i=0;i<67;i++) {
  for (let j=0;j<67;j++) {
    assert(Math.abs(matrix.values[i][j] - matrix.values[j][i]) < 0.0001, `matrix symmetric ${i},${j}`);
  }
}

for (const key of [
  'EngineFamily_x_InteractionComplexity',
  'RenderingModelGroup_x_InteractionComplexity',
  'EngineFamily_x_SemanticLayer',
  'RenderingModelGroup_x_EngineFamily'
]) {
  assert(gaps[key], `gap matrix exists: ${key}`);
}

for (const key of Object.keys(reps)) {
  assert(Array.isArray(reps[key]), `representative set ${key} is array`);
  for (const row of reps[key]) assert(ids.has(row.id), `representative ${key} member exists: ${row.id}`);
}

console.log(report.join('\n'));
if (!ok) process.exit(1);
