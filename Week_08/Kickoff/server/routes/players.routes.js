import { Router } from "express";
import {
  createPlayerHandler,
  deletePlayerByIdHandler,
  findAllPlayersHandler,
  findPlayerByIdHandler,
  updatePlayerHandler,
} from "../controllers/players.controller";

/**
 * All URL's start with /api/players
 */
const router = Router();

router.route("/").get(findAllPlayersHandler).post(createPlayerHandler);

router
  .route("/:id")
  .get(findPlayerByIdHandler)
  .put(updatePlayerHandler)
  .delete(deletePlayerByIdHandler);

export default router;
