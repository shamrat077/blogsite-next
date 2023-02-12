import BlogItem from "./BlogItem";

const BlogList = ({ blogs }) => {
  return (
    <div>
      {blogs.map((blog) => (
        <ul>
          <BlogItem blog={blog} key={blog.id} />
        </ul>
      ))}
    </div>
  );
};

export default BlogList;
