const http = require('http')

const srv = http.createServer((req, res) => {
    console.log('MÉTODO:', req.method);
    console.log('HEADERS:', req.headers);
    console.log('HTTP VERSÃO:', req.httpVersion);
    
    if (req.method === "POST") {
        res.writeHead(201, {
            'Content-type': 'application/json'
        })

        res.write('{"message": "Cadastro efetuado com sucesso"}')
    }

    if (req.method === "GET") {
        res.writeHead(200, {
        'Content-Type': 'text/html'
    })


    res.write(`
    <!DOCTYPE HTML>
    <html lang=”pt-br”>
    <head>
        <meta charset=”UTF-8”>
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title></title>
    </head>
    <body>
        <h1>Programa a bordo</h1>
    </body>
    </html>
    `)
    res.end()

}
});

srv.listen(3001, () => {
    console.log('Servidor funcionando!');
});