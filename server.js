const express = require('express');
const path = require("path");
const app = express();
const router = express.Router();
app.use(express.static(__dirname));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});

app.get('/', (req, res) => {
    res.render('index.html', { root: __dirname });
});

app.get('/docDash.html', (req, res) => {
    res.render('/docDash.html', { root: __dirname });
});
app.get('/docregistration.html', (req, res) => {
    res.render('docregistration.html', { root: __dirname });
});
app.get('/doctor.html', (req, res) => {
    res.render('/doctor.html'), { root: __dirname };
});
app.get('/patDash.html', (req, res) => {
    res.render('/patDash.html', { root: __dirname });
});
app.get('/patient.html', (req, res) => {
    res.render('/patient.html', { root: __dirname });
});
app.get('/registration.html', (req, res) => {
    res.render('/registration.html', { root: __dirname });
});