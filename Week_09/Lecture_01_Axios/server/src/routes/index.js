import { Router } from "express";
import pirateRoutes from "./pirate.routes";

const router = Router();

router.get("/", (req, res, next) => res.sendStatus(200));

router.use("/pirates", pirateRoutes);

export default router;
