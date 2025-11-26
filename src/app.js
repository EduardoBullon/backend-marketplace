const express = require('express');
const cors = require('cors');
const productRouter = require('./routes/products');
const authRouter = require('./routes/auth');
const categoryRouter = require('./routes/categories');

const app = express();

// CORS configuration
const allowedOrigins = [
    'http://localhost:3000',
    process.env.FRONTEND_URL // Add Vercel URL here
];

app.use(cors({
    origin: function(origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        
        if (allowedOrigins.indexOf(origin) === -1 && !origin.includes('vercel.app')) {
            const msg = 'The CORS policy for this site does not allow access from the specified origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true
}));

app.use(express.json());

// Rutas
app.use('/api/auth', authRouter);
app.use('/api/products', productRouter);
app.use('/api/categories', categoryRouter);

// Ruta raíz
app.get('/', (req, res) => {
    res.json({ message: 'API E-commerce funcionando' });
});

// Manejo de errores 404
app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

module.exports = app;
