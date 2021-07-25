import Head from "next/head";
import Image from "next/image";
import Layout from "../UI/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Haptik.Ai</title>
        <meta name='description' content='Haptik.Ai' />
        <link rel='icon' href='/haptik-favicon.png' />
      </Head>

      <main>
        <Layout />
      </main>
    </div>
  );
}
