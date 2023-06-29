import { Router } from "express";
import { createShip } from "../controllers/ship.controller";

const shipRoutes = Router();

shipRoutes
  .route("/")
  // POST /api/ships - create a new ship
  .post(createShip);

export default shipRoutes;
