import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

const Post = () => {
  return (
    <>
      <Card className="bg-dark text-white mt-3">
        <CardHeader className="d-flex gap-2">
          <div>
            <img
              className="border border-dark border-2 rounded-circle"
              src="https://picsum.photos/200/300"
              alt="avatar"
              width={48}
              height={48}
            />
          </div>
          <div>
            <Card.Text className="mb-0" style={{ fontSize: "14px" }}>
              .user.name .user.surname
            </Card.Text>
            <Card.Text className="text-muted mb-0" style={{ fontSize: "12px" }}>
              .user.title
            </Card.Text>
            <Card.Text className="text-muted mb-0" style={{ fontSize: "12px" }}>
              .createdAt
            </Card.Text>
          </div>
        </CardHeader>
        <Card.Body>
          <Card.Text>.text</Card.Text>
          <img src="https://picsum.photos/200/300" width={"100%"} height={"300px"} alt="avatar" />
        </Card.Body>
      </Card>
    </>
  );
};

export default Post;
