/**
 * This import statement is responsible for bringing in the
 * express() function that will create a base app that we can run
 */
import express from "express";
/**
 * This import statement is responsible for opening our application
 * in a way that it will accept requests from other origins.
 */
import cors from "cors";
/**
 * This import statement is responsible for importing the base router
 * that will distribute requests to the specific subroutes based on
 * url
 */
import routes from "./routes";

const app = express();

/**
 * Define application-wide middleware
 */
/**
 * cors enables requests from any domain when configured
 * this way
 */
app.use(cors());
/**
 * express.json() middleware enables our express application
 * to parse and read a request's body as a JSON object
 */
app.use(express.json());

/**
 * Create and use a router middleware
 *
 * Pass every request with a URL starting with /
 * into a defined router middleware
 */
app.use(routes);

/**
 * A catch route can handle any requests with a URL not
 * defined by any endpoint
 */
app.all("*", (req, res) => {
  res.sendStatus(404);
});

/**
 * Option 1 regarding starting the application:
 * opening the server in the same file as it is
 * defined
 */
// app.listen(3001, () =>
//   console.log(
//     "[Server] Now listening on port 3001. Check out localhost:3001 for info"
//   )
// );

/**
 * Option 2: export the app
 */
export default app;
