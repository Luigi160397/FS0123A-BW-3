import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { addFriendAction, getUserAction, removeFriendAction } from "../redux/actions";

const UserMainCard = () => {
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserAction(params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  const profile = useSelector(state => state.profile.user);

  const friends = useSelector(state => state.fav.friends);

  console.log(friends);

  return (
    <>
      {profile && (
        <Card className="mt-3 bg-dark text-white position-relative border-0 mb-3">
          <Card.Img variant="top" src="https://picsum.photos/900/300" width={800} height={200} />
          <Card.Body className="position-relative mt-4">
            <img
              style={{ bottom: "280px" }}
              className="border border-dark border-5 rounded-circle position-absolute"
              src={profile.image}
              alt="avatar"
              width={150}
              height={150}
            />

            <Card.Title className="fs-4 mb-0">
              {profile.name} {profile.surname}
            </Card.Title>
            <Card.Text className="fs-5 mb-0">{profile.title}</Card.Text>
            <Card.Text className="text-light mb-0">
              {profile.area} &middot;{" "}
              <Link style={{ color: "#70b5f9" }} className="text-decoration-none" to={"/profile"}>
                Informazioni di contatto
              </Link>
            </Card.Text>
            <Card.Text className=" mb-0">
              <Link style={{ color: "#70b5f9" }} className="text-decoration-none" to={"/profile"}>
                33 collegamenti
              </Link>
            </Card.Text>
            <div className="d-flex pt-1 gap-2">
              {friends.length > 0 && friends.find(friend => friend._id === profile._id) ? (
                  <Button
                    variant="light"
                    className="rounded-pill fw-bold d-flex align-items-center"
                    style={{ fontSize: "16px" }}
                    onClick={() => dispatch(removeFriendAction(profile))}
                  >
                    Scollegati
                  </Button>
                ) : (
                  <Button
                    variant="outline-light"
                    className="rounded-pill fw-bold d-flex align-items-center"
                    style={{ fontSize: "16px" }}
                    onClick={() => dispatch(addFriendAction(profile))}
                  >
                    Collegati
                  </Button>
                )}
            </div>

            <Card style={{ backgroundColor: "hsl(211.3deg 17.04% 26.47%)" }} className="mt-3">
              <Card.Body className="position-relative">
                <Card.Subtitle className="mb-0">Disponibile a lavorare</Card.Subtitle>
                <Card.Text className="mb-0">Ruoli di Sviluppatore Web, React Developer</Card.Text>
                <Link style={{ color: "#70b5f9" }} className="text-decoration-none" to={"/profile"}>
                  Mostra dettagli
                </Link>
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default UserMainCard;
