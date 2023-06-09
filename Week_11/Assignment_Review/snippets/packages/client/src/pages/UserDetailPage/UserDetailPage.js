import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  Form,
  Button,
  Figure,
  Row,
  Col,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { AvatarPicker, LoadingSpinner, Post } from "components";
import { useProvideAuth } from "hooks/useAuth";
import { useRequireAuth } from "hooks/useRequireAuth";
import axios from "utils/axiosConfig.js";
import "./UserDetailPage.css";
import { toast } from "react-toastify";

const imgs = [
  "/bird.svg",
  "/dog.svg",
  "/fox.svg",
  "/frog.svg",
  "/lion.svg",
  "/owl.svg",
  "/tiger.svg",
  "/whale.svg",
];

const initialData = {
  currentPassword: "",
  newPassword: "",
  confirmNewPassword: "",
  isSubmitting: false,
  errorMessage: null,
};

const UserDetailPage = () => {
  const { state } = useProvideAuth();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [validated, setValidated] = useState(false);
  const [openPasswordEditForm, setOpenPasswordEditForm] = useState(false);
  const [openAvatarEditForm, setOpenAvatarEditForm] = useState(false);
  const [data, setData] = useState(initialData);
  const [profileImage, setProfileImage] = useState("");

  let navigate = useNavigate();
  let params = useParams();
  const {
    state: { isAuthenticated },
  } = useRequireAuth();

  useEffect(() => {
    const getUser = async () => {
      try {
        const userResponse = await axios.get(`users/${params.uid}`);
        setUser(userResponse.data);
        setProfileImage(userResponse.data.profile_image);
        setLoading(false);
      } catch (err) {
        console.error(err.message);
      }
    };
    isAuthenticated && getUser();
  }, [params.uid, isAuthenticated]);

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleUpdatePassword = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    // handle invalid or empty form
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null,
    });
    try {
      await axios.put(`/users/${user.username}`, {
        current_password: data.currentPassword,
        new_password: data.newPassword,
        confirm_new_password: data.confirmNewPassword,
      });
      setValidated(false);
      setData(initialData);
      toast.success("Password updated.");
      setOpenPasswordEditForm(false);
    } catch (error) {
      setData({
        ...data,
        isSubmitting: false,
        errorMessage: error.message,
      });
    }
  };

  const handleUpdateAvatar = async (e) => {
    e.preventDefault();
    setData({
      ...data,
      isSubmitting: true,
    });

    try {
      const updatedUserResponse = await axios.put(
        `users/${user.username}/avatar`,
        { profile_image: profileImage }
      );
      /**
       * Set the state user's profile_image to match
       */
      setUser(updatedUserResponse.data);

      toast.success("Avatar update successful.");
      setOpenAvatarEditForm(false);
      setData({
        ...data,
        isSubmitting: false,
      });
    } catch (error) {
      setData({
        ...data,
        isSubmitting: false,
      });
    }
  };

  if (!isAuthenticated) {
    return <LoadingSpinner full />;
  }

  if (loading) {
    return <LoadingSpinner full />;
  }

  return (
    <>
      <Container className="clearfix">
        <Button
          variant="outline-info"
          onClick={() => {
            navigate(-1);
          }}
          style={{ border: "none", color: "#E5E1DF" }}
          className="mt-3 mb-3"
        >
          Go Back
        </Button>
        <Card bg="header" className="text-center">
          <Card.Body>
            <Figure
              className="bg-border-color rounded-circle overflow-hidden my-auto ml-2 p-1"
              style={{
                height: "50px",
                width: "50px",
                backgroundColor: "white",
              }}
            >
              <Figure.Image src={user.profile_image} className="w-100 h-100" />
            </Figure>
            <Card.Title>{params.uid}</Card.Title>
            <Card.Text>{user.email}</Card.Text>
            {state.user.username === params.uid && (
              <div
                onClick={() => setOpenPasswordEditForm(!openPasswordEditForm)}
                style={{ cursor: "pointer", color: "#BFBFBF" }}
              >
                Edit Password
              </div>
            )}
            {openPasswordEditForm && (
              <Container animation="false">
                <div className="row justify-content-center p-4">
                  <div className="col text-center">
                    <Form
                      noValidate
                      validated={validated}
                      onSubmit={handleUpdatePassword}
                    >
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="currentPassword">
                          Current Password
                        </Form.Label>
                        <Form.Control
                          type="password"
                          name="currentPassword"
                          id="currentPassword"
                          isInvalid={data.errorMessage === "Incorrect password"}
                          value={data.currentPassword}
                          onChange={handleInputChange}
                        />
                        <Form.Control.Feedback type="invalid">
                          {data.errorMessage}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group>
                        <Form.Label htmlFor="newPassword">
                          New Password
                        </Form.Label>
                        <Form.Control
                          type="password"
                          name="newPassword"
                          id="newPassword"
                          required
                          value={data.newPassword}
                          onChange={handleInputChange}
                        />
                        <Form.Control.Feedback type="invalid">
                          New Password is required
                        </Form.Control.Feedback>
                        <Form.Text id="passwordHelpBlock" muted>
                          Must be 8-20 characters long.
                        </Form.Text>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="confirmNewPassword">
                          Confirm New Password
                        </Form.Label>
                        <Form.Control
                          type="password"
                          name="confirmNewPassword"
                          id="confirmNewPassword"
                          required
                          value={data.confirmNewPassword}
                          onChange={handleInputChange}
                        />
                        <Form.Control.Feedback type="invalid">
                          Passwords do not match
                        </Form.Control.Feedback>
                      </Form.Group>

                      {data.errorMessage && (
                        <span className="form-error">{data.errorMessage}</span>
                      )}
                      <Button type="submit" disabled={data.isSubmitting}>
                        {data.isSubmitting ? <LoadingSpinner /> : "Update"}
                      </Button>
                    </Form>
                  </div>
                </div>
              </Container>
            )}
            {state.user.username === params.uid && (
              <div
                onClick={() => setOpenAvatarEditForm(!openAvatarEditForm)}
                style={{ cursor: "pointer", color: "#BFBFBF" }}
              >
                Edit Avatar
              </div>
            )}
            {openAvatarEditForm && (
              <Container animation="false">
                <Row className="d-flex flex-column justify-content-center p-4">
                  <Col
                    className="text-center"
                    xs={12}
                    md={{ span: 8, offset: 2 }}
                  >
                    <Form
                      className="update-avatar-form"
                      onSubmit={handleUpdateAvatar}
                    >
                      <AvatarPicker
                        imgs={imgs.concat(
                          !imgs.includes(user.profile_image)
                            ? [user.profile_image]
                            : []
                        )}
                        profileImage={profileImage}
                        setProfileImage={setProfileImage}
                      />
                      <Button type="submit" disabled={data.isSubmitting}>
                        {data.isSubmitting ? <LoadingSpinner /> : "Update"}
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </Container>
            )}
          </Card.Body>
        </Card>
      </Container>
      <Container className="pt-3 pb-3">
        {user.posts.length !== 0 ? (
          user.posts.map((post) => (
            <Post key={post._id} post={post} userDetail />
          ))
        ) : (
          <div
            style={{
              marginTop: "75px",
              textAlign: "center",
            }}
          >
            No User Posts
          </div>
        )}
      </Container>
    </>
  );
};

export default UserDetailPage;
