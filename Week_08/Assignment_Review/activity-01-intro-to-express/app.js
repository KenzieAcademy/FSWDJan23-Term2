import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("This is the base route."));

app.get("/:name", (req, res) => res.send(`Hello! Welcome, ${req.params.name}`));

app.listen(3001, () => console.log("[Server] Now listening on port 3001"));
