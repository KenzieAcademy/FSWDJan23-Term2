import { Router } from "express";
import playersRouter from "./players.routes";

/**
 * Any request that makes its way into this router
 * has a URL that starts with:
 * localhost:3001/api
 */
const apiRouter = Router();

apiRouter.use("/players", playersRouter);
// apiRouter.use("/teams", teamsRouter)

export default apiRouter;
