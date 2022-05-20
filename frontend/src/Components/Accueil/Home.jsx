import React from "react";
import home from './image/home-img.png';

class Home extends React.Component {
  render() {
    return <section className="home" id="home">
  <div className="image">
    <img src={home} alt="" />
  </div>
  <div className="content">
    <h3>E-Medcine</h3>
    <p>Consulter vos simptomes en un seul questionnaire</p>
    <a href="#" className="btn"> Commencez <span className="fas fa-chevron-right" /> </a>
  </div>
    </section>;
  }

}

export default Home;