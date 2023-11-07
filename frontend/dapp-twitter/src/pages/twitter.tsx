import type { NextPage } from "next";
import Head from "next/head";
import { TwitterView } from "../views";

const Twitter: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana Twitter</title>
        <meta
          name="description"
          content="Twitter Functionality"
        />
      </Head>
      <TwitterView />
    </div>
  );
};

export default Twitter;
