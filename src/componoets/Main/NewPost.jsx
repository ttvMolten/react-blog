import human from "../../images/g.webp";
let a = 50;
const NewPost = () => {
  return (
    <div className="post-new">
      <form>
        <img src={human} alt="Me" width={a} className="human" title="Me" />
        <div className="post-input">
          <textarea></textarea>
        </div>
        <div className="post-submit">
          <input type="submit" value=" Твитнуть" />
        </div>
      </form>
    </div>
  );
};
export default NewPost;
