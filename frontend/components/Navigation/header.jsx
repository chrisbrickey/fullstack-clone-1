import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';


console.log("on the header.jsx");

class HeaderXXX extends React.Component {
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
  }


  componentDidMount() {
      // this.props.fetchAllPhotos();
    }


  //remember that errors and other objects might be null so render conditionally
  render() {
    console.log("on the header render");
    console.log(this.props);

    return (

      <section className="header-container">
        <div className="navLinks-header">

            <div className="left-header">
                <Link className="profile-link" to={`/`}>
                    <img
                        src={'https://res.cloudinary.com/dckkkjkuz/image/upload/v1500614262/camera_jmhdl8.png'}
                        alt="Instagram Camera Icon"
                        className="camera-icon"
                    />
                </Link>

                <div className="vertical-line"></div>

                  <Link className="profile-link" to={`/`}>
                      <img
                          src={'https://res.cloudinary.com/dckkkjkuz/image/upload/v1500659742/InstagramLogo_kgliwu.png'}
                          alt="Instagram Logo"
                          className="header-logo"
                      />
                  </Link>

            </div>



            <div className="mid-header">
                <Link className="profile-link" to="/upload">
                    <img
                        src={'https://res.cloudinary.com/dckkkjkuz/image/upload/v1500855174/001-cloud-computing_gjhr1n.png'}
                        alt="upload icon"
                        className="upload-icon"
                    />
                </Link>
            </div>

            



            <div className="right-header">
                <img
                    src={'https://res.cloudinary.com/dckkkjkuz/image/upload/v1500614263/compass_chujqx.svg'}
                    alt="explore icon"
                    className="header-icon"
                />

                <img
                    src={'https://res.cloudinary.com/dckkkjkuz/image/upload/v1500614263/heart_sqbqyf.svg'}
                    alt="follows icon"
                    className="header-icon"
                />

              <Link className="profile-link" to={`users/${this.props.userId}`}>
                  <img
                      src={'https://res.cloudinary.com/dckkkjkuz/image/upload/v1500614263/user_nu2dc8.svg'}
                      alt="user icon"
                      className="header-icon"
                  />
              </Link>


            </div>

        </div>
      </section>
    );

  }


}

export default HeaderXXX;
// export default withRouter(HeaderXXX);
