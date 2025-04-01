import express from 'express';
import { getTodayDate } from './dateModul.js';
const app = express();
const port = 3000;

// Define route
app.get('/', (req, res) => {
  const todayDate = getTodayDate();
  res.send(`Hello my friend! ${todayDate}`);
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
