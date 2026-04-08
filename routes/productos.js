const express = require('express');
const router = express.Router();

// Ruta para obtener productos
router.get('/', (req, res) => {
    res.json([
        { id: 101, nombre: 'Laptop', precio: 1500 },
        { id: 102, nombre: 'Mouse', precio: 20 }
    ]);
});

module.exports = router;