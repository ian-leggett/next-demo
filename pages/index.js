import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import PageLayout from "../components/page-layout";

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

// export async function getStaticProps() {
//   const response = await fetch(
//     "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
//   );
//   return {
//     props: {
//       pokemon: await response.json(),
//     },
//   };
// }

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
      <h1>Welcome to the Pokemon app powered by Next.js!</h1>
      <img
        src="banner.png"
        width="1019px"
        height="221px"
        alt="pokemon banner"
      />
      {/* <Image src="/banner.png" width={1019} height={221} alt="pokemon banner" quality={1} /> */}
      <p>
        Bacon ipsum dolor amet pig boudin venison, jerky tenderloin t-bone filet
        mignon ribeye kevin meatloaf drumstick pork chop. Kevin ground round
        chislic tongue pork chop filet mignon pig capicola sausage. Tri-tip
        andouille burgdoggen ham hock. Turducken pancetta picanha meatloaf pork
        chop, pig shank doner. Landjaeger ball tip rump, bresaola jerky salami
        ribeye venison turkey biltong.{" "}
      </p>
      <p>
        Porchetta pork biltong tenderloin ham hock chuck venison leberkas.
        Salami ribeye t-bone turkey drumstick boudin shankle fatback jowl
        alcatra venison strip steak. Ham hock short ribs cupim biltong, alcatra
        frankfurter porchetta pork chop drumstick buffalo short loin sirloin.
        Tail picanha flank alcatra kevin cow, shoulder frankfurter leberkas
        buffalo filet mignon.{" "}
      </p>
      <p>
        Turkey bacon beef ribs landjaeger chislic buffalo pastrami picanha short
        ribs ground round drumstick pork loin. Hamburger chicken meatloaf tail
        ball tip shankle bresaola. T-bone strip steak tenderloin flank beef,
        doner corned beef turducken picanha andouille ball tip pancetta tri-tip
        prosciutto chicken. Shoulder filet mignon turkey pork loin flank,
        pastrami strip steak. Jerky chicken picanha tri-tip doner bacon. Cow
        flank pancetta turkey strip steak.
      </p>
      <ul>
        {pokemon.map((pokemon, index) => (
          <li className={styles.card} key={index}>
            <Link href={`/pokemon/${pokemon.id}`}>
              <a>
                <h3>{pokemon.name}</h3>
                {/* <Image
                  src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                  alt={pokemon.name}
                  width={200}
                  height={200}
                  quality={1}
                  priority
                /> */}
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

Home.getLayout = function getLayout(page) {
  return <PageLayout>{page}</PageLayout>;
};
