import Player from "../models/player.model";

export async function createPlayerHandler(req, res, next) {
  const { firstName, lastName, jerseyNum, birthday, position } = req.body;
  /**
   * Option 1:
   *  1. Use the model as a constructor to create
   *    a new document object
   *  2. Save the new document object to the database
   */
  // Step 1: Use the model as a constructor
  // const newPlayer = new Player({
  //   firstName,
  //   lastName,
  //   jerseyNum,
  //   birthday,
  //   position,
  // });
  // Step 2: Call the document's `.save()` method to insert
  // the document into the database
  // await newPlayer.save();
  try {
    /**
     * Option 2: Better for creating single documents
     * with no object references:
     *  1. Use the model's `.create()` method
     */
    const playerDocument = await Player.create({
      firstName,
      lastName,
      jerseyNum,
      birthday,
      position,
    });

    const newPlayer = playerDocument.toObject();
    res.json(newPlayer);
  } catch (error) {
    next(error);
  }
}

export async function findAllPlayersHandler(req, res, next) {
  try {
    /**
     * We can use query string parameters (req.query) for any additional filters,
     * limits, etc. (commonly used with pagination) to make this
     * endpoint more "multi-purpose"
     */
    let { limit, offset, position } = req.query;
    const queryParams = {};
    if (position) {
      queryParams.position = position;
    }
    /**
     * To run a search query for multiple documents in a given collection,
     * we use the model's `.find()` method.
     */
    /**
     * To find ALL documents in a collection, leave the `.find()` call
     * with empty arguments
     */
    offset = offset ? Number(offset) : 0;
    limit = limit ? Number(limit) : 20;

    const allPlayerDocuments = await Player.find(queryParams)
      .skip(offset)
      .limit(limit);

    res.json({
      next: `http://localhost:3001/api/players?limit=${limit}&offset=${
        offset + limit
      }`,
      prev:
        offset - limit < 0
          ? null
          : `http://localhost:3001/api/players?limit=${limit}&offset=${
              offset - limit
            }`,
      players: allPlayerDocuments,
    });
  } catch (error) {
    next(error);
  }
}
export async function findPlayerByNameHandler(req, res, next) {}
export async function findPlayerByIdHandler(req, res, next) {
  const { playerId } = req.params;
  try {
    /**
     * Option 1: Use the model's `.findOne()` method
     * `.findOne()` follows the same rules as `.find()`,
     * but only returns one document.
     */
    // const playerDocument = await Player.findOne({ _id: playerId });

    /**
     * Option 2: When finding a single document by its id, you can
     * skip the query parameters and just use the model's
     * `.findById()` method. With `.findById()`, there's no need to
     * package the parameter (i.e. the id) in an object
     */
    const playerDocument = await Player.findById(playerId);

    if (playerDocument === null) throw { name: "NotFoundError" };

    res.json(playerDocument);
  } catch (error) {
    next(error);
  }
}
export async function findPlayersByPositionHandler(req, res, next) {}
export async function updatePlayerByIdHandler(req, res, next) {}
export async function deletePlayerByIdHandler(req, res, next) {}
