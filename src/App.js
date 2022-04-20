import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/service:serviceId"
          element={<ServiceDetail></ServiceDetail>}
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
