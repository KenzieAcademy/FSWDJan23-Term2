import express from "express";
import cors from "cors";
import keys from "./config/keys";
import router from "./routes";
import mongoose from "mongoose";
import errorHandler from "./middleware/errorhandler";

mongoose
  .connect(keys.db.url)
  .then(() => console.log("[Database] Connection established"))
  .catch((err) => console.error("[Database] Connection failed: ", err));

const app = express();

app.use(cors());
app.use(express.json());

app.use(keys.api.url, router);

app.use(errorHandler);

app.listen(keys.api.port, () =>
  console.log(
    `[Server] Now listening for HTTP requests on localhost:${keys.api.port}`
  )
);
