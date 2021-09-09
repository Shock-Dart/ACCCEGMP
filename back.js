const express = require('express')
const app = express()

app.route('/test')
  .get(function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    res.end(JSON.stringify({ message: 'Se aprobaron todas las pruebas del servidor Node.' }));
  })
  .post(function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    res.end(JSON.stringify({ id: 1, message: 'Probado el server POST' }));
  })
  .put(function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    res.end(JSON.stringify({ id: 1, message: 'Probado el server PUT' }));
  })
  .delete(function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    res.end(JSON.stringify({ id: 1, message: 'Probado el server DELETE' }));
  });

app.route('/params/:id')
  .get(function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    res.end(JSON.stringify({ id: 1, message: 'Probado el server GET con param ' + req.params.id }));
  });

app.listen(4000, () => console.log('Servidor Back en Puerto 4000'))
