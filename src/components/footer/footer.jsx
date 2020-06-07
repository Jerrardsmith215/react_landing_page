import React, { Component } from 'react';
import './footer.css'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <h3>Nu<span id="footer-span">Vel </span></h3>
        
        <p><strong>Follow Us</strong> <br />info@nuvelrecords.com</p>
        <ul>
          <li><a href="#facebook"><i className="fab fa-facebook-square icon"></i></a></li>
          <li><a href="#twitter"><i className="fab fa-twitter-square icon"></i></a></li>
          <li><a href="#instagram"><i className="fab fa-instagram icon"></i></a></li>
        </ul>
      </footer>
    )
  }
}

export default Footer;