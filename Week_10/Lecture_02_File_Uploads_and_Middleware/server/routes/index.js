import { Router } from "express";
import manufacturerRoutes from "./manufacturer.routes";
import fileRoutes from "./file.routes";
import fileUpload from "express-fileupload";
import shipRoutes from "./ship.routes";

const router = Router();

router.use("/files", fileUpload(), fileRoutes);
router.use("/manufacturers", manufacturerRoutes);
router.use("/ships", shipRoutes);

export default router;
