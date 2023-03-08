const express = require('express');
const app = express();
const port = 3000;
const routerApi = require ('./routes')
app.use (express.json());
require('dotenv').config();

const PORT = process.env.PORT || 8000;

// Configuración de la base de datos
/* const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME
}

app.use (dbConfig) */

app.get('/', (req, res) => {
  res.send('Hello World');
});

routerApi(app)

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
