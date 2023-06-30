import "./AvatarPicker.css";
import { Form } from "react-bootstrap";

const AvatarPicker = ({ imgs, profileImage, setProfileImage }) => {
  const handleSelectAvatar = (avatar) => setProfileImage(avatar);

  return (
    <Form.Group className="mb-2">
      <Form.Label>Select Avatar</Form.Label>
      <div className="avatar-options">
        {imgs &&
          imgs.map((avatar, i) => (
            <img
              key={`avatar_${i}`}
              className={`selectable-avatar ${
                avatar === profileImage ? "selected-avatar" : ""
              }`}
              src={avatar}
              alt={avatar}
              onClick={() => handleSelectAvatar(avatar)}
            />
          ))}
      </div>
    </Form.Group>
  );
};

export default AvatarPicker;
