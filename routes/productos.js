const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const productos = [
        { id: 101, nombre: 'Laptop', precio: 1500 },
        { id: 102, nombre: 'Mouse', precio: 20 }
    ];

    let html = `
    <html>
    <head>
        <title>Lista de Productos</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body class="container mt-5">
        <h2 class="text-warning mb-4">Catálogo de Productos</h2>
        <table class="table table-bordered shadow-sm">
            <thead class="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                ${productos.map(p => `<tr><td>${p.id}</td><td>${p.nombre}</td><td>$${p.precio}</td></tr>`).join('')}
            </tbody>
        </table>
        <a href="/" class="btn btn-secondary">Volver al Inicio</a>
    </body>
    </html>`;
    
    res.send(html);
});

module.exports = router;