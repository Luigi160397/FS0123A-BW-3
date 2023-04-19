import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useDispatch, useSelector } from "react-redux";
import { getPostsAction } from "../redux/actions";
import avatar1 from "../assets/avatar1.png";
import { FaPen } from "react-icons/fa";
import EditPost from "./EditPost";

const Post = () => {

  const [selectedPost, setSelectedPost] = useState(null);

  const profile = useSelector(state => state.profile.content);
  const dispatch = useDispatch();

  const [showEdit, setShowEdit] = useState(false);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  useEffect(() => {
    dispatch(getPostsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const posts = useSelector(state => state.home.posts);

  console.log(posts);

  return (
    <>
      {selectedPost && (
        <>
          <EditPost selectedPost={selectedPost} showEdit={showEdit} handleCloseEdit={handleCloseEdit} />
        </>
      )}

      {posts.slice(0, 20).map(post => (
        <Card className="bg-dark text-white mt-3 position-relative" key={post._id}>
          {posts.length > 0 && post && post.user && (
            <CardHeader className="d-flex gap-2">
              {profile && post.user._id && post.user._id === profile._id &&
                <Button
                  style={{ right: "10px", top: "10px" }}
                  variant="outline-secondary border-0 py-1 px-2 rounded-circle position-absolute"
                  onClick={() => {
                    console.log("Post:"+post);
                    setSelectedPost(post);
                    handleShowEdit();
                  }}
                >
                  <FaPen className="text-white fs-5" />
                </Button>
              }
              <div>
                <img
                  className="border border-dark border-2 rounded-circle"
                  src={post.user.image ? post.user.image : avatar1}
                  alt="avatar"
                  width={48}
                  height={48}
                />
              </div>
              <div>
                <Card.Text className="mb-0" style={{ fontSize: "14px" }}>
                  {post.user.name} {post.user.surname}
                </Card.Text>
                <Card.Text className="text-muted mb-0" style={{ fontSize: "12px" }}>
                  {post.user.title}
                </Card.Text>
                <Card.Text className="text-muted mb-0" style={{ fontSize: "12px" }}>
                  {post.createdAt}
                </Card.Text>
              </div>
            </CardHeader>
          )}
          <Card.Body>
            <Card.Text>{post.text}</Card.Text>
            {posts.length > 0 && post && post.image && (
              <img src={post.image} width={"100%"} height={"300px"} alt="postImage" />
            )}
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default Post;
