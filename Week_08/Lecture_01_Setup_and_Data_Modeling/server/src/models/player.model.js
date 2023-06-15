import { Schema, model } from "mongoose";

const PlayerSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First name is required."],
    minLength: [2, "First name must be at least 2 characters long."],
    maxLength: [50, "First name cannot be longer than 50 characters."],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required."],
    minLength: [2, "First name must be at least 2 characters long."],
    maxLength: [50, "First name cannot be longer than 50 characters."],
  },
  jerseyNum: {
    type: Number,
    required: true,
    min: [0, "Jersey number must be between 0 and 99"],
    max: [99, "Jersey number must be between 0 and 99"],
  },
  birthday: {
    type: Date,
    required: true,
    validate: {
      validator: (value) => {
        var birthDate = new Date(value);
        var today = new Date();

        return (
          today >=
          new Date(
            birthDate.getFullYear() + 16,
            birthDate.getMonth(),
            birthDate.getDate()
          )
        );
      },
      message: "Player must be at least 16 years old.",
    },
  },
  position: {
    type: String,
    required: [true, "Player must be assigned to a position."],
    enum: [
      [
        "Center",
        "Left Wing",
        "Right Wing",
        "Left Defense",
        "Right Defense",
        "Goalie",
        "Enforcer",
      ],
      "Please select from the provided options.",
    ],
  },
});

const Player = model("Player", PlayerSchema);

export default Player;
