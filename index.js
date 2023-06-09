import express from 'express';
import axios from 'axios';

const app = express();

app.get('/', (reg, res) => {
  res.write('<!DOCTYPE html>');
  res.write('<html lang="cs">');
  res.write('<head>');
  res.write('<meta charset="UTF-8">');
  res.write('</head>');
  res.write('<body>');

  res.write('<h1>Advice</h1>');
  res.write('<a href="/advice">Prestizni poradna</a><br>');
  res.write('<br>');

  res.write('</body>');
  res.write('</html>');
  res.end();
}),
  app.get('/advice', async (req, res) => {
    const gh = await axios.get('https://api.adviceslip.com/advice');
    res.json(gh.data.slip.advice);
  });

app.get('/submit', async (req, res) => {
  const gh = await axios.get(
    `https://api.adviceslip.com/advice/search/${hledat}`
  );
  res.json(gh.data.slip.id);
});

app.listen(3000, () => {
  console.log('prestiz');
});
