function dijkstra(start, end, avoidList = []) {
    const graph = require("./tonal_graph");
    const avoidSet = new Set(avoidList);
    const visited = new Set();
    const heap = [[0, start, []]];
  
    while (heap.length > 0) {
      heap.sort((a, b) => a[0] - b[0]);
      const [cost, node, path] = heap.shift();
  
      if (visited.has(node) || avoidSet.has(node)) continue;
      visited.add(node);
  
      const newPath = [...path, node];
      if (node === end) return { cost, path: newPath };
  
      for (const [neighbor, weight] of graph[node]) {
        if (!visited.has(neighbor) && !avoidSet.has(neighbor)) {
          heap.push([cost + weight, neighbor, newPath]);
        }
      }
    }
  
    return { cost: Infinity, path: [] };
  }
  
  module.exports = { dijkstra };  