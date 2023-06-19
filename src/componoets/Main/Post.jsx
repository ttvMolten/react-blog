const Post = (props) => {
  return (
    <div className="post">
      <p className="post-text">{props.text}</p>
      <div className="post-submit">{props.data}</div>
    </div>
  );
};

export default Post;
