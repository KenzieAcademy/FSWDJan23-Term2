import express from "express";
import cors from "cors";
import keys from "./config/keys";
/**
 * Import mongoose so we can connect to our MongoDB database
 */
import mongoose from "mongoose";

mongoose
  .connect(keys.db_url)
  .then(() => {
    /**
     * Do anything you need to once the connection is established
     * with the database. This could range from something simple
     * like printing a success message to the console, all the way
     * to running some kind of complex function that seeds data, cleans
     * up data, schedules operations, etc.
     */
    console.log("[Database] Connection established");
  })
  .catch((error) => console.error("[Database] Connection failed: ", error));

const app = express();

app.use(cors());
app.use(express.json());

const port = keys.port;
app.listen(port, () =>
  console.log(`[Server] Now listening on localhost:${port}`)
);
