const express = require('express')
const app = express()
const port = 8080

app.get('/productos', (req, res) => {
  res.send("productos")
})

app.get('/productoRandom', (req, res) => {
    res.send("productoRandom")
  })

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

server.on("error", error => console.log("Error on server: ", error))