import React from "react";

class Navbar extends React.Component {
  render() {
    return <nav className="navbar">
              <a href="#home">home</a>
              <a href="#services">services</a>
              <a href="#about">about</a>
              <a href="#doctors">doctors</a>
              <a href="#review">review</a>
              <a href="#blogs">blogs</a>
              <a href="#login">login</a>
        </nav>;
  }

}

export default Navbar;