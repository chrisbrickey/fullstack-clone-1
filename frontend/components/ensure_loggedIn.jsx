import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';


console.log("on the ensure_loggedIn.jsx");

//if having trouble, remove errors from local state
class EnsureLoggedIn extends React.Component {
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
    const { dispatch, currentURL } = this.props;
    var isLoggedIn = this.props.loggedIn;

    if (!isLoggedIn) {
      // set the current url/path for future redirection (we use a Redux action)
      // then redirect (we use a React Router method)
      // dispatch(setRedirectUrl(currentURL))
      // browserHistory.replace("/login")
    }
  }


  render() {

    console.log(`this.props.children: ${this.props.children}`);

    var isLoggedIn = this.props.loggedIn;

    if (isLoggedIn) {
      return this.props.children;
    } else {
      return null;
    }

  }


}


export default EnsureLoggedIn;
// export default withRouter(EnsureLoggedIn);
