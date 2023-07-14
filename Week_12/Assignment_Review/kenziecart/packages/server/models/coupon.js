import { Schema, model } from "mongoose";

const CouponSchema = new Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
    },
    discount: {
      type: Number,
      required: true,
      min: 0,
      max: 1,
    },
    expirationDate: {
      type: Date,
      required: false,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.expirationDate;
        delete ret.createdAt;
        delete ret.updatedAt;
        delete ret.__v;
        return ret;
      },
    },
  }
);

CouponSchema.pre("save", function (next) {
  this.code = this.code.toUpperCase();
  next();
});

CouponSchema.methods.isValid = function () {
  return this.expirationDate > new Date();
};

const Coupon = model("Coupon", CouponSchema);

export default Coupon;
