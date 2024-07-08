import React from "react";
import globe from "../images/globe-removebg-preview.png";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/setup";
import { signOut } from "firebase/auth";

function Navbar(props) {
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  console.log(auth);
  return (
    <div className="grid grid-cols-3 bg-slate-800 fixed text-white">
      <div className="flex">
        <img src={globe} className="h-10" alt="" />
        {auth.currentUser ? (
          <button
            onClick={logout}
            className="bg-transparent font-semibold hover:text-white h-7 mt-1 ml-1 mr-1 bg-slate-800"
          >
            Log out
          </button>
        ) : (
          <Link to="/signin">
            <button className="bg-transparent font-semibold hover:text-white  h-7 mt-1 ml-1 mr-1 bg-slate-800 ">
              Sign in
            </button>
          </Link>
        )}
      </div>
      <div className="flex">
        <button
          onClick={() => props.setMenu("All")}
          className="ml-4 font-semibold text-base"
        >
          Home
        </button>
        <button
          onClick={() => props.setMenu("Science")}
          className="ml-4 font-semibold text-base"
        >
          Science
        </button>
        <button
          onClick={() => props.setMenu("Movies")}
          className="ml-4 font-semibold text-base"
        >
          Movies
        </button>
        <button
          onClick={() => props.setMenu("bitcoin")}
          className="ml-4 font-semibold text-base"
        >
          Reel
        </button>
        <button
          onClick={() => props.setMenu("Worklife")}
          className="ml-4 font-semibold text-base"
        >
          Worklife
        </button>
        <button
          onClick={() => props.setMenu("Travel")}
          className="ml-4 font-semibold text-base"
        >
          Travel
        </button>
        <button
          onClick={() => props.setMenu("Future")}
          className="ml-4 font-semibold text-base"
        >
          Future
        </button>
        <button
          onClick={() => props.setMenu("Culture")}
          className="ml-4 font-semibold text-base"
        >
          Culture
        </button>
      </div>
    </div>
  );
}

export default Navbar;
