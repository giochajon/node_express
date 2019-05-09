const express = require('express')
//   for this one to work we installed express: npm install express

const app = express();

app.get('/', (req, res) => {
    //res.send ("<h1>this is the new express server</h1>") //text example
    const user = {
        name: 'Jason',
        hobby: 'Bugging'
    }
    res.send(user) //JSON example
})

app.get('/greet', (req, res) => {
    res.send ("<h1>hello this is the new express server</h1>") //text example
    
})



app.listen(3000);