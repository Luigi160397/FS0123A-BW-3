import { Card } from "react-bootstrap";

const CommentList = ({ post }) => {
  return (
    <div className="d-flex gap-3">
      <img
        className="border border-dark border-2 rounded-circle "
        src="https://picsum.photos/200/300"
        alt="avatar"
        width={48}
        height={48}
      />
      <Card className="mt-3 mb-3 text-light w-100" style={{ backgroundColor: "#3c4345" }}>
        <Card.Body>
          <Card.Title className="mb-2 fs-5">.author</Card.Title>
          <Card.Text className="mb-0">.comment</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CommentList;
