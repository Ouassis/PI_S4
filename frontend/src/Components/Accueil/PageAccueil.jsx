
import React from "react";
import Home from './Home';
import About from './About';
import Blogs from './Blogs';
import Doctors from './Doctors';
import Footer from './Footer';
import Icons from './Icons';
import Navbar from './Navbar';
import Review from './Review';
/* import './App.css';
 */
function PageAccueil() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Icons/>
      
      <About/>
      <Doctors/>
      <Review/>
      <Blogs/>
      <Footer/>

    </div>
  );
}

export default PageAccueil;
