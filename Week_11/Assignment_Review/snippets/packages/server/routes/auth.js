import express from "express";
import bcrypt from "bcryptjs";
import { User } from "../models";
import keys from "../config/keys";
import jwt from "jsonwebtoken";
import sendVerificationEmail from "../utils/sendVerificationEmail";

const router = express.Router();

router.route("/").get((req, res, next) => {
  res.send("auth endpoint");
});

router.post("/signup", async (req, res) => {
  const { username, email, password, confirm_password, profile_image } =
    req.body;

  if (!password || !email || !username || !confirm_password) {
    return res.status(422).json({ error: "please add all the fields" });
  }

  if (password !== confirm_password) {
    return res.status(422).json({ error: "passwords do not match" });
  }

  User.findOne({ $or: [{ username: username }, { email: email }] })
    .then((savedUser) => {
      if (savedUser) {
        return res
          .status(422)
          .json({ error: "user already exists with that username or email" });
      }
      bcrypt.hash(password, 12).then((hashedpassword) => {
        const user = new User({
          username,
          email,
          passwordHash: hashedpassword,
          profile_image: profile_image,
        });

        user
          .save()
          .then((user) => {
            sendVerificationEmail(user.email, user.emailVerificationCode).then(
              () => {
                res.json({ message: "saved successfully" });
              }
            );
          })
          .catch((err) => {
            console.log(err);
            res
              .status(422)
              .json({ error: "Invalid submission", errors: err.errors });
          });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/verify/:code", async (req, res) => {
  const { code } = req.params;

  try {
    const user = await User.findOne({ emailVerificationCode: code });

    if (!user) return res.redirect("http://localhost:3000/register");

    user.verified = true;
    await user.save();

    res.redirect("http://localhost:3000/login");
  } catch (error) {
    res.sendStatus(500);
  }
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(422).json({ error: "missing username or password" });
  }

  const user = await User.findOne({ username: username });
  const passwordCorrect =
    user === null ? false : await bcrypt.compare(password, user.passwordHash);

  if (!(user && passwordCorrect)) {
    return res.status(401).json({
      error: "invalid username or password",
    });
  }

  if (!user.verified)
    return res.status(401).json({ error: "Please verify your email first." });

  const userForToken = {
    username: user.username,
    id: user._id,
  };

  const token = jwt.sign(userForToken, keys.jwt.secret);
  res
    .status(200)
    .send({ token, username, uid: user.id, profile_image: user.profile_image });
});

module.exports = router;
