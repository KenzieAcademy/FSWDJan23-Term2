import { access_token_secret } from "../config/app.config";
import { verifyJWT } from "../utils/jwt.utils";
import User from "../models/user.model";
import { ACCESS_TOKEN_EXPIRED_ERROR } from "../config/error.config";

/**
 * This function is responsible for determining an access
 * token's validity. It will verify the token was signed by
 * this server, and that it has not expired.
 *
 * If the token has expired, the function will return an error
 * indicating so. Otherwise, the function will find the user
 * who this access token belongs to, confirming they exist,
 * and attach the user to the request before passing it on
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export async function requireAuth(req, res, next) {
  const authHeader = req.get("Authorization");

  if (!authHeader)
    return res.status(401).json({ error: "You must be signed in." });

  const accessToken = authHeader.replace("Bearer ", "");

  try {
    const payload = await verifyJWT(accessToken, access_token_secret);

    const user = await User.findById(payload.sub);
    if (!user) return res.status(401).json({ error: "You must be signed in." });

    req.user = user;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      next({ name: ACCESS_TOKEN_EXPIRED_ERROR });
    }
    next(error);
  }
}
