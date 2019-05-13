var knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host : '127.0.0.1',
    user : 'giovas',
    password : '',
    database : 'cgyinfo'
  }
});

knex.select('*').where('class_code', 2).from('census2018').then (data => {
	console.log(data)
});

// let b = knex({ a: 'census2018' })
//   .select({
//     name: 'name',
    
//   })
//   .whereRaw('class_code = 1', [class_code = 1])

