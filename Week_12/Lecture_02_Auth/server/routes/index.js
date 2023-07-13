import { Router } from "express";
import authRoutes from "./auth.routes";
import { requireAuth } from "../middleware/requireAuth";

const router = Router();

router.use("/auth", authRoutes);

router
  .route("/protected")
  // GET /api/protected
  .get(requireAuth, (req, res) => res.send("Protected resource accessed"));

export default router;
