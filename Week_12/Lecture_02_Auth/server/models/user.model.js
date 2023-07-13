import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 24,
      unique: true, // This is not a validation attribute
    },
    passwordHash: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      /**
       * Role IDs:
       * 1: Admin
       * 2: Employee
       * 3: User
       */
      enum: [1, 2, 3],
      default: 3,
    },
    refreshTokens: [
      {
        type: String,
        unique: true,
      },
    ],
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.refreshTokens;
        delete ret.passwordHash;
        delete ret.__v;
        delete ret.createdAt;
        delete ret.updatedAt;

        return ret;
      },
    },
  }
);

const User = model("User", UserSchema);

export default User;
