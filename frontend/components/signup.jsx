import React from 'react';
import { Link, withRouter } from 'react-router-dom';


console.log("on the signup.jsx");


//if having trouble, remove errors from local state
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", username: "", password: ""};

    //this.anyMethod = this.anyMethod.bind(this);
    // this.updateUser = this.updateUser.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.setName = this.setName.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  // updateUser(event) {
  //   let currentState = this.state.user;
  //   currentState[event.target.name] = event.target.value;
  //
  //   this.setState(
  //     {user: currentState}
  //   );
  //
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   let newUser = this.state.user;
  //   this.props.signupCreateUser(newUser);
  // }

  setName(e){
   const name = e.target.value ? e.target.value : "";
   this.setState({name});
 }

 setUsername(e){
   const username = e.target.value ? e.target.value : "";
   this.setState({username});
 }

 setPassword(e){
   const password = e.target.value ? e.target.value : "";
   this.setState({password});
 }

 handleClick(e){
   e.preventDefault();
   console.log("inside handeClick fxn:");
   let newUser = this.state.user;

   this.props.signupCreateUser(newUser).then(() => this.setState({ name: "", username: "" , password: ""}));
 }


  //remember that errors might be null so render conditionally
  render() {

    return (
      <div className="signup-container">

        <header>
          ...from signup top-level component
        </header>

        <figure>
          Photo of iPhones
        </figure>

        <section className="FromCreateForm">
          <form>

            <label>Name:
              <input
                className="inputBox"
                onChange={this.setName}
                value={this.state.name} />
            </label>
            <br/>
            <br/>

            <label>Username:
              <input
                className="inputBox"
                onChange={this.setUsername}
                value={this.state.username} />
            </label>
            <br/>

              <label>Password:
                <input
                  className="inputBox"
                  onChange={this.setPassword}
                  value={this.state.password} />
              </label>
              <br/>

            <button className="createButton" onClick={this.handleClick}>New Submit Button</button>

          </form>
        </section>

        <section className="auth-form">
          <form onSubmit={this.handleClick} className="login-form-box">
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
