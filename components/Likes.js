import Image from "next/image";
import Logo from "../public/ff.png";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Likes() {
  const [likedPosts, setLikedPosts] = useState([]);

  useEffect(() => {
    const fetchLikedPosts = async () => {
      const userId = "id";
      const likedPostsRef = collection(db, "posts", userId, "likes");
      const snapshot = await getDocs(likedPostsRef);
      const likedPostsData = snapshot.docs.map((doc) => doc.data());
      setLikedPosts(likedPostsData);
    };

    fetchLikedPosts();
  }, []);

  return (
    <section className="sm:ml-[81px] xl:ml-[340px] w-full min-h-screen border-r border-gray-400 text-white py-2">
      <div className="sticky top-0 bg-[#43726D] flex justify-between font-medium text-[30px] px-4 py-2">
        Likes
        <Image src={Logo} width={25} alt="Logo" />
      </div>
      <ul>
        {likedPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </section>
  );
}

// useEffect(
//   () =>
//     onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
//       setLikes(snapshot.docs)
//     ),
//   [id]
// );
