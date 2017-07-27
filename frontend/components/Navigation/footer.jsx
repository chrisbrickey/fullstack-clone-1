import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';


class FooterXXX extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div className="footer-container">

          <section className="footer-section">
              <footer>
                  <ul className="navLinks">
                      <li>ABOUT US</li>
                      <li>SUPPORT</li>
                      <li>BLOG</li>
                      <li>PRESS</li>
                      <li>API</li>
                      <li>JOBS</li>
                      <li>PRIVACY</li>
                      <li>TERMS</li>
                      <li>DIRECTORY</li>
                      <li>LANGUAGE</li>
                      <li>{"      "}</li>
                      <li id="copyright"> &copy; 2017 INSTAGRAM</li>
                  </ul>
              </footer>
          </section>

      </div>
    );

  }


}

export default FooterXXX;
