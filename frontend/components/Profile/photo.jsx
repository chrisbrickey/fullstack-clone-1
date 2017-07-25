import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

import FooterXXX from '../Navigation/footer';
import HeaderXXX from '../Navigation/header';

//grab current photo from url....then just need to link to it from pics on profile page
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
      <div className="photo-page-container">

          <HeaderXXX userId={this.props.currentUser.id}/>


          <section className="photo-outer">
              <div className="photo-inner">


                  <div className="photo-container">
                    <p>placeholder image</p>

                  </div>


                  <div className="detail-container">
                    <div className="box1">
                        <div className="optionalText">placeholder text</div>
                        <div className="another-container"/>
                    </div>


                    <div className="box2">
                        <div className="optionalText">placeholder text</div>

                        <div className="yet-another-container">
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
