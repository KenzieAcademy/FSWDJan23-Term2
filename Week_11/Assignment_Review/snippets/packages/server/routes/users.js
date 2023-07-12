import express from "express";
import bcrypt from "bcryptjs";
import { User } from "../models";
import { requireAuth } from "../middleware";

const router = express.Router();

router
  .route("/:username")
  .get(async (req, res) => {
    const { username } = req.params;

    try {
      const populateQuery = {
        path: "posts",
        populate: { path: "author", select: ["username", "profile_image"] },
      };
      const user = await User.findOne({ username }).populate(populateQuery);

      if (!user) return res.sendStatus(404);

      res.json(user);
    } catch (error) {
      res.sendStatus(500);
    }
  })
  .put(async (req, res) => {
    const { current_password, new_password, confirm_new_password } = req.body;
    const { username } = req.params;

    if (!current_password || !new_password) {
      return res.status(422).json({ error: "please include all fields" });
    }

    const user = await User.findOne({ username });

    if (!user) return res.sendStatus(404);

    const currentPasswordIsValid = await bcrypt.compare(
      current_password,
      user.passwordHash
    );

    if (!currentPasswordIsValid) {
      return res.status(422).json({ error: "Invalid password" });
    }

    if (new_password.length < 8 || new_password.length > 20) {
      return res
        .status(422)
        .json({ error: "password must be between 8 and 20 characters" });
    } else if (new_password !== confirm_new_password) {
      return res.status(422).json({ error: "passwords do not match" });
    }

    const newPasswordHash = await bcrypt.hash(new_password, 12);
    user.passwordHash = newPasswordHash;
    await user.save();

    res.sendStatus(200);
  });

router.route("/:username/avatar").put(requireAuth, async (req, res) => {
  const { username } = req.params;
  const { profile_image } = req.body;

  const populateQuery = {
    path: "posts",
    populate: { path: "author", select: ["username", "profile_image"] },
  };
  const user = await User.findOneAndUpdate(
    { username },
    { profile_image },
    { new: true, runValidators: true }
  ).populate(populateQuery);

  if (!user) res.status(404).json({ error: "user not found" });

  res.json(user.toJSON());
});

module.exports = router;
