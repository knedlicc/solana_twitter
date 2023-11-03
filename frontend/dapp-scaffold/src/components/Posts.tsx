import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  Keypair,
  SystemProgram,
  PublicKey,
  TransactionMessage,
  TransactionSignature,
  VersionedTransaction,
} from "@solana/web3.js";
import { FC, useCallback, useState } from "react";
import { notify } from "../utils/notifications";
import { AnchorProvider, Program, utils, web3 } from "@project-serum/anchor";
import idl from "./twitter.json";
import { ca } from "date-fns/locale";

export const Posts: FC = () => {
  const { connection } = useConnection();
  const wallet = useWallet();
  const idl_string = JSON.stringify(idl);
  const idl_object = JSON.parse(idl_string);
  const programId = new PublicKey(idl.metadata.address);
  const [posts, setPosts] = useState([]);

  const getProvider = () => {
    const provider = new AnchorProvider(
      connection,
      wallet,
      AnchorProvider.defaultOptions()
    );
    return provider;
  };
  const like = async () => {
    try {
      const provider = getProvider();
      const program = new Program(idl_object, programId, provider);

      const [tweet_reaction] = await PublicKey.findProgramAddressSync(
        [
          utils.bytes.utf8.encode("TWEET_REACTION_SEED"),
          provider.wallet.publicKey.toBuffer(),
        ],
        program.programId
      );
      const [tweet] = await PublicKey.findProgramAddressSync(
        [
          utils.bytes.utf8.encode("TWEET_SEED"),
          provider.wallet.publicKey.toBuffer(),
        ],
        program.programId
      );

      await program.rpc.likeTweet({
        accounts: {
          reaction_author: provider.wallet.publicKey,
          tweet_reaction,
          tweet,
          systemProgram: web3.SystemProgram.programId,
        },
      });
    } catch (error: any) {
      console.error(error);
    }
  };
  const dislike = async () => {
    try {
      const provider = getProvider();
      const program = new Program(idl_object, programId, provider);

      const [tweet_reaction] = await PublicKey.findProgramAddressSync(
        [
          utils.bytes.utf8.encode("TWEET_REACTION_SEED"),
          provider.wallet.publicKey.toBuffer(),
        ],
        program.programId
      );
      const [tweet] = await PublicKey.findProgramAddressSync(
        [
          utils.bytes.utf8.encode("TWEET_SEED"),
          provider.wallet.publicKey.toBuffer(),
        ],
        program.programId
      );

      await program.rpc.dislikeTweet({
        accounts: {
          reaction_author: provider.wallet.publicKey,
          tweet_reaction,
          tweet,
          systemProgram: web3.SystemProgram.programId,
        },
      });
    } catch (error: any) {
      console.error(error);
    }
  };

  const comment = async () => {};

  const getPosts = async () => {
    const provider = getProvider();
    const program = new Program(idl_object, programId, provider);

    try {
      Promise.all(
        (await connection.getProgramAccounts(programId)).map(async (tweet) => ({
          ...(await program.account.tweet.fetch(tweet.pubkey)),
          pubkey: tweet.pubkey,
        }))
      ).then((tweets) => {
        console.log(tweets);
        setPosts(tweets);
      });
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-row justify-center">
      <div className="relative group items-center">
        <div
          className="m-1 absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-fuchsia-500 
                rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"
        ></div>
        <button
          className="group w-60 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black"
          disabled={!wallet.publicKey}
        >
          <div className="hidden group-disabled:block ">
            Wallet not connected
          </div>
          <span className="block group-disabled:hidden">Tweet</span>
        </button>
        <button
          className="group w-60 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black"
          onClick={getPosts}
          disabled={!wallet.publicKey}
        >
          <div className="hidden group-disabled:block ">
            Wallet not connected
          </div>
          <span className="block group-disabled:hidden">Get Tweets</span>
        </button>

        <>
          {posts.map((post) => {
            return (
              <div>
                {post.tweet_author} <br />
                {post.topic} <br />
                {post.content} <br />
                {post.likes}  :  {post.dislikes}< br />
                ----------comments----------
                <div></div>
                <button className="btn btn-primary" onClick={comment}>
                  Comment
                </button>
                <button className="btn btn-primary" onClick={like}>
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 00-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 00471 99.9c-52 0-98 35-111.8 85.1l-85.9 311h-.3v428h472.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM112 528v364c0 17.7 14.3 32 32 32h65V496h-65c-17.7 0-32 14.3-32 32z" />
                  </svg>
                </button>
                <button className="btn btn-primary" onClick={dislike}>
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M885.9 490.3c3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-51.6-30.7-98.1-78.3-118.4a66.1 66.1 0 00-26.5-5.4H273v428h.3l85.8 310.8C372.9 889 418.9 924 470.9 924c29.7 0 57.4-11.8 77.9-33.4 20.5-21.5 31-49.7 29.5-79.4l-6-122.9h239.9c12.1 0 23.9-3.2 34.3-9.3 40.4-23.5 65.5-66.1 65.5-111 0-28.3-9.3-55.5-26.1-77.7zM112 132v364c0 17.7 14.3 32 32 32h65V100h-65c-17.7 0-32 14.3-32 32z" />
                  </svg>
                </button>
              </div>
            );
          })}
        </>
      </div>
    </div>
  );
};
