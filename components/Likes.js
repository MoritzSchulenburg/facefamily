import Image from "next/image";
import Logo from "../public/ff.png";

export default function Likes() {
  return (
    <section className="sm:ml-[81px] xl:ml-[340px] w-full min-h-screen border-r border-gray-400 text-white py-2">
      <div className="sticky top-0 bg-[#43726D] flex justify-between font-medium text-[30px] px-4 py-2">
        Likes
        <Image src={Logo} width={25} alt="Logo" />
      </div>
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
