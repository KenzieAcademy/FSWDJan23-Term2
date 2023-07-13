import { cookie_name, refresh_token_secret } from "../config/app.config";
import { REFRESH_TOKEN_EXPIRED_ERROR } from "../config/error.config";
import User from "../models/user.model";
import { verifyJWT } from "../utils/jwt.utils";

export async function requireRefresh(req, res, next) {
  const refreshToken = req.signedCookies[cookie_name];
  if (!refreshToken)
    return res.status(401).json({ error: "You must be signed in" });

  try {
    const payload = await verifyJWT(refreshToken, refresh_token_secret);

    const user = await User.findById(payload.sub);
    if (!user.refreshTokens.includes(refreshToken))
      return res.status(401).json({ error: "You must be signed in" });

    req.user = user;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      next({ name: REFRESH_TOKEN_EXPIRED_ERROR });
    }
    next(error);
  }
}
