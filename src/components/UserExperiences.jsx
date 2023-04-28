import { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { getExperiencesAction } from "../redux/actions";
import { useParams } from "react-router-dom";



const UserExperiences = () => {

    const params = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        if (params.id) {
            dispatch(getExperiencesAction(params.id));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.id]);

    const experiencies = useSelector((state) => state.profile.experiencies);

    return (
        <Card className="bg-dark text-white mb-3 position-relative">
            <Card.Title className="mt-3 ms-3">Esperienza</Card.Title>
            {experiencies.map((experience) => (
                <Card.Body key={experience._id} className="position-relative">
                    <Row>
                        <Col className="d-flex gap-2">
                            <div>
                                <img
                                    style={{ cursor: "pointer" }}
                                    src={experience.image}
                                    alt="Experience"
                                    width={48}
                                    height={48}
                                />
                            </div>
                            <div>
                                <Card.Title>{experience.role}</Card.Title>
                                <Card.Subtitle>{experience.company}</Card.Subtitle>
                                <Card.Text className="text-muted mb-0">
                                    {new Date(experience.startDate).toLocaleDateString("it-IT", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric"
                                    })}{" "}
                                    -{" "}
                                    {new Date(experience.endDate).toLocaleDateString("it-IT", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric"
                                    })}
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
export default UserExperiences;
