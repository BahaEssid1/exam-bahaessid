// server.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample posts data
const postList = [
  { id: '1', titre: "Premier post", contenu: 'détails premier post' },
  { id: '2', titre: "Deuxième post", contenu: 'détails deuxième post' },
  { id: '3', titre: "Troisième post", contenu: 'détails troisième post' }
];

// Simple root route
app.get('/', (req, res) => {
  res.send('Hello from Express server!');
});

// REST API route: GET /postList
app.get('/postList', (req, res) => {
  res.json(postList);
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
