import { Router } from "express";
import { Coupon } from "../models";

const router = Router();

router
  .route("/create")
  // GET /api/coupons/create?code=x&discount=y
  .get(async (req, res) => {
    console.log(req.query);
    const { code, discount, exp } = req.query;

    if (!code || !discount)
      return res
        .status(422)
        .json({ error: "You must provide a code and discount" });

    try {
      const existingCoupon = await Coupon.findOne({ code: code.toUpperCase() });
      if (existingCoupon)
        return res.status(422).json({ error: "Coupon code already in use." });

      const queryParams = { code, discount };
      if (exp) queryParams.expirationDate = new Date(exp);
      console.log(queryParams);
      await Coupon.create(queryParams);

      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

router
  .route("/verify")
  // GET /api/coupons/verify?code=x
  .get(async (req, res) => {
    const { code } = req.query;
    if (!code) return res.status(422).json({ error: "Coupon code required" });

    try {
      const coupon = await Coupon.findOne({ code: code.toUpperCase() });
      if (!coupon)
        return res.status(404).json({ error: "No coupon matches that code" });
      if (coupon.expirationDate < new Date())
        return res.status(422).json({ error: "Coupon is expired" });

      res.json(coupon.toJSON());
    } catch (error) {
      res.sendStatus(500);
    }
  });

export default router;
