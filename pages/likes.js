import React from "react";
import Sidebar from "@/components/Sidebar.js";
import Trending from "@/components/Trending.js";
import Modal from "../components/Modal";
import Head from "next/head";
import { AppContext } from "../contexts/AppContext";
import Login from "../components/Login";
import { getSession, useSession } from "next-auth/react";
import { useContext } from "react";
import Likes from "@/components/Likes";

export default function LikesPage() {
  const { data: session } = useSession();
  const [appContext] = useContext(AppContext);

  if (!session) return <Login />;
  return (
    <div>
      <Head>
        <title>FaceFamily</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative max-w-[1400px] mx-auto">
        <Sidebar />
        <div className="flex gap-6">
          <Likes />
          <Trending />
          {appContext?.isModalOpen && <Modal />}
        </div>
      </main>
    </div>
  );
}
