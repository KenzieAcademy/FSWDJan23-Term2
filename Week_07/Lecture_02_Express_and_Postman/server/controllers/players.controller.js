import players from "../testData";
import { playerIdGenerator } from "../utils/idGenerator";

export function getAllPlayersHandler(req, res) {
  /**
   * res.json() will send a response in JSON form
   * that way, wherever the request came from can now use
   * the JSON object right away
   */
  res.json(players);
}

export function createPlayerHandler(req, res) {
  /**
   * Access any body from the incoming request through req.body
   */
  const { firstName, lastName, jerseyNum, position } = req.body;

  /**
   * It's always a good idea to validate on the back end
   */
  if (!firstName || !lastName || !jerseyNum || !position) {
    /**
     * 422 status means Unprocessable Entity
     * (the submitted data is considered invalid)
     */
    res.status(422).json({ message: "Invalid submission" });
    return;
  }

  const newId = playerIdGenerator.next().value;
  const newPlayer = {
    id: newId,
    firstName,
    lastName,
    jerseyNum,
    position,
  };
  players.push(newPlayer);
  res.status(201).json(newPlayer);
}

export function getPlayerByIdHandler(req, res) {
  /**
   * To access the route parameters, use req.params
   */
  const { id } = req.params;

  const player = players.find((player) => player.id === Number(id));

  if (!player) {
    res
      .status(404)
      .json({ message: "Player with that ID could not be found." });
  } else {
    res.json(player);
  }
}

export function updatePlayerByIdHandler(req, res) {
  /**
   * A PATCH request generally contains the necessary data
   * in one or two places;
   *  1. the route parameters (typically used for the purpose of
   *    identifying the correct resource)
   *  2. the request body (typically used for the purpose of defining
   *    the new data that must be updated)
   */
  const { id } = req.params;
  const { firstName, lastName, jerseyNum, position } = req.body;

  const player = players.find((player) => player.id === Number(id));

  if (!player) {
    return res.status(404).json({
      message: "Could not update the player because they don't exist",
    });
  }

  if (firstName) player.firstName = firstName;
  if (lastName) player.lastName = lastName;
  if (jerseyNum) player.jerseyNum = jerseyNum;
  if (position) player.position = position;

  res.json(player);
}

export function deletePlayerByIdHandler(req, res) {
  /**
   * Pull the id from the route parameters
   */
  const { id } = req.params;

  let idx;
  for (let i = 0; i < players.length; i++) {
    if (players[i].id === Number(id)) {
      idx = i;
      break;
    }
  }

  if (idx === undefined) {
    return res.sendStatus(404);
  }

  const deletedPlayer = players[idx];
  players.splice(idx, 1);

  res.json(deletedPlayer);
}
