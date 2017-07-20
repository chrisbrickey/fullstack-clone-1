import React from 'react';
import { Link, withRouter } from 'react-router-dom';


console.log("on the signup.jsx");


//if having trouble, remove errors from local state
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        username: "",
        password: ""
      },
      errors: {}
    };

    //this.anyMethod = this.anyMethod.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  // componentWillReceiveProps(newProps) {
  //   if (this.props.formType !== newProps.formType) {
  //     this.props.clearErrors();
  //   }
  // }

  updateUser(event) {
    let currentState = this.state.user;
    currentState[event.target.name] = event.target.value;

    this.setState(
      {user: currentState}
    );

  }

  handleSubmit(event) {
    console.log("inside handleSubmit");
    let testUser = this.state.user;
    console.log(testUser);
    console.log({user: testUser});

    event.preventDefault();
    let newUser = this.state.user;
    this.props.processForm({ user: newUser });
  }

  demoLogin(event) {
    event.preventDefault();
    const demoUser = { user: {name: "Demo Login", username: "demologin", password: "password"}};
    this.props.loginCreateSession(demoUser);
  }



  //remember that errors might be null so render conditionally
  render() {
    const prefixText = this.props.formType === ('login') ? "Don't have an account?" : "Have an account?";
    const buttonText = this.props.formType === ('login') ? "Log in" : "Sign up";

    const linkText = this.props.formType === ('login') ? "Sign up" : "Log in";
    const linkPath = this.props.formType === ('login') ? "/signup" : "login";


    return (

      <div className="signup-container">
        <header>...from signup top-level component</header>
        <figure>Photo of iPhones</figure>

        <section className="auth-form">
          <br/>
          <h1>Instagram</h1>
          <br/>
          <p>Sign up to see photos from your friends.</p>

          <br/>
          <input type="submit" value="Demo login" className="button" onClick={this.demoLogin}/>
          <br/>

        <p>--------------OR-------------------</p>

          <form onSubmit={this.handleSubmit} className="auth-form-box">
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
              <br/>
              <input type="submit" value={buttonText} className="button"/>

                <br/>
                <p>By signing up, you agree to our</p>
                <p>Terms & Privacy Policy.</p>
          </form>
        </section>

        <nav className="auth-form-toggle">
          <p>{`${prefixText}`}
            <Link to={`${linkPath}`}>{linkText}</Link>
          </p>
        </nav>

        <section className="button">
          <button onClick={this.props.logoutDestroySession}>Logout</button>
        </section>

      </div>
    );
  }


}

export default Signup;
// export default withRouter(Signup);
