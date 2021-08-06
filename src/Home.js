import BlogList from "./components/BlogList";
import useFetch from "./components/useFetch";

const Home = () => {
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch(window.location.protocol + "//" + window.location.host + "/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
