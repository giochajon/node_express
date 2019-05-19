const express = require('express')
//   for this one to work we installed express: npm install express

const app = express();

app.get('/', (req, res) => {
    res.send (("<h1>Calgary community info </h1><br><p>add /community for the array or the /community/NAME to retreive the data</p> ")
    
})

app.get('/community', (req, res) => {
    res.send ("<h1>hello this is the new express server</h1>") //text example
    
})



app.listen(3000);