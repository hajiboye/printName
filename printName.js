const http = require('http');
const server = http.createServer((req, res)=>{
	console.log('method', req.method)
	console.log('url', req.url)

	// const Name ={
	// 	firstName: 'Ajiboye',
	// 	lastName: 'Oyerinde'
	// }
	res.setHeader('Content-type', 'text/html');
	res.end('<h1>Ajiboye Oyerinde E.</h1>');

})

server.listen(3000)


