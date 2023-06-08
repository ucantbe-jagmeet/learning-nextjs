import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

const Blog = (props) => {
  console.log(props);

  const [blogs, setBlogs] = useState(props.allBlogs);
  // useEffect(() => {

  // }, []);

  return (
    <main className={styles.mainBlog}>
      <div className={styles.blogPostItem}>
        {blogs.map((blog, index) => {
          const { title, content, author, slug } = blog;

          return (
            <Link href={`/blogpost/${slug}`} key={index}>
              <h3 className={styles.blogItemh3}>{title}</h3>
              <p>{content.slice(0, 130)}...</p>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs");
  let allBlogs = await data.json();

  return {
    props: { allBlogs },
  };
}

export default Blog;
