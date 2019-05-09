const express = require('express');

const app = express();

app.use ((req,res,next) => {
	console.log('hello, I am precessing this first ')
	next();


})

app.get('/',(req,res)=> {
	res.send ('I consoled log the mddleware')
});

app.listen(3000);