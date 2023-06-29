import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import useFileUploader from "../../hooks/useFileUploader";
import "./CreateShip.css";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import api from "../../utils/api.utils";

const initialState = {
  name: "",
  topSpeed: "",
  jumpRangeUnladen: "",
  jumpRangeLaden: "",
  maxCargoCapacity: "",
  imgUrl: "",
};

const CreateShip = () => {
  const [shipData, setShipData] = useState(initialState);
  const [file, setFile] = useState();
  const [uploadedFilePath, setUploadedFilePath] = useState();
  const [uploading, setUploading] = useState(false);
  const { uploadFile } = useFileUploader();

  const handleSubmit = (e) => {
    e.preventDefault();

    api
      .post("/ships", shipData)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const handleFileSelection = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    setUploading(true);

    const response = await uploadFile("/files/images", file, "file");
    setUploadedFilePath(response.data.path);
    setShipData({
      ...shipData,
      imgUrl: response.data.path,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShipData({
      ...shipData,
      [name]: value,
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            type="text"
            id="name"
            name="name"
            value={shipData.name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          {uploadedFilePath ? (
            <img className="upload-preview" src={uploadedFilePath} />
          ) : (
            <Row>
              <Col xs={12} className="mb-2">
                <Form.Label htmlFor="file">Ship Image</Form.Label>
                <Form.Control
                  id="file"
                  type="file"
                  name="file"
                  filename={file ? file.name : ""}
                  onChange={handleFileSelection}
                />
              </Col>
              <Col xs={12}>
                <Button
                  className="w-100"
                  type="button"
                  variant="info"
                  onClick={handleFileUpload}
                >
                  {uploading ? <LoadingSpinner /> : "Upload Photo"}
                </Button>
              </Col>
            </Row>
          )}
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label htmlFor="topSpeed">Top Speed</Form.Label>
          <Form.Control
            type="number"
            id="topSpeed"
            name="topSpeed"
            value={shipData.topSpeed}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label htmlFor="jumpRangeUnladen">
            Max Jump Range (Unladen)
          </Form.Label>
          <Form.Control
            type="number"
            id="jumpRangeUnladen"
            name="jumpRangeUnladen"
            value={shipData.jumpRangeUnladen}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label htmlFor="jumpRangeLaden">
            Max Jump Range (Laden)
          </Form.Label>
          <Form.Control
            type="number"
            id="jumpRangeLaden"
            name="jumpRangeLaden"
            value={shipData.jumpRangeLaden}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label htmlFor="maxCargoCapacity">Max Cargo Capacity</Form.Label>
          <Form.Control
            type="number"
            id="maxCargoCapacity"
            name="maxCargoCapacity"
            value={shipData.maxCargoCapacity}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Button type="submit" variant="primary" size="lg">
            {" "}
            Submit{" "}
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default CreateShip;
