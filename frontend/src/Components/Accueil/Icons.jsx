import React from "react";

class Icons extends React.Component {
  render() {
    return <section className="icons-container">
  <div className="icons">
    <i className="fas fa-user-md" />
    <h3>140+</h3>
    <p>doctors at work</p>
  </div>
  <div className="icons">
    <i className="fas fa-users" />
    <h3>1040+</h3>
    <p>satisfied patients</p>
  </div>
  <div className="icons">
    <i className="fas fa-procedures" />
    <h3>500+</h3>
    <p>bed facility</p>
  </div>
  <div className="icons">
    <i className="fas fa-hospital" />
    <h3>80+</h3>
    <p>available hospitals</p>
  </div>
    </section>;
  }

}

export default Icons;