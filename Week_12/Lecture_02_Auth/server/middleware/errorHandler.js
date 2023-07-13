import {
  ACCESS_DENIED_ERROR,
  ACCESS_TOKEN_EXPIRED_ERROR,
  UNAUTHORIZED_ERROR,
  VALIDATION_ERROR,
} from "../config/error.config";

export default function errorHandler(error, req, res, next) {
  try {
    switch (error.name) {
      case VALIDATION_ERROR: {
        res.status(422).json(error.errors);
        return;
      }
      case UNAUTHORIZED_ERROR: {
        res.status(401).json({ error: "You must be logged in" });
        return;
      }
      case ACCESS_DENIED_ERROR: {
        res.status(403).json({ error: "Access denied" });
        return;
      }
      case ACCESS_TOKEN_EXPIRED_ERROR: {
        res.status(401).json({ error: "Access token expired" });
      }
      default: {
        console.log(error);
        res.sendStatus(500);
      }
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
