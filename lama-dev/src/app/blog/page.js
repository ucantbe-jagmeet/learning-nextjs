import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Blog = async () => {
  const data = await getData();

  const newData = data.slice(0, 7);

  return (
    <div className={styles.mainContainer}>
      {newData.map((item) => {
        const { id, title, body } = item;
        return (
          <Link href="/blog/testId" className={styles.container} key={id}>
            <div className={styles.imgContainer}>
              <Image
                src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                width={400}
                height={250}
                className={styles.img}
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.desc}>{body}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Blog;
