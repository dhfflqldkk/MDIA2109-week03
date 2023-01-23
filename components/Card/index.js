import styles from "@/styles/Home.module.css";
import { useState } from "react";


export default function Card({
  degree = "none",
  colour = "#7f7caf",
  font = "0",
  image = "icon/personTwo.png",
}) {
  return (
      <div style={{ backgroundColor: colour, fontSize: font }}>
        {colour === "#7f7caf" ? (
          <img src={"icon/person.png"} width="24" />
        ) : colour === "#7f7caf" ? (
          <img src={"icon/personThree.png"} width="24" />
        ) : (
          <img className={styles.imgmain} src={image} width="24" />
        )}
        {degree}
      </div>
  );
}
