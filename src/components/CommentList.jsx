import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsAction } from "../redux/actions";

const CommentList = ({ post }) => {
  const dispatch = useDispatch();
  const url = `https://striveschool-api.herokuapp.com/api/comments/${post._id}`;
  useEffect(() => {
    dispatch(getCommentsAction(url));
  }, []);

  const comments = useSelector(state => state.comment.comments);

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
