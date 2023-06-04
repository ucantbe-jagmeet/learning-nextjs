import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt="about img"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h2 className={styles.title}>Who are we?</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            ab adipisci quo officiis impedit dignissimos. error suscipit fugit
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
            mollitia ipsam qui ex tenetur molestiae suscipit illo expedita
            dolore dignissimos.
            <br /> <br />
            Distinctio exercitationem non suscipit sunt fuga. Iure voluptates
            vitae quia minima quam quod Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Minima sunt aliquam a repellat neque velit id
            autem molestias necessitatibus doloremque.
          </p>
        </div>
        <div className={styles.item}>
          <h2 className={styles.title}>Who we do?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            minima
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Fandy
            <br />
            <br /> - Moobile apps
          </p>
          <Button text="Contact" url="contact" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
