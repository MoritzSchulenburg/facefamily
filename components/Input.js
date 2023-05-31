import React, { useState } from "react";
import { BsImage, BsEmojiSmile, BsCheckLg } from "react-icons/bs";
import { AiOutlineGif, AiOutlineClose } from "react-icons/ai";
import { RiBarChart2Line } from "react-icons/ri";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useSession } from "next-auth/react";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { FcRemoveImage } from "react-icons/fc";
import Image from "next/image";

const Input = () => {
  const { data: session } = useSession();
  const [selectedFile, setSelectedFile] = useState(null);
  const [showEmojis, setShowEmojis] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // This adds the image that I want to add when i press the image icon in homE still not really uploading the picture!!! further down another code!!:
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };
  // Copyed this Code for picking the Emoji from the internet in Emoji Mart. It works haha actually dont know how it works...
  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };

  const sendPost = async () => {
    if (loading) return;

    setLoading(true);

    const docRef = await addDoc(collection(db, "posts"), {
      id: session.user.uid,
      username: session.user.name,
      userImg: session.user.image,
      tag: session.user.tag,
      text: input,
      timestamp: serverTimestamp(),
      image: selectedFile,
    });
    // uploading and storage from the image I take from the file still not really uploading the picture here!!!:
    // const imageRef = ref(storage, `posts/${docRef.id}/image`);
    // if (selectedFile) {
    //   console.log("SELECTED File: ", selectedFile);
    //   try {
    //     await uploadString(imageRef, selectedFile, "data_url").then(
    //       async () => {
    //         console.log("IMAGE REF: ", imageRef);
    //         const downloadURL = await getDownloadURL(imageRef);
    //         await updateDoc(doc(db, "posts", docRef.id), {
    //           image: downloadURL,
    //         });
    //       }
    //     );
    //   } catch (error) {
    //     console.log("ERROR in IMAGE UPLOAD: ", error);
    //   }
    const imageRef = ref(storage, `posts/${docRef.id}/image`);

    if (selectedFile) {
      await uploadString(imageRef, selectedFile, "data_url").then(async () => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadURL,
        });
      });

      // FcRemoveImage;
    }
    // }

    setLoading(false);
    setInput("");
    setSelectedFile(null);
    setShowEmojis(false);
  };

  return (
    <div className={`mt-4 px-4 ${loading && "opacity-60"}`}>
      <div className="grid grid-cols-[48px,1fr] gap-4">
        <div>
          <Image
            className="h-12 w-12 rounded-full object-contain"
            src={session?.user?.image}
            alt=""
            width="200"
            height="200"
          />
        </div>

        <div className="w-[90%]">
          <textarea
            className="w-[100%] bg-transparent outline-none text-[20px]"
            rows="2"
            placeholder="What's Happening?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          {selectedFile && (
            <div className="relative mb-4">
              <div
                className="absolute w-8 h-8 bg-[#15181c] hover:[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
                onClick={() => setSelectedFile(null)}
              >
                <AiOutlineClose className="text-white h-5" />
              </div>

              <img
                src={selectedFile}
                alt=""
                className="rounded-2xl max-h-80 object-contain"
              />
            </div>
          )}

          {!loading && (
            <div className="flex justify-between items-center">
              <div className="flex gap-4 text-[20px] text-[#1d9bf0]">
                <label htmlFor="file">
                  <BsImage className="cursor-pointer text-white" />
                </label>

                <input id="file" type="file" hidden onChange={addImageToPost} />

                <BsEmojiSmile
                  className="cursor-pointer text-white"
                  onClick={() => setShowEmojis(!showEmojis)}
                />
                <IoCalendarNumberOutline className="cursor-pointer text-white" />
              </div>

              <button
                className="bg-[#C4C595] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#6e767d] disabled:hover:bg-black disabled:opacity-50 disabled:cursor-default"
                disabled={!input.trim() && !selectedFile} // I found this so that you have to tipe omething before you can post it with the button
                onClick={sendPost}
              >
                POST
              </button>
            </div>
          )}
          {/* This is the emoji picker I found with Emoji MArt to select a Emoji. The picking itself is on the top (copy paste from the internet (const Emoji picker)): */}
          {showEmojis && (
            <div className="absolute mt-[10px] -ml-[40px] max-w-[320px] rounded-[20px]">
              <Picker onEmojiSelect={addEmoji} data={data} theme="dark" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Input;
