import React, { useState } from "react";
import * as fs from "fs";
import styles from "../../styles/Blog.module.css";

const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);
  function createMarkup(c) {
    return {__html: c};
  }
  return (
    <main className={styles.mainBlog}>
      <div className={styles.blogPostItem}>
      <h1>{blog && blog.title}</h1>
      <hr />
      { blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
      </div>
    </main>
  );
};

export async function getStaticPaths() {
  let allb = await fs.promises.readdir(`blogData`);
  allb = allb.map((item)=>{
    return   { params: { slug:item.split(".")[0]}}
  })
  return {
    paths: allb,
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
