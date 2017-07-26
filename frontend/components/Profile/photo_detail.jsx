import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';
import Modal from 'react-modal';
import {hashHistory} from 'react-router';

import FooterXXX from '../Navigation/footer';
import HeaderXXX from '../Navigation/header';


class PhotoDetail extends React.Component {
  constructor(props) {
    super(props);

    let myId;
    if (this.props.currentPhoto) {
      myId = this.props.currentPhoto.id;
    } else {
      myId = null;
    }

    this.state = {
      modalOpen: false,
      photo: {
        caption: "",
        location: "",
        photo_url: "",
        id: myId,
      }
    };

    // console.log("I AM HERE");
    this.closeModal = this.closeModal.bind(this);
    this.editPhoto = this.editPhoto.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    window.globalPhotoModal = this.globalPhotoModal.bind(this);
    this.destroyMe = this.destroyMe.bind(this);
  }

  componentDidMount() {
      this.props.fetchAllPhotos();
    }

  globalPhotoModal () {
    console.log("inside globalPhotoModal");
    this.props.fetchSinglePhoto(this.props.currentPhotoId);
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  closeModal() {
    this.setState({ modalOpen: false });
    // this.setState({ photo: { modalOpen: false, caption: "", location: "", photo_url: "", id: this.props.currentPhotoId} });
  }


  destroyMe(event) {
    console.log("inside destroyMe on photoDetail page");
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
    // console.log(this.state.photo);
    this.closeModal();

    event.preventDefault();
    this.props.updatePhoto(this.state.photo)
      .then(
        ( () => {
          console.log("inside submit callback for updating photo upon success");
          this.setState({ photo: { caption: "", location: "", photo_url: "", id: ""} });
        })
      );

  }


  render() {

    // console.log("rendering on photo.jsx");
    // console.log(this.props);

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


                                    <input
                                        type="text"
                                        name={this.props.currentPhoto.id}
                                        value={this.props.currentPhoto.id}
                                        onChange={this.editPhoto}
                                    />


                                  <label>
                                      <input
                                        type="text"
                                        placeholder="caption"
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
                                          placeholder="location"
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
                                            placeholder="photo's url"
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