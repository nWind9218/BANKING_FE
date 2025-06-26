const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000;

app.use(bodyParser.json())
app.post('/n8n-webhook', (req, res) => {
    const receivedData = req.body;
    console.log('Dữ liệu nhận từ n8n: ', receivedData)
    if (receivedData.status === 'success'){
        console.log('Successfully')
        req.status(200).send('Tin hieu thanh cong')
    }
    else{
        console.error('Loi')
        req.status(400).send('Loi')
    }
})
app.listen(port, () => {
    console.log('Server is running')
})