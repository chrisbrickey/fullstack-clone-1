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

    console.log(this.props);
    console.log(this.state);

    return (
      <div>
        <button onClick={this.props.logoutDestroySession}>Logout</button>
        <p>...from signup top-level component</p>
        <p>{this.props.errors[0]}</p>
        <p>PhonePhoto</p>
        <p>AuthForm</p>
      </div>
    );
  }


}

export default Signup;
