const express = require('express')
const queries = require('./kinexBase.js')
//   for this one to work we installed express: npm install express

const app = express();

app.get('/', (req, res) => {
    res.send ("<h1>Calgary community info </h1><br><p>add /community for the array or the /community/NAME to retreive the data</p> ")
    
})

app.get('/community', (req, res) => {
    

var result = queries.get_community_list()

    res.send (result)
})

app.get('/community/:name', (req, res) => {
    res.send ("<h1>you asked for "+ req.params.name+" </h1>" ) //text example
    
})


app.listen(3000);