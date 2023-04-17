import { Container, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import banner from "../assets/banner-small.png";
import avatar1 from "../assets/avatar1.png";
import collegati from "../assets/collegati.svg";
import { useDispatch, useSelector } from "react-redux";
import { getProfilesAction } from "../redux/actions";

const Sidebar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfilesAction());
  }, []);

  const profiles = useSelector((state) => state.profile.profiles.slice(0, 5));

  return (
    // <Container>
    //   <Row>
    // <Col style={{ maxWidth: "300px" }}>
    <>
      <div className=" mt-4 mb-2 p-3 shadow-sm rounded  bg-dark text-white" style={{ color: "#00000099" }}>
        <div className="d-flex justify-content-between align-items-baseline">
          <p className="fw-bold me-3">Modifica il profilo pubblico e l'URL</p>
          <FaQuestionCircle className="flex-shrink-0" style={{ width: "20px" }} />
        </div>
        <div className="d-flex justify-content-between align-items-baseline">
          <p className="fw-bold me-3">Aggiungi il tuo profilo in un latra lingua</p>
          <FaQuestionCircle className="flex-shrink-0" style={{ width: "20px" }} />
        </div>
      </div>

      <div className=" mb-2 shadow-sm rounded overflow-hidden bg-dark text-white" style={{ color: "#00000099" }}>
        <img style={{ objectFit: "cover", width: "100%" }} src={banner} alt="banner" />
      </div>

      <div className=" mb-2 p-3 shadow-sm rounded bg-dark text-white">
        <h3 className="fw-bold mb-3" style={{ fontSize: "16px" }}>
          Altri Profili consultati
        </h3>

        <>
          {profiles.map((profile) => (
            <div key={profile._id} className="d-flex border-bottom">
              <img
                className="me-3 rounded-circle"
                src={profile.image}
                alt=""
                style={{ width: "48px", height: "48px" }}
              />

              <div className="d-flex flex-column align-items-start">
                <div>
                  <span className="fw-bold" style={{ fontSize: "16px" }}>
                    {profile.name} {profile.surname}
                  </span>
                  <span style={{ fontSize: "14px" }}> · 2°</span>
                </div>

                <span className="mb-2" style={{ fontSize: "14px" }}>
                  {profile.title}
                </span>
                <Button
                  variant="outline-light"
                  className="rounded-pill fw-bold d-flex align-items-center mb-4"
                  style={{ fontSize: "16px" }}
                >
                  <img className="me-1" src={collegati} alt="collegati img" />
                  Collegati
                </Button>
              </div>
            </div>
          ))}
        </>

        <div className="d-flex justify-content-center mt-2 fw-bold" style={{ fontSize: "16px" }}>
          Visualizza altro
        </div>
      </div>
    </>
    //     </Col>
    //   </Row>
    // </Container>
  );
};

export default Sidebar;
