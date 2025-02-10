import { Footer, Layout, Navbar } from "@/components";
import { Error, Home } from "@/pages";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
      <Footer />
    </>
  );
};

export default App;
