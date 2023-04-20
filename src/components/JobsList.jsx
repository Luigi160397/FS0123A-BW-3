import { Button, Card, Col, Row } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { FaBookmark } from "react-icons/fa";

import avatar from "../assets/avatar.png";

const JobsList = () => {
    return (
        <Card className="bg-dark text-white mt-3 position-relative">
            <CardHeader>
                <Card.Title className="mb-0">
                    Consigliato per te
                </Card.Title>
                <Card.Text className="text-muted">Sulla base del tuo profilo e della cronologia e delle ricerche</Card.Text>
            </CardHeader>
            <Card.Body>
                <div className="border-bottom border-secondary d-flex justify-content-between align-items-start">
                    <div className="d-flex">
                        <img
                            style={{ cursor: "pointer" }}
                            src={avatar}
                            alt="Jobs"
                            width={48}
                            height={48}
                            className="me-3"
                        />
                        <div>
                            <Card.Title style={{color:"#81B4F5"}}>job.title</Card.Title>
                            <Card.Subtitle>job.company_name</Card.Subtitle>
                            <Card.Text className="text-muted mb-0">
                                area
                            </Card.Text>
                            <Card.Text className="text-muted mb-2">job.description</Card.Text>
                        </div>
                    </div>
                    <Button
                        style={{ right: "0px", top: "20px" }}
                        variant="outline-secondary border-0 py-1 px-2 rounded-circle">
                        <FaBookmark className="text-white fs-5" />
                    </Button>
                </div>
            </Card.Body>
        </Card>
    )
}
export default JobsList;