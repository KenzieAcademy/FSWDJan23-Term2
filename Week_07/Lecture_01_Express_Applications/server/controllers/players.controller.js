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

  res.json(player);
}
