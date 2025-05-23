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


app.get('/api/info', (req, res) => {
  res.send(
    {
      name: 'John Doe',
      age: 30,
      city: 'New York',
    }

  )
});


app.get('/get/users', (req, res) => {
  res.json([
    { name: 'John Doe' },
    { name: 'Jane Doe' },
    { name: 'Jim Doe' },
    { name: 'Jack Doe' },
    { name: 'Jill Doe' },
  ]);
})

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
