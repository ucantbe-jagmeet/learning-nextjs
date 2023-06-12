import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import * as fs from "fs";
import InfiniteScroll from "react-infinite-scroll-component";

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  const [count, setCount] = useState(2);


  const fetchData = async () => {
   let d = await fetch(`http://localhost:3000/api/blogs/?count=${count+2}`)
   setCount(count + 2)
   let data = await d.json()
   
    setBlogs(data)
  };

  return (
    <main className={styles.mainBlog}>
      <div className={styles.blogPostItem}>


      <InfiniteScroll
            dataLength={blogs.length} //This is important field to render the next data
            next={fetchData}
            hasMore={props.allCount !== blogs.length}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
          
          {blogs.map((blog, index) => {
                    const { title, metadesc, author, slug } = blog;

                    return (
                      <Link href={`/blogpost/${slug}`} key={index}>
                        <h3 className={styles.blogItemh3}>{title}</h3>
                        <p>{metadesc.slice(0, 130)}...</p>
                      </Link>
                    );
                  })}
          </InfiniteScroll>

      </div>
    </main>
  );
};

export async function getStaticProps() {
  let data = await fs.promises.readdir("blogData");
  let allCount = data.length
  let myFile 
  let allBlogs = [];
  for (let i = 0; i < 2; i++) {
    const item = data[i];
     myFile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myFile));
  }
  return {
    props: { allBlogs, allCount },
  };
}

export default Blog;
