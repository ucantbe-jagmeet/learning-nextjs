import Image from "next/image";
import styles from "./page.module.css";
import Hero from "/public/hero.png";

export default function Home() {
  return (
    <div>
      <div className={styles.item}>
        <h1>Better Design for your digital products.</h1>
        <p>
          Turning your idea into Reality. We bring together the terms from the
          global tech industry
        </p>
        <button>See our Works</button>
      </div>
      <div className={styles.item}>
        <Image
          width={500}
          height={500}
          src={Hero}
          alt=""
          className={styles.img}
        />
      </div>
    </div>
  );
}
