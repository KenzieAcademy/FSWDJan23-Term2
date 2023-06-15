import { Router } from "express";
import {
  createPlayerHandler,
  findAllPlayersHandler,
  findPlayerByIdHandler,
} from "../controllers/player.controller";

/**
 * By default, all requests with a URL
 * starting with "/api/players" go to this router
 */
const playerRouter = Router();

/**
 * URL: /api/players
 */
playerRouter
  .route("/")
  // POST /api/players
  .post(createPlayerHandler)
  // GET /api/players
  .get(findAllPlayersHandler);

/**
 * URL: /api/players/:playerId
 */
playerRouter
  .route("/:playerId")
  // GET /api/players/:playerId
  .get(findPlayerByIdHandler);

export default playerRouter;
