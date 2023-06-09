import React, { useEffect, useState } from "react";
import Input from "./Input";
import Post from "./Post";
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import Image from "next/image";
import Logo from "../public/ff.png";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    []
  );

  return (
    // <section className="sm:ml-[81px] xl:ml-[340px] w-[600px] min-h-screen border-r border-gray-400 text-white py-2">
    <section className="sm:ml-[81px] xl:ml-[340px] w-full min-h-screen border-r border-gray-400 text-white py-2">
      <div className="sticky top-0 bg-[#43726D] flex justify-between font-medium text-[30px] px-4 py-2">
        Home
        <Image src={Logo} width={25} alt="Logo" />
      </div>

      <Input />

      {posts.map((post) => (
        <Post key={post.id} id={post.id} post={post.data()} /> // input refacured from the Post.js component
      ))}
    </section>
  );
};

export default Feed;
