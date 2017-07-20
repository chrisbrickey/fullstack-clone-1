import React from 'react';
import { Link, withRouter } from 'react-router-dom';


console.log("on the signup.jsx");

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    //this.anyMethod = this. anyMethod.bind(this);
  }

  //remember that errors might be null so render conditionally
  render() {

    return (
      <div>
        <h3>...from signup top-level component</h3>
        <h4>PhonePhoto</h4>
        <h4>AuthForm</h4>
      </div>
    );
  }


}

export default Signup;
