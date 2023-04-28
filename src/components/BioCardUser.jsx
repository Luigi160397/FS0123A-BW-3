import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "../redux/actions";
import { useParams } from "react-router-dom";

const BioCardUser = () => {
  const profile = useSelector(state => state.profile.user);
  const params = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAction(params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);
  return (
    <>
      {profile && (
        <Card className="mt-3 mb-3 bg-dark text-light">
          <Card.Body className="position-relative">
            <Card.Title className="mb-2 fs-4">Informazioni</Card.Title>
            <Card.Text className="mb-0">{profile.bio}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default BioCardUser;
