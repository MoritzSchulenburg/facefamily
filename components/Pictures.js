import React, { useEffect, useState } from "react";
import Image from "next/image";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../firebase";

const Pictures = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const postImage = onSnapshot(collection(db, "posts"), (snapshot) => {
      const results = snapshot.docs.map((doc) => doc.data().image);
      setImages(results.filter((result) => result !== null));
    });

    return () => postImage();
  }, []);

  return (
    <section className="sm:ml-[81px] xl:ml-[340px] w-full min-h-screen border-r border-gray-400 text-white py-2">
      <div className="sticky top-0 bg-[#43726D] flex justify-between font-medium text-[30px] px-4 py-2">
        Pictures
        <Image src="/ff.png" width={25} height={25} alt="Logo" />
      </div>

      <div className="flex flex-wrap justify-center mt-4">
        {images.map((imageUrl, index) => (
          <div key={index} className="m-2">
            <Image alt="" src={imageUrl} width={400} height={400} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pictures;
