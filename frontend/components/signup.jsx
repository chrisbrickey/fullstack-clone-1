import React from 'react';
import { Link, withRouter } from 'react-router-dom';


console.log("on the signup.jsx");


//if having trouble, remove errors from local state
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        username: '',
        password: ''
      },
      errors: {}
    };

    //this.anyMethod = this.anyMethod.bind(this);
    this.myUpdate = this.myUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  myUpdate(field) {
    return ( (event) => {
      this.setState({
        [field]: event.currentTarget.value
      });
    });
  }

  handleChange(event) {
    event.preventDefault();
  }


  handleSubmit(event) {
    event.preventDefault();
  }

  //remember that errors might be null so render conditionally
  render() {

    console.log(this.props);
    console.log(this.state);

    return (
      <div className="signup-container">

        <header>
          ...from signup top-level component
          Photo of iPhones
        </header>

        <figure>
          Photo of iPhones
        </figure>

        <section className="auth-form">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            Sign up to see photos from your friends.
            <br/>

              <br/>
              <label>Name:
                <input type="text"
                  value={this.state.name}
                  onChange={this.myUpdate('name')}
                  className="login-input"
                />
              </label>

              <br/>

              <label>Username:
                <input type="text"
                  value={this.state.username}
                  onChange={this.myUpdate('username')}
                  className="login-input"
                />
              </label>

              <br/>

              <label>Password:
                <input type="text"
                  value={this.state.password}
                  onChange={this.myUpdate('password')}
                  className="login-input"
                />
              </label>

              <br/>
              By signing up, you agree to our
              Terms & Privacy Policy.
              <input type="submit" value="Submit" />
          </form>
          <section className="button">
            <button onClick={this.props.signupCreateUser}>Sign up</button>
            <button onClick={this.props.loginCreateSession}>Log in</button>
          </section>
        </section>

        <section className="auth-toggle">
          Have an account? Log in
        </section>

        <section className="button">
          <button onClick={this.props.logoutDestroySession}>Logout</button>
        </section>

      </div>
    );
  }


}

export default Signup;
