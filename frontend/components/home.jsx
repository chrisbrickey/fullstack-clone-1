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

    return (
      <div>rendering from home.jsx</div>
    );

  }


}

export default Home;
// export default withRouter(Home);
