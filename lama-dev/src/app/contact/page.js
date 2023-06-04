import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
import Img from "/public/contact.png";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lets Keep in touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src={Img} alt="" fill={true} className={styles.image} />
        </div>
        <form className={styles.form}>
          <input type="text " placeholder="Name" className={styles.input} />
          <input type="text " placeholder="Email" className={styles.input} />
          <textarea
            className={styles.textArea}
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <Button text="send" url="#" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
