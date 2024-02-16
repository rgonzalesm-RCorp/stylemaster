const express = require('express');
const app = express();
const PORT = 3001;

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, esta es tu API!');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
