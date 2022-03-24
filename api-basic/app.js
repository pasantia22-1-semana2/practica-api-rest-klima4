//definimos el modulo http
const http = require("http");
const hostname = '127.0.0.1'  //declaramos un hostname
const port = 3000;//escucha nuestras peticiones

const sever = http.createServer((req, res)=>{
   if(req.method === 'GET'){
       res.statusCode = 200;
       res.setHeader('Soy una respuesta GET');
   }

   if(req.method === 'POST'){
       res.statusCode = 200;
       res.setHeader('content-Type', 'text/plain');
       res.end('soy una respuesta POST');
   }
})//creamos nuestro servidor y la respuesta de una peticion

//creamos
server.adress(hostname);
server.listen(port,()=>{  //funcion anonima arrow function
    console.log(`Server running at http://${hostname}:${port}`)
})