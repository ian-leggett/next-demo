import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

// export async function getServerSideProps() {
//   const response = await fetch(
//     "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
//   );
//   return {
//     props: {
//       pokemon: await response.json(),
//     },
//   };
// }

export async function getStaticProps() {
  const response = await fetch(
    "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
  );
  return {
    props: {
      pokemon: await response.json(),
    },
  };
}

export default function Home() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function getPokemon() {
      const response = await fetch(
        "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
      );
      setPokemon(await response.json());
    }
    getPokemon();
  }, []);

  return (
    <div className={styles.grid}>
      <Head>
        <title>Pokemon</title>
      </Head>
      <h1>Welcome to Next.js</h1>
      <ul>
        {pokemon.map((pokemon, index) => (
          <li className={styles.card} key={index}>
            <Link href={`/pokemon/${pokemon.id}`}>
              <a>
                <h3>{pokemon.name}</h3>
                <img
                  src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                  alt={pokemon.name}
                />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
