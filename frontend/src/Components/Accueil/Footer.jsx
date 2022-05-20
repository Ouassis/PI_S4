import React from "react";

class Footer extends React.Component {
  render() {
    return <section className="footer">
  <div className="box-container">
    <div className="box">
      <h3>quick links</h3>
      <a href="#"> <i className="fas fa-chevron-right" /> home </a>
      <a href="#"> <i className="fas fa-chevron-right" /> about </a>
      <a href="#"> <i className="fas fa-chevron-right" /> doctors </a>
      <a href="#"> <i className="fas fa-chevron-right" /> review </a>
      <a href="#"> <i className="fas fa-chevron-right" /> blogs </a>
    </div>
    <div className="box">
      <h3>nos services</h3>
      <a href="#"> <i className="fas fa-chevron-right" /> dental care </a>
      <a href="#"> <i className="fas fa-chevron-right" /> message therapy </a>
      <a href="#"> <i className="fas fa-chevron-right" /> cardioloty </a>
      <a href="#"> <i className="fas fa-chevron-right" /> diagnosis </a>
      <a href="#"> <i className="fas fa-chevron-right" /> ambulance service </a>
    </div>
    <div className="box">
      <h3>contact info</h3>
      <a href="#"> <i className="fas fa-phone" /> +212-1450-2348 </a>
      <a href="#"> <i className="fas fa-phone" /> +212-5324-9524 </a>
      <a href="#"> <i className="fas fa-envelope" /> nassimzaari@gmail.com </a>
      <a href="#"> <i className="fas fa-envelope" /> abdessamadelgarouate@gmail.com </a>
      <a href="#"> <i className="fas fa-map-marker-alt" /> Rabat, morroco - 14000 </a>
    </div>
    <div className="box">
      <h3>follow us</h3>
      <a href="#"> <i className="fab fa-facebook-f" /> facebook </a>
      <a href="#"> <i className="fab fa-twitter" /> twitter </a>
      <a href="#"> <i className="fab fa-twitter" /> twitter </a>
      <a href="#"> <i className="fab fa-instagram" /> instagram </a>
      <a href="#"> <i className="fab fa-linkedin" /> linkedin </a>
      <a href="#"> <i className="fab fa-pinterest" /> pinterest </a>
    </div>
  </div>
    </section>;
  }

}

export default Footer;