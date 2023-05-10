import "./GoalieRow.css";

const GoalieRow = ({ goalie }) => {
  const { firstName, lastName, jerseyNum, gloveHand, imgUrl, style } = goalie;
  const fullName = `${firstName} ${lastName}`;

  return (
    <>
      <td>
        <img className="roster-row-headshot" src={imgUrl} alt={fullName} />
      </td>
      <td>{fullName}</td>
      <td>{jerseyNum}</td>
      <td>{gloveHand}</td>
      <td>{style}</td>
    </>
  );
};

export default GoalieRow;
