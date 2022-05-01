import React from "react";
import doc1 from './image/doc-1.jpg';
import doc2 from './image/doc-2.jpg';
import doc3 from './image/doc-3.jpg';
import doc4 from './image/doc-4.jpg';
import doc5 from './image/doc-5.jpg';
import doc6 from './image/doc-6.jpg';

class Doctors extends React.Component {
  render() {
    return <section className="doctors" id="doctors">
  <h1 className="heading"> our <span>doctors</span> </h1>
  <div className="box-container">
    <div className="box">
      <img src={doc1} alt =""/>
      <h3>john deo</h3>
      <span>expert doctor</span>
      <div className="share">
        <a href="#" className="fab fa-facebook-f" />
        <a href="#" className="fab fa-twitter" />
        <a href="#" className="fab fa-instagram" />
        <a href="#" className="fab fa-linkedin" />
      </div>
    </div>
    <div className="box">
      <img src={doc2} alt =""/>
      <h3>john deo</h3>
      <span>expert doctor</span>
      <div className="share">
        <a href="#" className="fab fa-facebook-f" />
        <a href="#" className="fab fa-twitter" />
        <a href="#" className="fab fa-instagram" />
        <a href="#" className="fab fa-linkedin" />
      </div>
    </div>
    <div className="box">
    <img src={doc3} alt =""/>
      <h3>john deo</h3>
      <span>expert doctor</span>
      <div className="share">
        <a href="#" className="fab fa-facebook-f" />
        <a href="#" className="fab fa-twitter" />
        <a href="#" className="fab fa-instagram" />
        <a href="#" className="fab fa-linkedin" />
      </div>
    </div>
    <div className="box">
      <img src={doc4} alt =""/>
      <h3>john deo</h3>
      <span>expert doctor</span>
      <div className="share">
        <a href="#" className="fab fa-facebook-f" />
        <a href="#" className="fab fa-twitter" />
        <a href="#" className="fab fa-instagram" />
        <a href="#" className="fab fa-linkedin" />
      </div>
    </div>
    <div className="box">
      <img src={doc5} alt =""/>
      <h3>john deo</h3>
      <span>expert doctor</span>
      <div className="share">
        <a href="#" className="fab fa-facebook-f" />
        <a href="#" className="fab fa-twitter" />
        <a href="#" className="fab fa-instagram" />
        <a href="#" className="fab fa-linkedin" />
      </div>
    </div>
    <div className="box">
      <img src={doc6} alt =""/>
      <h3>john deo</h3>
      <span>expert doctor</span>
      <div className="share">
        <a href="#" className="fab fa-facebook-f" />
        <a href="#" className="fab fa-twitter" />
        <a href="#" className="fab fa-instagram" />
        <a href="#" className="fab fa-linkedin" />
      </div>
    </div>
  </div>
    </section>;
  }

}

export default Doctors;