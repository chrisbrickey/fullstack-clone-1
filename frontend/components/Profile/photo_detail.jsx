import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';
import Modal from 'react-modal';
import {hashHistory} from 'react-router';

class PhotoDetail extends React.Component {
  constructor(props) {
    super(props);

    let myId;
    if (this.props.currentPhoto) {
      myId = this.props.currentPhoto.id;
    } else {
      myId = null;
    }

    console.log("myID", myId);

    this.state = {
      modalOpen: false,
      photo: {
        caption: "",
        location: "",
        id: myId,
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
    // this.setState({ photo: { modalOpen: false, caption: "", location: "", photo_url: "", id: this.props.currentPhotoId} });
  }


  destroyMe(event) {
    console.log("inside destroyMe on photoDetail page");
    this.props.destroyPhoto(this.props.currentPhoto);
  }

  editPhoto(event) {
    console.log("INSIDE LIVE EDITPHOTO FXN on photoDetail page");

    const newPhoto = merge({}, this.state);

    console.log("field name", event.target.name);
    console.log("current value at field name", newPhoto.photo[event.target.name]);
    console.log("new value at field name", event.target.value);

    newPhoto.photo[event.target.name] = event.target.value;
    this.setState(newPhoto);
  }

  handleSubmit(event) {
    console.log("inside handleSubmit on photoDetail page");

    event.preventDefault();
    this.closeModal();

    console.log("THIS.STATE.PHOTO", this.state.photo);

    this.props.updatePhoto(this.state.photo)
      .then(
        ( () => {
          console.log("inside submit callback for updating photo upon success");
          this.setState({ photo: { caption: "", location: ""} });
        })
      );

  }


  render() {

    if (this.state.modalOpen && this.props.currentPhoto) {
      return (

          <div className="photo-modal-outer">
              <div className="photo-modal-inner">

                  <form onSubmit={this.handleSubmit} className="edit-form">

                    <label>
                        <input
                          type="text"
                          placeholder="caption xxx"
                          name="caption"
                          value={this.state.photo.caption}
                          onChange={this.editPhoto}
                          className="edit-input"
                        />
                    </label>
                    <br/>

                    <label>
                        <input
                            type="text"
                            placeholder="location xxx"
                            name="location"
                            value={this.state.photo.location}
                            onChange={this.editPhoto}
                            className="edit-input"
                        />
                    </label>
                    <br/>


                    <button
                      onClick={this.handleSubmit}
                      type="submit"
                      value="Submit"
                      className="edit-submit">
                      Submit Changes
                    </button>

                </form>


                <div className="picture-box">
                    <img
                        src={this.props.currentPhoto.photoUrl}
                        alt="photo"
                        className="actualPhoto"/>

                    <button
                        onClick={this.destroyMe}
                        className="deleteButton">
                        Delete Photo
                    </button>
                </div>


                <button
                    onClick={this.closeModal}
                    className="closeModalButton">
                    Close
                </button>


          </div>
      </div>


      );
    } else {
      return (<div></div>);
    }


  }


}

export default PhotoDetail;
