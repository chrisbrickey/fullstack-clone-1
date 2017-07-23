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
    this.cropPhoto = this.cropPhoto.bind(this);
  }


  componentDidMount() {
      this.props.fetchAllPhotos();
    }

  cropPhoto(photoUrl) {
    const cropText = "/upload/c_thumb,h_500,w_500/";
    const photoUrlArray = photoUrl.split("/upload/");
    const croppedUrl = photoUrlArray[0] + cropText + photoUrlArray[1];

    return croppedUrl;
  }


  //remember that errors and other objects might be null so render conditionally
  render() {

    // console.log(this.props.loggedIn);
    // console.log(this.props.photos);
    const photoFeedObject = this.props.photos.byId;
    let photoFeedList = null;

    if (photoFeedObject) {
        photoFeedList = Object.keys(photoFeedObject).map( (id) => {
            let photo = photoFeedObject[id];

            return (
                <li key={photo.id} className="feedItem-container">
                    <p>{photo.username}</p>
                    <p>{photo.caption}</p>
                    <p>{photo.uploadDate}</p>
                    <img src={this.cropPhoto(photo.photoUrl)} alt="photo"/>
                </li>
            );
        });
    }


    return (
      <div>rendering from home.jsx

              <div className="header-container">

                <div className="navLinks-header">

                    <div className="left-header">
                        <p>header element 1</p>
                        <p>header element 2</p>
                        <p>header element 3</p>
                    </div>
                    <div className="mid-header">
                        <p>header element 4</p>
                    </div>
                    <div className="right-header">
                        <p>header element 5</p>
                        <p>header element 6</p>
                        <p>header element 7</p>
                    </div>

                </div>


              </div>

          <main className="photoFeed">

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
