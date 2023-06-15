export default async (error, req, res, next) => {
  if (error.name === "ValidationError") {
    return res
      .status(422)
      .json({ message: "Validation Error", errors: error.errors });
  }

  res.status(500).json({ message: "Unhandled server error" });
};
