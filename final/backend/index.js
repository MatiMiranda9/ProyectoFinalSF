const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const connection = mysql.createConnection({
  host: "db", 
  user: "ites", 
  password: "ites", 
  database: "formulario", 
});


connection.connect((err) => {
  if (err) {
    console.error("Error conectando a la base de datos: " + err.stack);
    return;
  }
  console.log("Conectado a la base de datos.");
});


app.post("/submit-client-data", (req, res) => {
  const { name, email, phone, message } = req.body;
  const query =
    "INSERT INTO client_requests (name, email, phone, message, created_at) VALUES (?, ?, ?, ?, NOW())";

  connection.query(query, [name, email, phone, message], (err, result) => {
    if (err) {
      console.error("Error al guardar los datos:", err);
      return res.status(500).send("No se pueden guardar los datos.");
    }
    res.status(200).send("Datos guardados exitosamente.");
  });
});


process.on("exit", () => {
  connection.end((err) => {
    if (err) {
      console.error("Error cerrando la conexión:", err);
    } else {
      console.log("Conexión cerrada.");
    }
  });
});

app.listen(3000, () => {
  console.log("Backend corriendo en el puerto 3000");
});
