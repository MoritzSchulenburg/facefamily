import React, { useEffect, useState } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import Post from "./Post";

const Bookmarks = () => {
  const [likedPosts, setLikedPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, "posts"),
        where("likes", "array-contains", session?.user?.uid)
      ),
      (snapshot) => {
        const posts = snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }));
        setLikedPosts(posts);
      }
    );

    return () => unsubscribe();
  }, [session?.user?.uid]);

  return (
    <div>
      <h1>Bookmarks</h1>
      {likedPosts.map(({ id, post }) => (
        <Post key={id} id={id} post={post} />
      ))}
    </div>
  );
};

export default Bookmarks;
