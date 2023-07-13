import jwt from "jsonwebtoken";
import {
  access_token_secret,
  access_token_ttl,
  refresh_token_secret,
  refresh_token_ttl,
} from "../config/app.config";

export function generateAccessToken(user) {
  const token = jwt.sign(
    { sub: user._id, username: user.username },
    access_token_secret,
    { expiresIn: access_token_ttl }
  );

  return token;
}

export async function generateRefreshToken(user) {
  const token = jwt.sign({ sub: user._id }, refresh_token_secret, {
    expiresIn: refresh_token_ttl,
  });

  if (user.refreshTokens.length < 5)
    user.refreshTokens = [...user.refreshTokens, token];
  else {
    const [, ...lastFourTokens] = user.refreshTokens;
    user.refreshTokens = [...lastFourTokens, token];
  }
  await user.save();

  return token;
}

export async function verifyJWT(token, secret) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, payload) => {
      if (err) {
        return reject(err);
      }

      resolve(payload);
    });
  });
}
