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
    const { password } = req.body;
    const { username } = req.params;

    const hashedpassword = await bcrypt.hash(password, 12);

    try {
      const userUpdate = await User.findOneAndUpdate(
        {
          username: username,
        },
        {
          passwordHash: hashedpassword,
        },
        {
          new: true,
        }
      );

      res.json(userUpdate.toJSON());
    } catch (error) {
      res.status(404).end();
    }
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
