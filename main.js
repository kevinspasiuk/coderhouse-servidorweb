const express = require('express')
const app = express()
const port = process.env.port || 8080

const Contenedor = require('./model/contenedor.js')
const productosRepository = new Contenedor('./db/productos.txt')

app.get('/', (req, res) => {
  res.send('Holis')
})

app.get('/productos', (req, res) => {
  productosRepository.getAll()
    .then(productos => { res.send(productos) })
    .catch(err => { console.log('Error getting productos: ', err) })
})

app.get('/productoRandom', (req, res) => {
  productosRepository.getAll()
    .then(productos => {
      const productoRandom = productos[Math.floor(Math.random()*productos.length)]
      res.send(productoRandom)
    })
    .catch(err => { console.log('Error getting a random producto: ', err) })
})

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

server.on('error', error => console.log('Error on server: ', error))
