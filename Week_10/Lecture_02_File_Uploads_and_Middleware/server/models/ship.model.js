import { Schema, model } from "mongoose";

const ShipSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 25,
    },
    topSpeed: {
      type: Number,
      required: true,
    },
    jumpRangeUnladen: {
      type: Number,
      required: true,
    },
    jumpRangeLaden: {
      type: Number,
      required: true,
    },
    maxCargoCapacity: {
      type: Number,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Ship = model("Ship", ShipSchema);
export default Ship;
