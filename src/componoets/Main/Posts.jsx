import Post from "./Post";
const Posts = (props) => {
  let postElement = props.posts.map((p) => (
    <Post text={p.text} data={p.date} />
  ));
  return <div className="Posts">{postElement}</div>;
};
export default Posts;
