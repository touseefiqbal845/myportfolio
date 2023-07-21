import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/portfolio";
import Testitmonials from "./components/testimonials/testitmonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/footer";
import Portfolios from "./components/portfolio copy/portfolios";
function App() {
  return (
   <>
  <Nav/>
  <Header/>
  {/* <Services/> */}
    <About/>
   <Portfolio/>
   <Portfolios/>
 <Experience/>
   <Testitmonials/>
  <Contact/>
   
  <Footer/>
 </>
  );
}

export default App;
