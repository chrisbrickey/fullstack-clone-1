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
                      <li>
                          <a id="copyright" href="http://www.chrisbrickey.com">WWW.CHRISBRICKEY.COM</a>
                      </li>
                  </ul>
              </footer>
          </section>

      </div>
    );

  }


}

export default FooterXXX;
