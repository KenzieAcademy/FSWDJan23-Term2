import { Button, Container, Modal } from "react-bootstrap";
import { PirateTable } from "../../components";
import usePiratesAPI from "../../hooks/usePiratesAPI";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [state, setState] = useState({});
  const { fetchPirates, deletePirateById } = usePiratesAPI();
  const [showDeleteModal, setShowDeleteModal] = useState();

  useEffect(() => {
    fetchPirates()
      .then((response) => setState(response))
      .catch(() =>
        toast.error("Could not fetch pirates, please try again later")
      );
  }, []);

  const confirmDelete = (id) => {
    setShowDeleteModal(state.results.find((pirate) => pirate._id === id));
  };

  const deletePirate = (id) => {
    deletePirateById(id).then(() => {
      setShowDeleteModal();
      setState({
        ...state,
        results: state.results.filter((pirate) => pirate._id !== id),
      });
    });
  };

  return (
    <Container>
      <PirateTable
        pirates={state.results}
        prev={state.prev ? fetchPirates(state.prev) : null}
        next={state.next ? fetchPirates(state.next) : null}
        handleDelete={confirmDelete}
      />
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal()}>
        <Modal.Header closeButton>
          <Modal.Title>
            Are you sure you wish to delete{" "}
            {showDeleteModal && showDeleteModal.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setShowDeleteModal()}
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={() => deletePirate(showDeleteModal._id)}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Dashboard;
