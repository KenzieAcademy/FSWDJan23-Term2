import FileUploader from "components/FileUploader";
import "./AvatarPicker.css";
import { Form } from "react-bootstrap";
import { useState } from "react";

const AvatarPicker = ({ imgs, profileImage, setProfileImage }) => {
  const [uploadedPath, setUploadedPath] = useState();
  const handleSelectAvatar = (avatar) => setProfileImage(avatar);

  return (
    <>
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
          {uploadedPath && (
            <img
              className={`selectable-avatar ${
                uploadedPath === profileImage ? "selected-avatar" : ""
              }`}
              src={uploadedPath}
              alt={uploadedPath}
              onClick={() => handleSelectAvatar(uploadedPath)}
            />
          )}
        </div>
      </Form.Group>
      {uploadedPath == null && <FileUploader setPath={setUploadedPath} />}
    </>
  );
};

export default AvatarPicker;
