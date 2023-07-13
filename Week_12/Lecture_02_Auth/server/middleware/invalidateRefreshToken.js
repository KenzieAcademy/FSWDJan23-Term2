import { cookie_name, refresh_token_secret } from "../config/app.config";
import User from "../models/user.model";
import { verifyJWT } from "../utils/jwt.utils";

export async function invalidateRefreshToken(req, res, next) {
  const refreshToken = req.signedCookies[cookie_name];

  if (!refreshToken) return next();

  try {
    const payload = await verifyJWT(refreshToken, refresh_token_secret);

    const user = await User.findById(payload.sub);
    if (!user) return res.status(403).json({ error: "Forbidden" });

    user.refreshTokens = user.refreshTokens.filter(
      (token) => token !== refreshToken
    );
    await user.save();
    next();
  } catch (error) {
    next(error);
  }
}
