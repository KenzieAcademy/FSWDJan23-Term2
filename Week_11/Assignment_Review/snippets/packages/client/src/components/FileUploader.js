import React from "react";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "../utils/axiosConfig";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";

const FileUploader = ({ setPath }) => {
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState("");

  const handleFileSelect = (e) => setFile(e.target.files[0]);

  const handleFileUpload = async (e) => {
    if (!file) {
      setError("No file selected.");

      return;
    }
    setIsUploading(true);

    const formData = new FormData();
    formData.append("fileUpload", file);

    try {
      const response = await axios.post("/files/avatar", formData);

      setPath(response.data.path);
      toast.success("File uploaded.");
    } catch (error) {
      // setError(error.)
      toast.error("Could not upload file.");
    }
    setIsUploading(false);
  };

  return (
    <>
      <Row as={Form.Group} className="mb-3">
        <Form.Label htmlFor="fileUpload">Upload File</Form.Label>
        <Col xs={12} md={8}>
          <Form.Control
            type="file"
            id="fileUpload"
            name="fileUpload"
            isInvalid={error}
            onChange={handleFileSelect}
          />
          <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
        </Col>
        <Col xs={12} md={{ span: 3, offset: 1 }}>
          <Button type="button" variant="secondary" onClick={handleFileUpload}>
            {isUploading ? <LoadingSpinner /> : "Upload"}
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default FileUploader;
