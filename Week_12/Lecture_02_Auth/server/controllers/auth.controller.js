import { cookie_name, cookie_options, salt_length } from "../config/app.config";
import User from "../models/user.model";
import bcrypt from "bcryptjs";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt.utils";

/**
 * Create an account after ensuring the username is unique.
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export async function signUp(req, res, next) {
  const { username, password } = req.body;
  try {
    /**
     * Ensure the username provided is unique.
     */
    let user = await User.findOne({ username });
    if (user)
      return res.status(422).json({ username: "Username already in use." });

    /**
     * Encrypt the password
     */
    const passwordHash = await bcrypt.hash(password, salt_length);

    /**
     * Create the user
     */
    user = await User.create({ username, passwordHash });

    user = user.toJSON();

    res.json(user);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

/**
 * Verify the user exists and compare the password.
 * If valid credentials were provided, authorize future
 * access by creating an access token in (in JWT form) and
 * a refresh token (in JWT form, but as a cookie attached
 * to the response)
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export async function signIn(req, res, next) {
  const { username, password } = req.body;

  try {
    /**
     * Ensure the username belongs to a user.
     * If it does not, return a 422 response indicating
     * invalid credentials
     */
    let user = await User.findOne({ username });
    if (!user)
      return res
        .status(422)
        .json({ username: "Invalid username and/or password." });

    /**
     * Compare the candidate password to the found user's
     * encrypted password through the use of `bcrypt.compare()`
     */
    const isPasswordValid = bcrypt.compareSync(password, user.passwordHash);
    if (!isPasswordValid)
      return res
        .status(422)
        .json({ username: "Invalid username and/or password." });

    /**
     * Create access token and refresh token
     */
    const accessToken = generateAccessToken(user);
    const refreshToken = await generateRefreshToken(user);

    res
      .cookie(cookie_name, refreshToken, cookie_options)
      .json({ token: accessToken, user: user.toJSON() });
  } catch (error) {
    next(error);
  }
}

/**
 * This function will generate a new access and refresh token
 * for the user
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export async function refreshAccess(req, res, next) {
  try {
    let refreshToken = req.signedCookies[cookie_name];
    const user = req.user;

    /**
     * Delete the existing refresh token
     */
    user.refreshTokens = user.refreshTokens.filter(
      (token) => token !== refreshToken
    );

    /**
     * Generate the new access token
     */
    const accessToken = generateAccessToken(req.user);
    /**
     * Generate the new refresh token
     */
    refreshToken = await generateRefreshToken(req.user);

    res
      .cookie(cookie_name, refreshToken, cookie_options)
      .json({ token: accessToken, user: user.toJSON() });
  } catch (error) {
    next(error);
  }
}
