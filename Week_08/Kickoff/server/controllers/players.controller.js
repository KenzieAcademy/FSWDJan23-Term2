import Player from "../models/player.model";

export const findAllPlayersHandler = async (req, res, next) => {
  try {
    /**
     * Model.find() - find multiple documents from the Model's collection
     * that match the provided query parameters. If no parameters are provided,
     * it will simply return all documents in that collection.
     */
    const allPlayers = await Player.find();

    res.json(allPlayers);

    // Player.find()
    //   .then((allPlayers) => res.json(allPlayers))
    //   .catch((error) => next(error));
  } catch (error) {
    next(error);
  }
};

export const findPlayerByIdHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const player = await Player.findById(id);

    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }

    res.json(player);
  } catch (error) {
    next(error);
  }
};

export const createPlayerHandler = async (req, res, next) => {
  try {
    const { firstName, lastName, jerseyNum, position, isRetired } = req.body;

    /**
     * Option 1: Creating with the .create() method
     * Model.create() - accepts an object and attempts to create a new
     * document in the Model's collection from that object
     */
    const newPlayer = await Player.create({
      firstName,
      lastName,
      jerseyNum,
      position,
      isRetired,
    });
    /**
     * Option 2: Creating with new and .save() method
     */
    // const newPlayer = new Player({
    //   firstName,
    //   lastName,
    //   jerseyNum,
    //   position,
    //   isRetired,
    // });
    // await newPlayer.save();

    res.json(newPlayer);
  } catch (error) {
    next(error);
  }
};

export const updatePlayerHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, jerseyNum, position, isRetired } = req.body;

    const updatedPlayer = await Player.findByIdAndUpdate(
      id,
      {
        firstName,
        lastName,
        jerseyNum,
        position,
        isRetired,
      },
      { new: true, runValidators: true }
    );

    res.json(updatedPlayer);
  } catch (error) {
    next(error);
  }
};

export const deletePlayerByIdHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedPlayer = await Player.findByIdAndDelete(id);
    if (!deletedPlayer) {
      return res.status(404).json({ message: "Player not found" });
    }

    res.json(deletedPlayer);
  } catch (error) {
    next(error);
  }
};
