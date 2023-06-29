import { Ship } from "../models";

export async function createShip(req, res, next) {
  try {
    const {
      name,
      imgUrl,
      topSpeed,
      jumpRangeUnladen,
      jumpRangeLaden,
      maxCargoCapacity,
    } = req.body;

    const newShip = await Ship.create({
      name,
      imgUrl,
      topSpeed,
      jumpRangeUnladen,
      jumpRangeLaden,
      maxCargoCapacity,
    });

    res.json(newShip);
  } catch (error) {
    next(error);
  }
}
