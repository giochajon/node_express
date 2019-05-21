const express = require('express')
const queries = require('./kinexBase.js')
//   for this one to work we installed express: npm install express

const app = express();

app.get('/', (req, res) => {
    res.send ("<h1>Calgary community info </h1><br><p>add /community for the array or the /community/NAME to retreive the data</p> ")
    
})

let a = []
queries.get_community_list().then(x => formatArray(x));
app.get('/community', (req, res) => {
res.send (a)
})

function formatArray(x){
	x.forEach(function (item) {
	a.push(item.name); 
});

}


app.get('/community/:name', (req, res) => {
    queries.get_community_by_name(req.params.name).then(x => res.send(x));
})


app.listen(3000);