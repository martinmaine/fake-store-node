const express = require('express');
const router = express.Router();
const productos = require('../data/productos.json');

router.get('/', (req, res) => {
  res.send(productos);
});

router.get('/:id', (req, res) => {
  const producto = productos.find(
    (productos) => productos.id === parseInt(req.params.id)
  );
  if (!producto) return res.status(404).send('Producto no encontrado');
  else res.send(producto);
});

/* router.post('/', (req, res) => {
  const producto = {
    id: productos.length + 1,
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
    category: req.body.category,
  };
  productos.push(producto);
  res.send(producto)
}); */

module.exports = router;
