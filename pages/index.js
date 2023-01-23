import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import data from "../data/education.json";
import { useState } from "react";
import Card from "../components/Card";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  console.log(data);
  const [information, setInformation] = useState([...data]);

  return (
    <>
      <Head>
        <title>main</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            <Link href="about">about</Link>
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.cdescription}>
            <div className={styles.container1}>
              <p className={styles.fontstyle}>Business Degrees</p>
              {information &&
                information.map((info, index) => {
                  if (info.department === "Business") {
                    return (
                      <Card
                        key={index}
                        degree={info.degree}
                        colour="#7F7CA"
                        font="14px"
                      />
                    );
                  }
                })}
            </div>
            <div className={styles.container1}>
              <p className={styles.fontstyle}>Computer Degrees</p>
              {information &&
                information.map((info, index) => {
                  if (info.department === "Computing") {
                    return (
                      <Card
                        key={index}
                        degree={info.degree}
                        colour="#7F7CA"
                        font="14px"
                      />
                    );
                  }
                })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
