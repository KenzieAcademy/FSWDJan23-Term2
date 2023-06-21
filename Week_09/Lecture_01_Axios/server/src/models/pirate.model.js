import { Schema, model } from "mongoose";

const PirateSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 25,
  },
  nickName: {
    type: String,
    default: "N/A",
  },
  rank: {
    type: String,
    required: true,
    enum: ["Captain", "First Mate", "Deck Hand", "Yarr"],
  },
  numberOfParrots: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  hasPegLeg: {
    type: Boolean,
    default: false,
  },
  catchPhrase: {
    type: String,
    default: "N/A",
    match: /^[^0-9]+$/,
  },
});

const Pirate = model("Pirate", PirateSchema);

export default Pirate;
