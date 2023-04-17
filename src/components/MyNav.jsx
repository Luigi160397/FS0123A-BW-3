import { Container, Dropdown, Form, Nav, Navbar, Offcanvas } from "react-bootstrap";
import logo from "../assets/logo.svg";
import home from "../assets/home.svg";
import rete from "../assets/rete.svg";
import work from "../assets/work.svg";
import msg from "../assets/msg.svg";
import aziende from "../assets/aziende.svg";
import notifiche from "../assets/notifiche.svg";
import avatar from "../assets/avatar.png";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const MyNav = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" width={50} height={50} />
        </Navbar.Brand>
        <Form className="d-flex position-relative">
          <Form.Control type="search" placeholder="Search" className="me-2 ps-5 " aria-label="Search" />
          <FaSearch style={{ left: "10px", top: "8px" }} className="position-absolute fs-5" />
        </Form>

        <Nav className="me-auto">
          <Link className="nav-link d-flex flex-column justify-content-center align-items-center" to="/">
            <span>
              <img width={30} height={30} src={home} alt="home" />
            </span>
            <span>Home</span>
          </Link>
          <Link className="nav-link d-flex flex-column justify-content-center align-items-center" to="/">
            <span>
              <img width={30} height={30} src={rete} alt="rete" />
            </span>
            <span>Rete</span>
          </Link>
          <Link className="nav-link d-flex flex-column justify-content-center align-items-center" to="/">
            <span>
              <img width={30} height={30} src={work} alt="work" />
            </span>
            <span>Lavoro</span>
          </Link>
          <Link className="nav-link d-flex flex-column justify-content-center align-items-center" to="/">
            <span>
              <img width={30} height={30} src={msg} alt="msg" />
            </span>
            <span>Messaggistica</span>
          </Link>
          <Link className="nav-link d-flex flex-column justify-content-center align-items-center" to="/">
            <span>
              <img width={30} height={30} src={notifiche} alt="notifiche" />
            </span>
            <span>Notifiche</span>
          </Link>
          <Dropdown>
            <div className="d-flex flex-column justify-content-center align-items-center p-2">
              <img className="rounded-circle" src={avatar} alt="avatar" width={30} height={30} />
              <Dropdown.Toggle className="bg-transparent border-0 text-dark p-0" id="dropdown-basic">
                Tu
              </Dropdown.Toggle>
            </div>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <div className="vr"></div>

          <div className="d-flex flex-column justify-content-center align-items-center p-2">
            <img width={30} height={30} src={aziende} alt="aziende" />
            <Dropdown.Toggle onClick={handleShow} className="me-2 bg-transparent border-0 text-dark p-0">
              Per le aziende
            </Dropdown.Toggle>
          </div>
          <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images,
              lists, etc.
            </Offcanvas.Body>
          </Offcanvas>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNav;
