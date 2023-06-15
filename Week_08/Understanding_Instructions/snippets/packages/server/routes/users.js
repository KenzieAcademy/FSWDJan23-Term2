import express from "express";
import bcrypt from "bcryptjs";
import { User } from "../models";
import { requireAuth } from "../middleware";

const router = express.Router();

router
  .route("/:username")
  /**
   * GET route
   */
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

router.route("/:id/avatar").put(requireAuth, async (req, res) => {
  const { id } = req.params;
  const { profile_image } = req.body;

  const user = await User.findById(id);

  if (!user) res.status(404).json({ error: "user not found" });

  user.profile_image = profile_image;
  await user.save();
  res.json(user.toJSON());
});

module.exports = router;
