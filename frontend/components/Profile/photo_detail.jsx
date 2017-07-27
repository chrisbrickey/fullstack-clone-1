import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';
import Modal from 'react-modal';
import {hashHistory} from 'react-router';

class PhotoDetail extends React.Component {
  constructor(props) {
    super(props);

    let theId;
    if (this.props.currentPhoto) {
      theId = this.props.currentPhoto.id;
    } else {
      theId = null;
    }

    this.state = {
      modalOpen: false,
      photo: {
        caption: "",
        location: "",
        id: theId,
      }
    };

    this.closeModal = this.closeModal.bind(this);
    this.editPhoto = this.editPhoto.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    window.globalPhotoModal = this.globalPhotoModal.bind(this);
    this.destroyMe = this.destroyMe.bind(this);
  }

  componentDidMount() {
      this.props.fetchAllPhotos();
    }

  componentWillReceiveProps(nextProps) {

    if (nextProps.currentPhoto && this.state.photo.id !== nextProps.currentPhoto.id){
      const newState = merge({}, this.state);
      newState.photo.id = nextProps.currentPhoto.id;
      newState.photo.caption = nextProps.currentPhoto.caption;
      newState.photo.location = nextProps.currentPhoto.location;
      this.setState(newState);
    }

  }

  componentDidUpdate( _ , prevState) {
    if (this.props.currentPhoto && Object.keys(this.props.currentPhoto) && !prevState.modalOpen && this.state.modalOpen) {
      const newState = merge({}, this.state);
      newState.photo.caption = this.props.currentPhoto.caption;
      this.setState(newState);
    }
  }

  globalPhotoModal () {
    console.log("inside globalPhotoModal");
    this.props.fetchSinglePhoto(this.props.currentPhotoId);
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  destroyMe(event) {
    console.log("inside destroyMe on photoDetail page");
    this.props.destroyPhoto(this.props.currentPhoto);
  }

  editPhoto(event) {
    console.log("inside editPhoto on photoDetail page");

    const newPhoto = merge({}, this.state);

    // console.log("field name", event.target.name);
    // console.log("current value at field name", newPhoto.photo[event.target.name]);
    // console.log("new value at field name", event.target.value);

    newPhoto.photo[event.target.name] = event.target.value;
    this.setState(newPhoto);
  }

  handleSubmit(event) {
    console.log("inside handleSubmit on photoDetail page");

    event.preventDefault();
    this.closeModal();

    this.props.updatePhoto(this.state.photo)
      .then(
        ( () => {
          console.log("inside callback for updatePhoto");
          this.setState({ photo: { caption: "", location: ""} });
        })
      );

  }


  render() {

    if (this.state.modalOpen && this.props.currentPhoto) {
      return (

          <main className="photo-modal-outer">
              <main className="photo-modal-inner">

                  <button>
                      <img
                          src="https://res.cloudinary.com/dckkkjkuz/image/upload/v1501126203/forbidden-mark_l01ir1.png"
                          alt="close mark"
                          className="closeMark"
                          onClick={this.closeModal}/>
                  </button>

                  <div className="duo-container">


                      <div className="picture-box">
                          <img
                              src={this.props.currentPhoto.photoUrl}
                              alt="photo"
                              className="actualPhoto"/>
                      </div>


                      <div className="detail-container">



                          <div className="feedItem-container2">
                              <div className="info-top2">

                                  <div className="thumbnailPic-container2">
                                      <img
                                          src={this.props.currentPhoto.profileImgUrl}
                                          alt="photo"
                                      />
                                  </div>

                                  <div id="info-username2">{this.props.currentPhoto.username}</div>
                                  </div>


                                  <form onSubmit={this.handleSubmit} className="edit-form">
                                      <label>
                                          <input
                                            type="text"
                                            placeholder="add caption"
                                            name="caption"
                                            value={this.state.photo.caption}
                                            onChange={this.editPhoto}
                                            className="edit-input"
                                          />
                                      </label>

                                      <label>
                                          <input
                                              type="text"
                                              placeholder="add location"
                                              name="location"
                                              value={this.state.photo.location}
                                              onChange={this.editPhoto}
                                              className="edit-input"
                                          />
                                      </label>

                                      <button
                                        onClick={this.handleSubmit}
                                        type="submit"
                                        value="Submit"
                                        className="edit-submit">
                                        Submit Changes
                                      </button>

                                      <button
                                          onClick={this.destroyMe}
                                          className="deleteButton2">
                                          Delete Photo
                                      </button>
                                  </form>

                              </div>

                              <div className="info-middle"></div>


                              <div className="info-bottom2">

                                  <div className="item-at-bottom">
                                    <div id="line"></div>
                                  </div>

                                  <div className="item-at-bottom" id="info-uploadDate2">
                                      {this.props.currentPhoto.uploadDate} ago
                                  </div>

                                  <div className="item-at-bottom">
                                    <div id="line"></div>
                                  </div>

                                  <div className="item-at-bottom" id="info-addComment2">
                                      Add a comment... (placeholder)
                                  </div>


                              </div>






                      </div>


                </div>
          </main>
      </main>


      );
    } else {
      return (<div></div>);
    }


  }


}

export default PhotoDetail;
