import React, { useState } from "react";
import styles from "../../styles/Blog.module.css";
const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);

  return (
    <main className={styles.mainBlog}>
      <div className={styles.blogPostItem}>
        <h4>Author: {blog.author}</h4>
        <h1 className={styles.blogItemh1}>{blog.slug}</h1>
        <hr />
        <div>{blog.content}</div>
      </div>
    </main>
  );
};

export async function getServerSideProps(context) {
  // console.log(context.query.slug);
  const { slug } = context.query;

  const data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  const myBlog = await data.json();
  return {
    props: { myBlog },
  };
}
export default Slug;
