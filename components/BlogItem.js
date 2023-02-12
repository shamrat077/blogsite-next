import Link from "next/link";

const BlogItem = ({ blog }) => {
  return (
    <Link href="/blogs/[id]" as={`blogs/${blog.id}`}>
      <li style={{ margin: "2rem 0" }}>{blog.title}</li>
    </Link>
  );
};

export default BlogItem;
