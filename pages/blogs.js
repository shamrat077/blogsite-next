import { blogs } from "../data";
import Link from "next/link";
import BlogList from "@/components/BlogList";

const allBlogs = () => {
  return (
    <>
      <h1>All Blogs</h1>
      <BlogList blogs={blogs} />
    </>
  );
};

export default allBlogs;
