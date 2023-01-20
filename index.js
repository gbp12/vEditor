// Importing express module
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send({
    index: "te encuentras en el index",
  });
});

app.get("/prueba", (req, res) => {
  res.send({
    hola: "mundo",
    adios: "mundo",
  });
});

/*app.post("/prueba/factura", (req, res) => {
  console.log("llamada recibida");
  res.send({
    hola: "mundo",
    adios: "mundo",
  });
});*/

app.listen(4080, () => {
  console.log("Our express server is up on port 4080");
});
