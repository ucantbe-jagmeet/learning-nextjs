import React, { useState } from "react";
import * as fs from "fs";
import styles from "../../styles/Blog.module.css";

const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);

  return (
    <main className={styles.mainBlog}>
      <div className={styles.blogPostItem}>
      <h1>{blog && blog.title}</h1>
      <hr />
      <div>
        {blog && blog.content}
      </div>
      </div>
    </main>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "how-to-learn-flask" } },
      { params: { slug: "how-to-learn-javascript" } },
      { params: { slug: "how-to-learn-nextjs" } },
    ],
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const { slug } = context.params;
  let myBlog = await fs.promises.readFile(`blogData/${slug}.json`, "utf-8");
  return {
    props: { myBlog: JSON.parse(myBlog) },
  };
}

export default Slug;
