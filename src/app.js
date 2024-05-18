const express = require("express");
const mongoose = require("mongoose");
const { config } = require("dotenv");
const bodyParser = require("body-parser");
const bookRoutes = require("./routes/book.routes");

config();

//Usamos express para middleware
const app = express();
app.use(bodyParser.json()); // middleware parsea a json todo body que llegue

//Conectamos la base de datos
mongoose.connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME });
const db = mongoose.connection;

app.use("/books", bookRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
