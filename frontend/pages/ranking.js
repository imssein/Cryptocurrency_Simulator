import React from "react";
import Head from "next/head";
import { RankingProvider } from "../contexts/Ranking";
import RankingContainer from "../components/rankingComponent/containers/RankingContainer";

function Ranking(props) {
  return (
    <div className="mb-20 max-w-5xl mx-auto">
      <Head>
        <title>모의 투자 사이트 | 랭킹</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RankingProvider>
        <RankingContainer />
      </RankingProvider>
    </div>
  );
}

export default Ranking;
