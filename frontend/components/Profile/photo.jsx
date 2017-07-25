import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

import FooterXXX from '../Navigation/footer';
import HeaderXXX from '../Navigation/header';


console.log("on the photo.jsx");

class Photo extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   photo: {
    //     caption: "",
    //     location: "",
    //     photo_url: ""
    //   },
    // };

    //this.anyMethod = this.anyMethod.bind(this);
  }


  componentDidMount() {
      this.props.fetchAllPhotos();
    }


  //remember that errors and other objects might be null so render conditionally
  render() {

    console.log("rendering on photo.jsx");
    console.log(this.props);

    return (
      <div className="upload-page-container">

          <HeaderXXX userId={this.props.currentUser.id}/>


          <section className="upload-sub-container">
              <div className="sub-sub-container">
                  <div className="upload-form-container">


                      <div className="option1-box">
                          <div className="optionText">placeholder text</div>
                          <div className="cloudinary-container"/>
                      </div>


                      <div className="option2-box">
                          <div className="optionText">placeholder text</div>

                          <div className="option2-form-container">
                          </div>
                      </div>


                  </div>
              </div>
          </section>


          <FooterXXX/>

      </div>
    );

  }


}

export default Photo;
// export default withRouter(Photo);
