import express from "express";
import routes from "./routes";
import { connect, connection } from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import { config } from "dotenv";

config();

connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
connection.once("open", () => {
  console.log("conectado com o banco de dados");
});

const app = express();

app.use(
  cors({
    origin: "http://192.168.86.4",
  })
);

app.use(bodyParser.json());

app.get("/", (_, res) => res.send({ message: "Ola mundinho" }));

app.use("/v1", routes);

app.listen("4000", () => console.log("servidor aberto"));
