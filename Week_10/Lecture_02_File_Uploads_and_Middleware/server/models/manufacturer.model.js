import { Schema, model } from "mongoose";
const { ObjectId } = Schema.Types;
const ManufacturerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  yearEstablished: {
    type: Number,
    required: true,
  },
  ships: [{ type: ObjectId, ref: "Ship" }],
});

const Manufacturer = model("Manufacturer", ManufacturerSchema);
export default Manufacturer;
