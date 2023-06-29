import { Manufacturer } from "../models";

export async function findAllManufacturers(req, res, next) {
  try {
    const allManufacturers = await Manufacturer.find();
    res.json(allManufacturers);
  } catch (error) {
    next(error);
  }
}

export async function createManufacturer(req, res, next) {
  try {
    const { name, yearEstablished } = req.body;
    const manufacturer = await Manufacturer.create({ name, yearEstablished });

    res.json(manufacturer);
  } catch (error) {
    next(error);
  }
}
