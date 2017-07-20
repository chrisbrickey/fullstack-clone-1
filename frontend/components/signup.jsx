import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';


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
    const newState = merge({}, this.state);
    newState.user[event.target.name] = event.target.value;
    this.setState(newState);

    // let currentState = this.state.user;
    // currentState[event.target.name] = event.target.value;
    //
    // this.setState(
    //   {user: currentState}
    // );

  }

  handleSubmit(event) {
    console.log("inside handleSubmit");
    let testUser = this.state.user;
    console.log(testUser);
    console.log({user: testUser});

    event.preventDefault();
    let newUser = this.state.user;
    this.props.processForm({ user: newUser })
      .then(()=> {
        console.log("hi there");

        this.setState({
        user: {
          name: "",
          username: "",
          password: ""
        },
        errors: {}
      });
    });


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

      <div className="auth-container">

        <div className="auth-outer">outer
          <div className="auth-inner">inner


            <div className="left">left
              <div className="hero">hero

                  <figure>Photo of iPhones</figure>

              </div>
            </div>


            <div className="right">right
              <div className="subright">sub-right

                  <div className="auth-form-container">auth-form-container
                    <section className="auth-form-contents">auth-form-contents
                      <br/>
                      <h1>Instagram</h1>
                      <br/>
                      <p>Sign up to see photos from your friends.</p>

                      <br/>
                      <input type="submit" value="Demo login" className="button" onClick={this.demoLogin}/>
                      <br/>

                      <p>--------------OR-------------------</p>

                      <form onSubmit={this.handleSubmit} className="auth-form">
                          <br/>

                          <label>Name:
                            <input type="text"
                              name="name"
                              value={this.state.user.name}
                              onChange={this.updateUser}
                              className="login-input"
                            />
                          </label>

                          <br/>

                          <label>Username:
                            <input type="text"
                              name="username"
                              value={this.state.user.username}
                              onChange={this.updateUser}
                              className="login-input"
                            />
                          </label>

                          <br/>

                          <label>Password:
                            <input type="password"
                              name="password"
                              value={this.state.user.password}
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
                    auth-form-container
                  </div>

                  <section className="toggle-container">toggle-container
                    <nav className="toggle-contents">toggle-contents
                      <p>{`${prefixText}`}
                        <Link className="auth-link-toggle" to={`${linkPath}`}>{linkText}</Link>
                      </p>
                    </nav>
                  </section>
                  sub-right
                </div>
                right
              </div>
          </div>
        </div>


        <nav className="footer">footer

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
            <li id="copyright"> &copy; 2017 INSTAGRAM</li>
          </ul>

          <section>
            <button onClick={this.props.logoutDestroySession} className="button">Logout</button>
          </section>

        </nav>


      </div>
    );
  }


}

export default Signup;
// export default withRouter(Signup);
