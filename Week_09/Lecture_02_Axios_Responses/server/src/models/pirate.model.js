import { Schema, model } from "mongoose";

const PirateSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
    minLength: [2, "Name must contain between 2 and 25 characters."],
    maxLength: [25, "Name must contain between 2 and 25 characters."],
  },
  nickName: {
    type: String,
    default: "N/A",
  },
  rank: {
    type: String,
    required: [true, "Rank is required."],
    enum: {
      values: ["Captain", "First Mate", "Deck Hand", "Yarr"],
      message:
        "Rank must be one of the available selections: Captain, First Mate, Deck Hand, or Yarr.",
    },
  },
  numberOfParrots: {
    type: Number,
    required: [true, "You must provide a number of parrots."],
    min: [0, "Pirate can only have between 0 and 5 parrots."],
    max: [5, "Pirate can only have between 0 and 5 parrots."],
  },
  hasPegLeg: {
    type: Boolean,
    default: false,
  },
  catchPhrase: {
    type: String,
    default: "N/A",
    match: [/^[^0-9]+$/, "Catch phrase cannot contain numbers."],
  },
});

const Pirate = model("Pirate", PirateSchema);

export default Pirate;
