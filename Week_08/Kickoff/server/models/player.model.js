import { Schema, model } from "mongoose";

const PlayerSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 50,
    },
    lastName: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 50,
    },
    jerseyNum: {
      type: Number,
      required: true,
      min: 0,
      max: 99,
    },
    position: {
      type: String,
      enum: [
        "Center",
        "Left Wing",
        "Right Wing",
        "Left Defense",
        "Right Defense",
        "Goalie",
      ],
      required: true,
    },
    isRetired: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Player = model("Player", PlayerSchema);

export default Player;
