const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Definimos los datos
    const clientes = [
        { id: 1, nombre: 'Breyneer Rojas' },
        { id: 2, nombre: 'Maria Garcia' }
    ];

    // Creamos el HTML con Bootstrap
    let html = `
    <html>
    <head>
        <title>Lista de Clientes</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body class="container mt-5">
        <h2 class="text-primary mb-4">Lista de Clientes</h2>
        <table class="table table-striped table-hover border">
            <thead class="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                </tr>
            </thead>
            <tbody>
                ${clientes.map(c => `<tr><td>${c.id}</td><td>${c.nombre}</td></tr>`).join('')}
            </tbody>
        </table>
        <a href="/" class="btn btn-secondary">Volver al Inicio</a>
    </body>
    </html>`;
    
    res.send(html);
});

module.exports = router;