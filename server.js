const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware pour servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Route principale qui renvoie vers une page HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'sujet.html'));
});


//Vaccin
app.get('/vaccin/1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'vaccin', 'vaccin1.html'));
})

app.get('/vaccin/2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'vaccin', 'vaccin2.html'));
})

app.get('/vaccin/3', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'vaccin', 'vaccin3.html'));
})

app.get('/vaccin/4', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'vaccin', 'vaccin4.html'));
})

app.get('/vaccin/5', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'vaccin', 'vaccin5.html'));
})

app.get('/vaccin/6', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'vaccin', 'vaccin6.html'));
})

app.get('/vaccin/7', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'vaccin', 'vaccin7.html'));
})

app.get('/vaccin/8', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'vaccin', 'vaccin8.html'));
})

app.get('/vaccin/9', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'vaccin', 'vaccin9.html'));
})

app.get('/vaccin/10', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'vaccin', 'vaccin10.html'));
})


//Palestine
app.get('/palestine/1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'palestine', 'palestine1.html'));
})

app.get('/palestine/2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'palestine', 'palestine2.html'));
})

app.get('/palestine/3', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'palestine', 'palestine3.html'));
})

app.get('/palestine/4', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'palestine', 'palestine4.html'));
})

app.get('/palestine/5', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'palestine', 'palestine5.html'));
})

app.get('/palestine/6', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'palestine', 'palestine6.html'));
})

app.get('/palestine/7', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'palestine', 'palestine7.html'));
})

app.get('/palestine/8', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'palestine', 'palestine8.html'));
})

app.get('/palestine/9', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'palestine', 'palestine9.html'));
})

app.get('/palestine/10', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'palestine', 'palestine10.html'));
})



//Serveur
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
