const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000;

app.use(bodyParser.json())
app.get('/n8n-webhook', (req, res) => {
    res.status(200).send({ message: 'Data received successfully' });
})
app.listen(port, () => {
    console.log('Server is running')
})