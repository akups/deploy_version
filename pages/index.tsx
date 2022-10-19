import { useQuery } from "@apollo/client";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import LaneDisplay from "../components/LaneDispaly";
import { AllBlocksQuery } from "../lib/queries";
import styles from "../styles/Home.module.css";
import { Block } from "./api/graphl/types";

const Home: NextPage = () => {
  const [currentLastIndex, setCurrentLastIndex] = useState<number>(0);
  const { data, error, loading } = useQuery(AllBlocksQuery);

  if (loading) return <p>Loading ....</p>;

  if (error) return <p>Oops something went wrong {error.message}</p>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Joyn Movie App</title>
        <link rel="icon" href="/joyn.png" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my Joyn Movie App</h1>
        <div className={styles.containerLanes}>
          {data.blocks.map((block: Block) => {
            return (
              <LaneDisplay
                block={block}
                key={block.id}
                currentLastIndex={currentLastIndex}
                setCurrentLastIndex={setCurrentLastIndex}
              ></LaneDisplay>
            );
          })}
        </div>
      </main>
      <footer className={styles.footer}>Joyn GmbH</footer>
    </div>
  );
};

export default Home;
