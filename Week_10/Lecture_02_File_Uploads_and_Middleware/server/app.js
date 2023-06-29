import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { db_uri } from "./config/db.config";
import { yellow, greenBright, blueBright, redBright } from "chalk";
import { api_url, domain, port } from "./config/api.config";
import router from "./routes";
import path from "path";
import { notFoundErrorHandler, validationErrorHandler } from "./middleware";
import fileUpload from "express-fileupload";

mongoose
  .connect(db_uri)
  .then(() =>
    console.log(`${greenBright("[Database]")} Connection established.`)
  )
  .catch((err) =>
    console.log(
      `${redBright("[Database]")} ${yellow("Connection failed: ")}`,
      err
    )
  );

const app = express();

app.use(cors());
app.use(express.json());
/**
 * Use express.static middleware to declare
 * a specific folder (or potentially folders)
 * as a publicly accessible static directory.
 */
app.use(express.static(path.join(__dirname, "public")));

app.use(api_url, router);

app.all("*", notFoundErrorHandler);
app.use(validationErrorHandler);

app.listen(port, () =>
  console.log(
    `${greenBright("[Server]")} Now listening for requests sent to ${domain}${
      process.env.NODE_ENV !== "production" ? port : ""
    }`
  )
);
