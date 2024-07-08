import { Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Signing from "./components/Signing";
import Main from "./components/Main";
import NewsDetails from "./components/NewsDetails";

function App() {
  return (
    <>
      {/* <Signing /> */}
      {/* <Navbar /> */}
      <Routes>
        <Route path="/signin" element={<Signing />} />
        <Route path="/" element={<Main />} />
        <Route path="/details" element={<NewsDetails />} />
      </Routes>
    </>
  );
}

export default App;
