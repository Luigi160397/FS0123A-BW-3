import { Container, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import banner from "../assets/banner-small.png";
import avatar1 from "../assets/avatar1.png";
import collegati from "../assets/collegati.svg";

const Sidebar = () => {
  const URL = "https://striveschool-api.herokuapp.com/api/profile/";
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [profiles, setProfiles] = useState([]);

  const fetchProfiles = async () => {
    try {
      const res = await fetch(URL, {
        headers: {
          Authorization: `Bearer ${API_KEY}`
        }
      });
      if (res.ok) {
        const data = await res.json();
        setProfiles(data.results.slice(0, 10));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  return (
    <Container>
      <Row>
        <Col style={{ maxWidth: "300px" }}>
          <div className="border mt-4 mb-2 p-3 shadow-sm rounded" style={{ color: "#00000099" }}>
            <div className="d-flex justify-content-between align-items-baseline">
              <p className="fw-bold me-3">Modifica il profilo pubblico e l’URL</p>
              <FaQuestionCircle className="flex-shrink-0" style={{ width: "20px" }} />
            </div>
            <div className="d-flex justify-content-between align-items-baseline">
              <p className="fw-bold me-3">Aggiungi il tuo profilo in un latra lingua</p>
              <FaQuestionCircle className="flex-shrink-0" style={{ width: "20px" }} />
            </div>
          </div>

          <div className="border mb-2 shadow-sm rounded overflow-hidden" style={{ color: "#00000099" }}>
            <img fluid src={banner} alt="banner" className="img-fluid" />
          </div>

          <div className="border mb-2 p-3 shadow-sm rounded" style={{ color: "#00000099" }}>
            <h3 className="fw-bold mb-3" style={{ fontSize: "16px", color: "#000000e6" }}>
              Altri Profili consultati
            </h3>
            <div className="d-flex border-bottom">
              <img className="me-1" src={avatar1} alt="" style={{ width: "48px", height: "48px" }} />
              <div className="d-flex flex-column align-items-start">
                <div>
                  <span className="fw-bold" style={{ fontSize: "16px", color: "#000000e6" }}>
                    Chiara Salimonti
                  </span>
                  <span style={{ fontSize: "14px", color: "#00000099" }}> · 2°</span>
                </div>

                <span className="mb-2" style={{ fontSize: "14px", color: "#000000e6" }}>
                  Credit Anlyst presso CRIF
                </span>
                <Button
                  variant="outline-dark"
                  className="rounded-pill fw-bold d-flex align-items-center mb-4"
                  style={{ fontSize: "16px", color: "#00000099" }}
                >
                  <img className="me-1" src={collegati} alt="collegati img" />
                  Collegati
                </Button>
              </div>
            </div>
            <div className="d-flex border-bottom pt-3">
              <img className="me-1" src={avatar1} alt="" style={{ width: "48px", height: "48px" }} />
              <div className="d-flex flex-column align-items-start">
                <div>
                  <span className="fw-bold" style={{ fontSize: "16px", color: "#000000e6" }}>
                    Chiara Salimonti
                  </span>
                  <span style={{ fontSize: "14px", color: "#00000099" }}> · 2°</span>
                </div>

                <span className="mb-2" style={{ fontSize: "14px", color: "#000000e6" }}>
                  Credit Anlyst presso CRIF
                </span>
                <Button
                  variant="outline-dark"
                  className="rounded-pill fw-bold d-flex align-items-center mb-4"
                  style={{ fontSize: "16px", color: "#00000099" }}
                >
                  <img className="me-1" src={collegati} alt="collegati img" />
                  Collegati
                </Button>
              </div>
            </div>
            <div className="d-flex border-bottom pt-3">
              <img className="me-1" src={avatar1} alt="" style={{ width: "48px", height: "48px" }} />
              <div className="d-flex flex-column align-items-start">
                <div>
                  <span className="fw-bold" style={{ fontSize: "16px", color: "#000000e6" }}>
                    Chiara Salimonti
                  </span>
                  <span style={{ fontSize: "14px", color: "#00000099" }}> · 2°</span>
                </div>

                <span className="mb-2" style={{ fontSize: "14px", color: "#000000e6" }}>
                  Credit Anlyst presso CRIF
                </span>
                <Button
                  variant="outline-dark"
                  className="rounded-pill fw-bold d-flex align-items-center mb-4"
                  style={{ fontSize: "16px", color: "#00000099" }}
                >
                  <img className="me-1" src={collegati} alt="collegati img" />
                  Collegati
                </Button>
              </div>
            </div>
            <div className="d-flex border-bottom pt-3">
              <img className="me-1" src={avatar1} alt="" style={{ width: "48px", height: "48px" }} />
              <div className="d-flex flex-column align-items-start">
                <div>
                  <span className="fw-bold" style={{ fontSize: "16px", color: "#000000e6" }}>
                    Chiara Salimonti
                  </span>
                  <span style={{ fontSize: "14px", color: "#00000099" }}> · 2°</span>
                </div>

                <span className="mb-2" style={{ fontSize: "14px", color: "#000000e6" }}>
                  Credit Anlyst presso CRIF
                </span>
                <Button
                  variant="outline-dark"
                  className="rounded-pill fw-bold d-flex align-items-center mb-4"
                  style={{ fontSize: "16px", color: "#00000099" }}
                >
                  <img className="me-1" src={collegati} alt="collegati img" />
                  Collegati
                </Button>
              </div>
            </div>
            <div className="d-flex border-bottom pt-3">
              <img className="me-1" src={avatar1} alt="" style={{ width: "48px", height: "48px" }} />
              <div className="d-flex flex-column align-items-start">
                <div>
                  <span className="fw-bold" style={{ fontSize: "16px", color: "#000000e6" }}>
                    Chiara Salimonti
                  </span>
                  <span style={{ fontSize: "14px", color: "#00000099" }}> · 2°</span>
                </div>

                <span className="mb-2" style={{ fontSize: "14px", color: "#000000e6" }}>
                  Credit Anlyst presso CRIF
                </span>
                <Button
                  variant="outline-dark"
                  className="rounded-pill fw-bold d-flex align-items-center mb-4"
                  style={{ fontSize: "16px", color: "#00000099" }}
                >
                  <img className="me-1" src={collegati} alt="collegati img" />
                  Collegati
                </Button>
              </div>
            </div>
            <div
              className="d-flex justify-content-center mt-2 fw-bold"
              style={{ fontSize: "16px", color: "#00000099" }}
            >
              Visualizza altro
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;
