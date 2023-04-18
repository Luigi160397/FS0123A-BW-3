import { useEffect } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

import { FaPen, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getExperiencesAction } from "../redux/actions";

const Experiences = () => {

  const content=useSelector(state=>state.profile.content);

  const dispatch=useDispatch();

  useEffect(()=>{
    if(content){
      dispatch(getExperiencesAction(content._id))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[content])

  console.log(content);

  const experiencies=useSelector(state=>state.profile.experiencies);

  console.log(experiencies);

  return (
    <Card className="bg-dark text-white mb-3">
      <Card.Body className="position-relative">
        <Card.Title>Esperienza</Card.Title>
        <Button
              style={{ right: "50px", top: "0px" }}
              variant="outline-secondary border-0 py-1 px-2 rounded-circle position-absolute"
            >
              <FaPlus className="text-white fs-5" />
        </Button>
        <Button
              style={{ right: "0px", top: "0px" }}
              variant="outline-secondary border-0 py-1 px-2 rounded-circle position-absolute"
            >
              <FaPen className="text-white fs-5" />
        </Button>
        <Row>
          <Col className="d-flex gap-2">
            <div>
              <img src="https://picsum.photos/900/300" alt="Experience" width={48} height={48}/>
            </div>
            <div>
              <Card.Title>role</Card.Title>
              <Card.Subtitle>company</Card.Subtitle>
              <Card.Text className="text-muted mb-0">startDate - endDate</Card.Text>
              <Card.Text className="text-muted">area</Card.Text>
              <Card.Text>description</Card.Text>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
export default Experiences;
