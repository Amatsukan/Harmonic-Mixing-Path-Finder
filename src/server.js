const express = require("express");
const cors = require("cors");
const graph = require("./graph/tonal_graph");
const { dijkstra } = require("./graph/dijkstra");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.post("/api/path", (req, res) => {
  const { start, end, avoid = [] } = req.body;
  if (!graph[start] || !graph[end]) {
    return res.status(400).json({ error: "Tonalidade inválida." });
  }

  const result = dijkstra(start, end, avoid);
  res.json(result);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`🎵 API rodando em http://localhost:${PORT}`));