const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta contacto
app.post('/contacto', (req, res) => {
    const { nombre, email, mensaje } = req.body;

    if (!nombre || !email || !mensaje) {
        return res.status(400).json({
            error: 'Todos los campos son obligatorios'
        });
    }

    console.log('📩 Nuevo mensaje recibido:');
    console.log(nombre, email, mensaje);

    // Aquí luego puedes:
    // - Guardar en base de datos
    // - Enviar correo
    // - Enviar WhatsApp automático

    res.json({
        message: 'Mensaje recibido correctamente'
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor activo en http://localhost:${PORT}`);
});
