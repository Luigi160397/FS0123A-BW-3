import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

import { FaPen, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getExperiencesAction } from "../redux/actions";
import AddExperience from "./AddExperience";

const Experiences = () => {
  const content = useSelector(state => state.profile.content);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (content) {
      dispatch(getExperiencesAction(content._id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  const experiencies = useSelector(state => state.profile.experiencies);

  return (
    <Card className="bg-dark text-white mb-3 position-relative">
      <AddExperience show={show} handleClose={handleClose} />
      <Button
        style={{ right: "0px", top: "0px" }}
        variant="outline-secondary border-0 py-1 px-2 rounded-circle position-absolute"
        onClick={handleShow}
      >
        <FaPlus className="text-white fs-5" />
      </Button>
      <Card.Title className="mt-3 ms-3">Esperienza</Card.Title>
      {experiencies.map(experience => (
        <Card.Body key={experience._id} className="position-relative">
          <Button
            style={{ right: "0px", top: "0px" }}
            variant="outline-secondary border-0 py-1 px-2 rounded-circle position-absolute"
          >
            <FaPen className="text-white fs-5" />
          </Button>
          <Row>
            <Col className="d-flex gap-2">
              <div>
                <img src="https://picsum.photos/900/300" alt="Experience" width={48} height={48} />
              </div>
              <div>
                <Card.Title>{experience.role}</Card.Title>
                <Card.Subtitle>{experience.company}</Card.Subtitle>
                <Card.Text className="text-muted mb-0">
                  {experience.startDate} - {experience.endDate}
                </Card.Text>
                <Card.Text className="text-muted">{experience.area}</Card.Text>
                <Card.Text>{experience.description}</Card.Text>
              </div>
            </Col>
          </Row>
        </Card.Body>
      ))}
    </Card>
  );
};
export default Experiences;
