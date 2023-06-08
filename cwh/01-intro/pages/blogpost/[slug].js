import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Blog.module.css";
const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <main className={styles.mainBlog}>
      <div className={styles.blogPostItem}>
        <h1>Title of the page {slug}</h1>
        <hr />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          magni, maiores voluptatem voluptate hic earum voluptatibus ab officiis
          ducimus iste veniam quaerat modi.
        </div>
      </div>
    </main>
  );
};

export default Slug;
