import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';
import Modal from 'react-modal';
import {hashHistory} from 'react-router';

import FooterXXX from '../Navigation/footer';
import HeaderXXX from '../Navigation/header';

//grab current photo from url....then just need to link to it from pics on profile page
console.log("on the photo_detail.jsx");

class PhotoDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      photo: {
        caption: "",
        location: "",
        photo_url: ""
      },

    };

    //this.anyMethod = this.anyMethod.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.editPhoto = this.editPhoto.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    window.globalPhotoModal = this.globalPhotoModal.bind(this);
    this.destroyMe = this.destroyMe.bind(this);

  }

  ///now the photos in state has a new key...currentPhoto and the value is id of the photo we are rendering
  componentDidMount() {
      this.props.fetchAllPhotos();


      // this.props.fetchSinglePhoto(this.props.match.params.id);
      // this.props.fetchSinglePhoto(photoId);
    }

  globalPhotoModal () {
    console.log("inside globalPhotoModal");
    this.props.fetchSinglePhoto(this.props.currentPhotoId);
    this.setState({ modalOpen: !this.state.modalOpen });

  }
  //
  // componentWillReceiveProps(nextProps) {
  //   if (this.props.match.params.id !== nextProps.match.params.id) {
  //     this.props.fetchSinglePhoto(nextProps.match.params.id);
  //   }
  // }

  closeModal() {
    this.setState({ modalOpen: false });
    // this.setState({ photo: { modalOpen: false, caption: "", location: "", photo_url: ""} });
  }

  openModal() {
    this.setState({ modalOpen: true });
    // this.setState({ photo: { modalOpen: true, caption: "", location: "", photo_url: ""} });
  }

  destroyMe(event) {
    console.log("inside destroyMe on photoDetail page");
    console.log(this.props.currentPhoto);
    this.props.destroyPhoto(this.props.currentPhoto);
  }


  editPhoto(event) {
    console.log("inside updatePhoto on photoDetail page");
    const newPhoto = merge({}, this.state);
    newPhoto.photo[event.target.name] = event.target.value;
    this.setState(newPhoto);
  }

  handleSubmit(event) {
    console.log("inside handleSubmit on photoDetail page");

    event.preventDefault();

    let testPhoto = this.state.photo;
    console.log(testPhoto);
    console.log({ photo: testPhoto });

    let newPhoto = this.state.photo;
    this.props.updatePhoto({ photo: newPhoto });
      // .then(
      //   (()=> {
      //     console.log("inside handleSubmit callback on photoDetail upon success");
      //     this.closeModal();
      //     this.setState({ photo: { caption: "", location: "", photo_url: ""} });
      //   })
      // );

    this.closeModal();
    this.setState({ photo: { caption: "", location: "", photo_url: ""} });
    hashHistory.push(`/users/${this.props.currentUser.id}`);
  }


  //remember that errors and other objects might be null so render conditionally
  render() {

    console.log("rendering on photo.jsx");
    console.log(this.props);
    // console.log(this.props.match.params.id);


    // let allPhotos = this.props.photos;
    // let thisId = this.props.match.params.id;
    // let thisPhoto = allPhotos[thisId];
    // console.log(allPhotos[thisId]);
    //
    // let workingURL;
    //
    // if (this.props.photos[thisId]) {
    //   workingURL = thisPhoto.photoUrl;
    // } else {
    //   workingURL = "xx";
    // }

    // const paramId = this.props.match.params.photoId;
    // const pulledPhoto = this.props.photos[paramId];
    if (this.state.modalOpen && this.props.currentPhoto) {
      return (
        <div className="photo-modal-outer">
          <div className="photo-modal-inner">


            <main className="outer-main">
                <main className="inner-main">

                    <div className="sectionContainer">
                      <section className="photo-container">

                        <img
                            src={this.props.currentPhoto.photoUrl}
                            alt="photo"
                            className=""/>


                      </section>


                      <section className="detail-container">

                        <section className="box1">
                            <div className="optionalText">work in progress</div>
                            <div className="another-container">

                              <form onSubmit={this.handleSubmit} id="upload-form">

                                  <label>
                                      <input
                                        type="text"
                                        placeholder="caption (optional)"
                                        name="caption"
                                        value={this.props.currentPhoto.caption}
                                        onChange={this.editPhoto}
                                        className="upload-input"
                                      />
                                  </label>
                                  <br/>

                                  <label>
                                      <input
                                          type="text"
                                          placeholder="location (optional)"
                                          name="location"
                                          value={this.props.currentPhoto.location}
                                          onChange={this.editPhoto}
                                          className="upload-input"
                                      />
                                  </label>
                                  <br/>

                                    <label>
                                        <input
                                            type="text"
                                            placeholder="photo's url (required)"
                                            name="photo_url"
                                            value={this.props.currentPhoto.photo_url}
                                            onChange={this.editPhoto}
                                            className="upload-input"
                                        />
                                    </label>
                                  <br/>
                                  <br/>




                                  <button
                                    onClick={this.handleSubmit}
                                    type="submit"
                                    value="Submit"
                                    className="manual-submit">
                                    Submit Changes
                                  </button>

                              </form>

                            </div>

                        </section>



                        <section className="spacer">i'm a spacer</section>

                        <section className="deleteContainer">
                            <button
                              onClick={this.destroyMe}
                              className="deleteButton">
                              Delete Photo
                            </button>
                        </section>

                      </section>



                    </div>

                    <button
                      onClick={this.closeModal}
                      className="closeModalButton">
                      Close
                    </button>


                    </main>
                </main>

            </div>
        </div>
      );
    } else {
      return (<div></div>);
    }


  }


}

export default PhotoDetail;
// export default withRouter(PhotoDetail);
