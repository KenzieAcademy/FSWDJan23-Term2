import path from "path";
import { uuid } from "uuidv4";

export async function uploadImage(req, res, next) {
  /**
   * First, let's make a guard clause to ensure that there is actually
   * a file being uploaded
   */
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ error: "No files uploaded" });
  }

  /**
   * Then, pull the file out of the request, making note
   * to use the correct file name (i.e. the name used
   * on the client-side)
   */
  const image = req.files.file;
  /**
   * Generate a unique file name, keeping the original file's extension
   */
  const generatedImageName = uuid() + "." + image.name.split(".").at(-1);

  /**
   * Determine the path you wish to save the file to
   */
  const uploadPath = path.join(
    __dirname,
    "..",
    "public",
    "images",
    generatedImageName
  );

  image.mv(uploadPath, (err) => {
    if (err) {
      return res.sendStatus(500);
    }

    res.json({ path: `/images/${generatedImageName}` });
  });
}
