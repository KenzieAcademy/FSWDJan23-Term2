import express from "express";
import cors from "cors";

/**
 * Believe it or not, app is now an entire server application
 */
const app = express();

/**
 * Middleware functions: the request will be passed
 * through the declared middleware in the order it is declared.
 */
app.use(cors());
app.use(express.json());

/**
 * the `.get()` method accepts one or two arguments based on
 * how the method is formed. If the method is not chained to a
 * `.route()` method, it will accept two arguments:
 *  1. the URL
 *  2. a request handler callback function
 *
 * The request handler should have 2 parameters:
 *  1. req - the request object
 *      - will contain any information coming from the request itself
 *        (params, body, query strings, etc.)
 *  2. res - the response object
 *      - includes methods that can be called to impact how a
 *        response is sent back
 */
app
  .route("/")
  .get((req, res) => {
    res.send("Handling GET at /");
  })
  .post((req, res) => {
    res.send("Handling POST at /");
  });
// app.get("/", (req, res) => {
//   res.send("Hi there :)");
// });
// app.post("/"),
//   (req, res) => {
//     res.send("This handles the post request");
//   };

/**
 * The first argument to pass into app.listen()
 * should be the port you want to listen on.
 *
 * The second argument is a callback that should run
 * when the server is established. For now, we'll just use
 * a console log to log the status of the server.
 */
app.listen(3001, () =>
  console.log(
    "[Server] Successfully connected! Express server now listening for HTTP requests sent to port 3001."
  )
);
