import { Router } from "express";
import { uploadImage } from "../controllers/file.controller";

const fileRoutes = Router();

fileRoutes
  .route("/images")
  // POST /api/files/images - save an uploaded image
  .post(uploadImage);

export default fileRoutes;
