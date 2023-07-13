import { Router } from "express";
import { refreshAccess, signIn, signUp } from "../controllers/auth.controller";
import { validateSignin, validateSignup } from "../middleware/validations";
import { requireRefresh } from "../middleware/requireRefresh";
import { invalidateRefreshToken } from "../middleware/invalidateRefreshToken";

const router = Router();

router
  .route("/signup")
  // POST /api/auth/signup
  .post(validateSignup, signUp);

router
  .route("/signin")
  // POST /api/auth/signin
  .post(validateSignin, invalidateRefreshToken, signIn);

router
  .route("/refresh")
  // ALL /api/auth/refresh
  .all(requireRefresh, refreshAccess);

export default router;
