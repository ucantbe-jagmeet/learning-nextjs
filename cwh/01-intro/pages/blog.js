import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import * as fs from "fs";

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  // useEffect(() => {

  // }, []);

  return (
    <main className={styles.mainBlog}>
      <div className={styles.blogPostItem}>
        {blogs.map((blog, index) => {
          const { title, metadesc, author, slug } = blog;

          return (
            <Link href={`/blogpost/${slug}`} key={index}>
              <h3 className={styles.blogItemh3}>{title}</h3>
              <p>{metadesc.slice(0, 130)}...</p>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export async function getStaticProps() {
  let data = await fs.promises.readdir("blogData");
  let myFile;
  let allBlogs = [];
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    myFile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myFile));
  }
  return {
    props: { allBlogs },
  };
}

export default Blog;
