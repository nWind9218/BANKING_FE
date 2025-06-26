const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.get('/completed-transfer', (req, res) => {
  res.send('Receive Completed Transfer');
})


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});