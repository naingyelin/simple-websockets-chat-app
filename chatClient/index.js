
const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('html'));
// app.use(express.static('css'));
// app.use(express.static('js'));
app.get('/api', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
