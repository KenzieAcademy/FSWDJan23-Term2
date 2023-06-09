import { Router } from "express";
import apiRouter from "./api";
import docsRouter from "./docs";

/**
 * Every single request that makes its way
 * into this router has a URL starting with
 * localhost:3001/
 */
const routes = Router();

routes.use("/api", apiRouter);
routes.use("/docs", docsRouter);

export default routes;
