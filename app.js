const express = require('express');
const app = express();
const path = require('path');

// Importar las rutas de tus archivos en la carpeta /routes (Paso Adicional 2)
const clientesRouter = require('./routes/clientes');
const productosRouter = require('./routes/productos');

const PORT = 9000; // Puerto configurado para Docker (Paso Adicional 4)

// Configuración para servir archivos estáticos (el index.html que tienes en /public)
app.use(express.static(path.join(__dirname, 'public')));

// Definir las rutas principales
app.use('/clientes', clientesRouter);
app.use('/productos', productosRouter);

// Ruta base que envía el index.html (Paso Adicional 7)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});