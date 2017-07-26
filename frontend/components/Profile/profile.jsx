import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';


import theFooter from '../Navigation/footer';
import HeaderXXX from '../Navigation/header';

import PhotoDetailContainer from './photo_detail_container';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhotoId: null
    };

    //this.anyMethod = this.anyMethod.bind(this);
    this.showDetail = this.showDetail.bind(this);

  }

  showDetail(id) {
    console.log("inside showDetail fxn");
    console.log(id);
    this.setState({currentPhotoId: id}, () => {
      window.globalPhotoModal();
    });
  }


  render() {
    console.log("in the render method of profile.jsx");
    console.log(this.props);
    console.log(this.state);

    let profilePicture;
    if (this.props.currentUser.profileImgUrl) {
      profilePicture = this.props.currentUser.profileImgUrl;
    } else {
      profilePicture = "https://res.cloudinary.com/dckkkjkuz/image/upload/c_scale,w_590/v1500953840/instagram-color-fade_pvpssi.png";
    }

    const photoFeedObject = this.props.photos.byId;
    let userPhotoList = [];

    if (photoFeedObject) {
        Object.keys(photoFeedObject).forEach( (id) => {
            let photo = photoFeedObject[id];

            if (photo.userId === this.props.currentUser.id) {
                userPhotoList.push(photo);
            }

        });

    }

    let photoListRender = null;

    if (userPhotoList.length > 0) {
        photoListRender = userPhotoList.map((photo) => {
          return (
              <li key={photo.id} className="photoItem-container">

                    <div className="detailButton-container">
                        <img
                            src={photo.photoUrl}
                            alt="photo"
                            className="userPhoto"/>


                        <button
                          onClick={ () => this.showDetail(photo.id) }
                          className="detailButton"
                          value="see detail/edit">View / Edit / Delete</button>
                    </div>

              </li>
          );
        });

    } else {
        photoListRender = (
            <li className="noPhoto-container">
              <div className="noPhoto-inner">

                  <div className="noPhotoText">You don't have any photos. Upload some by clicking on</div>
                  <div className="space"></div>

                  <img
                      src={'https://res.cloudinary.com/dckkkjkuz/image/upload/v1500855174/001-cloud-computing_gjhr1n.png'}
                      alt="upload icon"
                      className="upload-icon-large"/>

                </div>
            </li>
        );

    }


    return (

      <div className="profile-page-container">
        <PhotoDetailContainer currentPhotoId={this.state.currentPhotoId}/>
          <HeaderXXX userId={this.props.currentUser.id}/>


          <section className="bio-container">
              <div className="bio-subcontainer">

                  <div className="pic-container">
                      <img
                          src={profilePicture}
                          alt="photo"
                          className="profilePhoto"/>
                  </div>

                  <div className="bio-sub-sub">

                      <div className="title">
                          <p className="username">{this.props.currentUser.username}</p>

                          <button
                              onClick={this.props.logoutDestroySession}
                              className="logout-button">
                              Logout
                          </button>
                      </div>

                      <div className="userAttributes">

                        <p className="name">{this.props.currentUser.name}</p>
                        <p className="tagline">{this.props.currentUser.tagline}</p>
                      </div>

                  </div>

              </div>
          </section>


          <section className="portfolio-container">
              <div className="portfolio-outer">


                      <ul className="portfolio">
                          {photoListRender}
                      </ul>

              </div>
          </section>


          <theFooter/>

      </div>
    );

  }


}

export default Profile;
