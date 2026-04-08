const express = require('express');
const router = express.Router();

// Ruta para obtener clientes
router.get('/', (req, res) => {
    res.json([
        { id: 1, nombre: 'Breyneer Rojas' },
        { id: 2, nombre: 'Maria Garcia' }
    ]);
});

module.exports = router;