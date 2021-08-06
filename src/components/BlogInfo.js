import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogInfo = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch(window.location.protocol + "//" + window.location.host + "/blogs/" + id);
  const history = useHistory();

  const handleClick = () => {
    fetch(window.location.protocol + "//" + window.location.host + "/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-info">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogInfo;
