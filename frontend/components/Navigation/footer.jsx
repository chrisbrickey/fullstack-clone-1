import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';


console.log("on the footer.jsx");

class FooterXXX extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   user: {
    //     name: "",
    //     username: "",
    //     password: ""
    //   },
    //   errors: {}
    // };

    //this.anyMethod = this.anyMethod.bind(this);
    // this.cropPhoto = this.cropPhoto.bind(this);
  }


  componentDidMount() {
      // this.props.fetchAllPhotos();
    }


  //remember that errors and other objects might be null so render conditionally
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
// export default withRouter(FooterXXX);