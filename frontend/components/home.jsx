import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';


console.log("on the home.jsx");


//if having trouble, remove errors from local state
class Home extends React.Component {
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





  //remember that errors might be null so render conditionally
  render() {

    console.log(this.props.loggedIn);

    return (
      <div>rendering from home.jsx

        <nav className="footer">

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

          <section>
            <button onClick={this.props.logoutDestroySession} className="logout-button">Logout</button>
          </section>

        </nav>

      </div>
    );

  }


}

export default Home;
// export default withRouter(Home);
