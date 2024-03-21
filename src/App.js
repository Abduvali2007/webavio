import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Hero from "./component/Hero";
import About from "./component/About";
import Section3 from "./component/Section3";
import Section4 from "./component/Section4";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Section3 />
      <Section4 />
      <Footer/>
    </div>
  );
}

export default App;
