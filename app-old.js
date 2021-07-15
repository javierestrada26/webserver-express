
const http = require('http')

http.createServer((req,res)=>{

    res.write('Hola Mundo')
    res.end()
})
.listen(1010)

console.log('escuchando el puerto 1010 ');