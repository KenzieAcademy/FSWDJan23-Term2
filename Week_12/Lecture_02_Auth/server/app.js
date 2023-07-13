import "dotenv/config";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import {
  api_url,
  cookie_secret,
  cors_options,
  db_uri,
  domain,
  onDbConnectError,
  onDbConnectSuccess,
  onServerListenSuccess,
  port,
} from "./config/app.config";
import router from "./routes";
import errorHandler from "./middleware/errorHandler";

mongoose.connect(db_uri).then(onDbConnectSuccess).catch(onDbConnectError);

const app = express();

app.use(cors(cors_options));
app.use(cookieParser(cookie_secret));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(api_url, router);

app.use(errorHandler);

app.listen(port, onServerListenSuccess);
