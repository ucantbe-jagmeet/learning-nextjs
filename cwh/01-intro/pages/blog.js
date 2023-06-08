import React from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

const Blog = () => {
  return (
    <main className={styles.mainBlog}>
      <div>
        <Link href="/blogpost/learn-javascript">
          <h3 className={styles.blogItemh3}>How to learn javascript in 2022</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            nisi numquam omnis eaque quam libero quae laudantium illum dicta
            dolor?
          </p>
        </Link>
      </div>
      <div>
        <h3 className={styles.blogItemh3}>How to learn javascript in 2022</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nisi
          numquam omnis eaque quam libero quae laudantium illum dicta dolor?
        </p>
      </div>
      <div>
        <h3 className={styles.blogItemh3}>How to learn javascript in 2022</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nisi
          numquam omnis eaque quam libero quae laudantium illum dicta dolor?
        </p>
      </div>
    </main>
  );
};

export default Blog;
