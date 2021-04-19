import express from "express";
import routes from "./routes";
import { connect, connection } from "mongoose";
import bodyParser from "body-parser";

connect(
  "mongodb+srv://pedro:0yQhiDBIunaOQBZ0@tcc.bapvw.mongodb.net/tcc?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
connection.once("open", () => {
  console.log("conectado com o banco de dados");
});

const app = express();
app.use(bodyParser.json());

app.get("/", (_, res) => res.send("Ola mundinho"));

app.use("/v1", routes);

app.listen("4000", () => console.log("servidor aberto"));
