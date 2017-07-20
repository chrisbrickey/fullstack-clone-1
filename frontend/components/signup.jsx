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
    this.updateUser = this.updateUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  updateUser(event) {
    let oldUser = this.state.user;
    oldUser[event.target.name] = event.target.value;

    this.setState(
      {user: oldUser}
    );
  }


  handleSubmit(event) {
    event.preventDefault();
    this.props.signupCreateUser(this.state.user);
  }

  //remember that errors might be null so render conditionally
  render() {

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
                  name="name"
                  value={this.state.name}
                  onChange={this.updateUser}
                  className="login-input"
                />
              </label>

              <br/>

              <label>Username:
                <input type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.updateUser}
                  className="login-input"
                />
              </label>

              <br/>

              <label>Password:
                <input type="text"
                  name="password"
                  value={this.state.password}
                  onChange={this.updateUser}
                  className="login-input"
                />
              </label>

              <br/>
              By signing up, you agree to our
              Terms & Privacy Policy.
              <input type="submit" value="Submit" />
          </form>

          <section className="button">

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
