import { useRouter } from "next/router";
import { blogs } from "../../../data";
import Link from "next/link";
import singleBlogStyle from "../../../styles/SingleBlog.module.css";

const singleBlog = () => {
  const router = useRouter();
  let { id } = router.query;

  id = id || "1";
  const currentBlog = blogs.find((blog) => blog.id === id);
  console.log(currentBlog);

  return (
    <div className={singleBlogStyle.singleBlog}>
      <h3>ID: {currentBlog.id}</h3>
      <h1 className={singleBlogStyle["singleBlog__title"]}>
        {currentBlog.title}
      </h1>
      <p>{currentBlog.body}</p>
      <Link className={singleBlogStyle["singleBlog__btn"]} href={"/blogs"}>
        Go Back
      </Link>
    </div>
  );
};

export default singleBlog;
