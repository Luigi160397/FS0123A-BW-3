import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { getProfileAction } from "../redux/actions";
import { useDispatch } from "react-redux";

const UploadImage = ({ show, handleClose, profile }) => {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const id = profile._id;

  const uploadImg = async e => {
    e.preventDefault();
    const token = process.env.REACT_APP_API_KEY;

    try {
      if (!image) {
        alert("Please select an image to upload");
        return;
      }

      const formData = new FormData();
      formData.append("profile", image);
      formData.append("username", profile.username);

      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}/picture`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: token
        }
      });

      if (response.ok) {
        dispatch(getProfileAction());
        handleClose();
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} className="text-white">
      <Modal.Header className="bg-dark text-white" closeButton>
        <Modal.Title>Aggiungi immagine</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark">
        <Form onSubmit={uploadImg}>
          <Form.Group className="mb-3" controlId="upload">
            <Form.Label>Carica immagine</Form.Label>
            <Form.Control type="file" autoFocus required onChange={e => setImage(e.target.files[0])} />
            <Button className="mt-3" variant="primary" type="submit">
              Carica
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default UploadImage;
