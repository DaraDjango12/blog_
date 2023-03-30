// import { Banner } from "./component/Banner/Banner";
import { Footer } from "./component/Footer/Footer";
// import Main from "./component/Main/Main";
import "./App.css";
// import BlogCard from "./component/Footer/blogCard/BlogCard";
// import { Router } from "react-router-dom";
import Routing from "./Router";
import Dashboard from "./DashBoard/Dashboard";


function App() {
  return (
    <div className="app">
      {/* <Banner /> */}
      <Routing />
      
     
      <Footer />
    </div>
  );
}

export default App;
