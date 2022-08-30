import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../../styles/Details.module.css";
import Link from "next/link";
import Image from "next/image";

// export async function getServerSideProps({params}) {
//   const response = await fetch(
//     `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${params.id}.json`
//   );
//   return {
//     props: {
//       pokemon: await response.json(),
//     },
//   };
// }

// export async function getStaticPaths() {
//   const response = await fetch(
//     "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
//   );
//   const pokemon = await response.json();

//   return {
//     paths: pokemon.map((pokemon) => ({
//       params: { id: pokemon.id.toString() },
//     })),
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const response = await fetch(
//     `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${params.id}.json`
//   );
//   return {
//     props: {
//       pokemon: await response.json(),
//     },
//   };
// }

export default function Details() {
  const [pokemon, setPokemon] = useState(null);

  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    async function getPokemon() {
      const response = await fetch(
        `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${id}.json`
      );
      setPokemon(await response.json());
    }

    if (id) {
      getPokemon();
    }
  }, [id]);

  if (!pokemon) {
    return null;
  }

  return (
    <div>
      <Head>
        <title>{pokemon.name}</title>
      </Head>
      <div>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </div>
      <div className={styles.layout}>
        <div>
          <Image
            className={styles.picture}
            src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
            alt={pokemon.name.english}
            width={400}
            height={400}
            // quality={100}
          />
        </div>
        <div>
          <div className={styles.name}>{pokemon.name}</div>
          <div className={styles.type}>{pokemon.type.join(", ")}</div>
          <table>
            <thead className={styles.header}>
              <tr>
                <th>Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {pokemon.stats.map(({ name, value }) => (
                <tr key={name}>
                  <td className={styles.attribute}>{name}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
