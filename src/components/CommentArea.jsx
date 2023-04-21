import CommentList from "./CommentList";

const CommentArea = ({ post }) => {
  return (
    <>
      <h1>addcomment</h1>
      <CommentList post={post} />
    </>
  );
};

export default CommentArea;
