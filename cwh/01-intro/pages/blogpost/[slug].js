import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Blog.module.css";
const Slug = () => {
  const [blog, setBlog] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const { slug } = router.query;
    fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        setBlog(parsed);
      });
  }, [router.isReady]);

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

export default Slug;
