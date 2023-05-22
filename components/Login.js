import { signIn } from "next-auth/react";
import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import Logo from "../public/TreeLogo.png";

const Login = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="bg-[#43726D] h-screen grid place-items-center">
        {/* <BsTwitter className="text-white text-[200px]" /> */}
        <Image src={Logo} width={300} alt="Logo" />
      </div>

      {/* <div className="grid place-items-center"> */}
      {/* <div className="bg-[#6EA494] h-screen grid place-items-center"> */}
      <div className="bg-[#C4C595] h-screen grid place-items-center">
        <div
          className="flex gap-4 bg-[#fff] p-4 px-6 items-center rounded-[6px] cursor-pointer"
          onClick={() => signIn("google")}
        >
          <FcGoogle className="text-[30px]" />
          SignIn with Google
        </div>
      </div>
    </div>
  );
};

export default Login;
