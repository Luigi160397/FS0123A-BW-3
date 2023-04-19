import { useEffect } from "react";
import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useDispatch, useSelector } from "react-redux";
import { getPostsAction } from "../redux/actions";

const Post = () => {

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getPostsAction());
  },[])

  const posts=useSelector(state => state.home.posts);
  
  console.log(posts);

  return (
    <>
      {posts.slice(0,20).map(post => (
      <Card className="bg-dark text-white mt-3" key={post._id}>
        <CardHeader className="d-flex gap-2">
          <div>
            <img
              className="border border-dark border-2 rounded-circle"
              src={post.user.image}
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
