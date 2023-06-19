import NewPost from "./Main/NewPost";
import Posts from "./Main/Posts";

function Main(props) {
  return (
    <div className="main">
      <NewPost />
      <Posts posts={props.state.postPage} />
    </div>
  );
}

export default Main;
