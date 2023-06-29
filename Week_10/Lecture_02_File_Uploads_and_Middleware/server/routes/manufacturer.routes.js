import { Router } from "express";
import {
  createManufacturer,
  findAllManufacturers,
} from "../controllers/manufacturer.controller";

const manufacturerRoutes = Router();

manufacturerRoutes
  .route("/")
  // GET /api/manufacturers
  .get(findAllManufacturers)
  // POST /api/manufacturers
  .post(createManufacturer);

export default manufacturerRoutes;
