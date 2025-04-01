import express from 'express';
import { getTodayDate } from './dateModul.js';
import contact from './contact.json' with { type: 'json' };

const app = express();
const port = 3000;

// Define route
app.get('/', (req, res) => {
  const todayDate = getTodayDate();
  res.send(`Hello my friend! ${todayDate}`);
});

app.get('/contact', (req, res) => {
  res.send(`Contact:${contact.name} ${contact.address} ${contact.phone}`);
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
