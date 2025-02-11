import { Footer, Navbar } from "@/components";
import { Error, Home } from "@/pages";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Navbar />
      <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      <Footer />
    </>
  );
};

export default App;
