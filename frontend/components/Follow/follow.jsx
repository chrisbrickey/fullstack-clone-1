import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

import FooterXXX from '../Navigation/footer';
import HeaderXXX from '../Navigation/header';

class Follow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      this.props.fetchAllUsers();
  }

  render() {

    return (
      <div className="follow-page-container">
          <HeaderXXX userId={this.props.currentUser.id}/>

          <main className="follow-sub-container">
              <div className="sub-sub-container">


              </div>
            </main>

          <FooterXXX/>
      </div>

    );

  }


}

export default Follow;
