let p= require('./my.js')
let result = p.parse(process.argv[2]);

if(!result){
	console.log('URL NOT VALID!!!')
}else{
	console.log(result.url);
}