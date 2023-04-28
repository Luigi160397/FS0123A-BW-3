import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import ProfileFooter from "./ProfileFooter";
import UserContent from "./UserContent";

const User = () => {
  return (
    <>
      <Container className="px-5">
        <Row>
          <Col md={8}>
            <UserContent />
          </Col>
          <Col md={4}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
      <ProfileFooter />
    </>
  );
};

export default User;
