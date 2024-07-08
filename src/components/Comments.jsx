import { addDoc, collection, getDocs, doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, database } from "../firebase/setup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Comments(props) {
  const [comments, setComments] = useState("");
  const [newsComments, setNewsComments] = useState([]);

  const addComment = async () => {
    const newsDoc = doc(database, "News", `${props.url.substr(-10, 10)}`);
    const commentsRef = collection(newsDoc, "Comments");
    auth.currentUser === null && toast.warning("Please login");
    auth.currentUser && toast("Comments added");
    try {
      auth.currentUser &&
        (await addDoc(commentsRef, {
          comments: comments,
          name: auth.currentUser.displayName,
          profileImg: auth.currentUser.photoURL,
        }));
      // Refresh the comments after adding a new one
      showComments();
    } catch (e) {
      console.error(e);
    }
  };

  const showComments = async () => {
    const newsDoc = doc(database, "News", `${props.url.substr(-10, 10)}`);
    const commentsRef = collection(newsDoc, "Comments");
    try {
      const querySnapshot = await getDocs(commentsRef);
      const filteredData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setNewsComments(filteredData);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    showComments();
  }, []);

  return (
    <div className="grid grid-rows-2">
      <div className="p-5">
        <label
          htmlFor="Add Comment"
          className="block mb-2 text-sm font-medium text-black"
        >
          Add Comments
        </label>
        <div className="flex">
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5"
            placeholder="Comments"
            required
            onChange={(e) => setComments(e.target.value)}
          />
          <button
            onClick={addComment}
            className="bg-gray-50 border border-gray-300 p-2.5 rounded-lg ml-2 text-gray-900 text-sm"
          >
            Add
          </button>
        </div>
        <div className="p-5">
          {newsComments.map((data) => {
            return (
              <>
                <div className="flex">
                  <img
                    src={data.profileImg}
                    alt=""
                    className="rounded-full w-5 h-5"
                  />
                  <h6 className="ml-2 text-sm  text-slate-500">{data.name}</h6>
                </div>
                <div className="ml-7 ">
                  <h4>{data.comments}</h4>
                </div>
              </>
            );
          })}
        </div>
        <ToastContainer autoClose={3000} />
      </div>
    </div>
  );
}

export default Comments;
