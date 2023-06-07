import { Router } from "express";
import {
  createPlayerHandler,
  getAllPlayersHandler,
  getPlayerByIdHandler,
} from "../../controllers/players.controller";

/**
 * Every request that makes its way to this router
 * has a URL that starts with:
 * localhost:3001/api/players
 */
const playersRouter = Router();

// URL: localhost:3001/api/players
playersRouter
  .route("/")
  // GET /api/players
  .get(getAllPlayersHandler)
  // POST /api/players
  .post(createPlayerHandler);

// URL: localhost:3001/api/players/:id
playersRouter
  .route("/:id")
  // GET /api/players/:id
  .get(getPlayerByIdHandler);

export default playersRouter;
