import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';


console.log("on the home.jsx");

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


  componentDidMount() {
      this.props.fetchAllPhotos();
    }


  //remember that errors and other objects might be null so render conditionally
  render() {

    // console.log(this.props.loggedIn);
    // console.log(this.props.photos);
    const photoFeedObject = this.props.photos.byId;
    let photoFeedList = null;

    if (photoFeedObject) {
        photoFeedList = Object.keys(photoFeedObject).map( (id) => {
            return (
                <li key={photoFeedObject[id].id} className="feedItem-container">
                    <img src={photoFeedObject[id].photoUrl} alt="photo"/>
                </li>
            );
        });
    }


    return (
      <div>rendering from home.jsx

          <header>
              <p>header will go here</p>
          </header>

          <main className="photoFeed">

              <p>picture feed will go here</p>
              <ul>
                  {photoFeedList}
              </ul>

          </main>


          <footer>

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
                  <li>{"      "}</li>
                  <li id="copyright"> &copy; 2017 INSTAGRAM</li>
              </ul>

              <section>
                  <button onClick={this.props.logoutDestroySession} className="logout-button">Logout</button>
              </section>

          </footer>

      </div>
    );

  }


}

export default Home;
// export default withRouter(Home);
