import { Router } from "express";
import fileUpload from "express-fileupload";
import path from "path";
import { uuid } from "uuidv4";

const router = Router();

router.post("/avatar", fileUpload(), async (req, res, next) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(422).json({ error: "no files provided" });
    }

    const avatar = req.files.fileUpload;
    const extension = req.files.fileUpload.name.split(".").at(-1);
    const generatedFileName = uuid().split("-").join("") + "." + extension;
    const uploadPath = path.join(
      __dirname,
      "..",
      "public",
      "avatars",
      generatedFileName
    );

    avatar.mv(uploadPath, function (err) {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({ path: `/avatars/${generatedFileName}` });
    });
  } catch (error) {
    next(error);
  }
});

export default router;
