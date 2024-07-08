import React from "react";
import temp from "../images/temp.png";
import Logo from "../images/globe-removebg-preview.png";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/setup";
import { useNavigate } from "react-router-dom";

const Signing = () => {
  const navigate = useNavigate();
  const googleSignin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      auth.currentUser && navigate("/");
    } catch (e) {
      console.log(e);
    }
    // console.log(auth);
  };

  return (
    <div className="grid grid-cols-2 bg-white h-screen">
      <div className="flex flex-col items-center justify-center h-full p-4">
        <img src={Logo} alt="Logo" className="h-20 mb-8" />
        <h1 className="text-4xl font-semibold mb-6">Sign in</h1>
        <button
          onClick={googleSignin}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded h-12 w-64 mb-6 transition duration-300"
        >
          Sign in with Google
        </button>
        <h4 className="text-gray-600 underline mt-4">Sign in Now</h4>
      </div>

      <div>
        <img src={temp} alt="" className="h-screen ml-20 " />
      </div>
    </div>
  );
};

export default Signing;
