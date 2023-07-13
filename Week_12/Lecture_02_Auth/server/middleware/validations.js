import { PASSWORD_REGEX } from "../config/constants.config";
import { VALIDATION_ERROR } from "../config/error.config";

export function validateSignup(req, res, next) {
  let { username, password, confirmPassword } = req.body;
  const errors = {};

  /**
   * Validating the username
   */
  username = username.toString();
  if (!username) errors.username = "Username is required.";
  else if (username.length < 4)
    errors.username = "Username must be at least 4 characters.";
  else if (username.length > 24)
    errors.username = "Username cannot be longer than 24 characters.";

  /**
   * Validating the password
   */
  password = password.toString();
  if (!password) errors.password = "Password is required.";
  else if (password.length < 8)
    errors.password = "Password must be at least 8 characters.";
  else if (password.length > 32)
    errors.password = "Password cannot be longer than 32 characters.";
  else if (!PASSWORD_REGEX.test(password))
    errors.password =
      "Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and no spaces.";
  /**
   * Validating the confirmPassword
   */
  confirmPassword = confirmPassword.toString();
  if (!confirmPassword) errors.confirmPassword = "Must confirm password.";
  else if (password !== confirmPassword)
    errors.confirmPassword = "Passwords do not match.";

  if (Object.keys(errors).length === 0) {
    next();
  } else {
    next({ name: VALIDATION_ERROR, errors });
  }
}

export function validateSignin(req, res, next) {
  let { username, password } = req.body;
  const errors = {};

  if (!username) errors.username = "Username is required.";
  if (!password) errors.username = "Password is required.";

  if (Object.keys(errors).length === 0) {
    next();
  } else {
    next({ name: VALIDATION_ERROR, errors });
  }
}
