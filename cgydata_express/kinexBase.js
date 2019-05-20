var knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host : 'rainforester.cn8i3ndstyb0.us-east-2.rds.amazonaws.com',
    user : 'qsecofrmaster',
    password : 'P!68Yhzw&M3Ed',
    database : 'cgyinfo'
  }
});


async function get_community_list() {


//  resu = []
//  knex.select('name').where('class_code', 2).from('census2018').returning().then (data => {
// 	x = data
// 	resu.push(x);
// 	console.log(x)
// });

a = []

await const resu = knex.select('name').where('class_code', 2).from('census2018').returning()
.then(result => a.push(result))


console.log(a)
return a
}


function get_community_by_name(cname) {


return cname
}




// let b = knex({ a: 'census2018' })
//   .select({
//     name: 'name',
    
//   })
//   .whereRaw('class_code = 1', [class_code = 1])

module.exports.get_community_list = get_community_list  
module.exports.get_community_by_name = get_community_by_name 