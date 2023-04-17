import { Col, Container, Row } from "react-bootstrap";
import ProfileContent from "./ProfileContent";
import ProfileFooter from "./ProfileFooter";

const Profile = () => {
  return (
    <Container className="px-5">
      <Row>
        <Col md={8}>
          <ProfileContent />
        </Col>
        <Col md={4}></Col>
      </Row>
      <ProfileFooter />
    </Container>
  );
};

export default Profile;
