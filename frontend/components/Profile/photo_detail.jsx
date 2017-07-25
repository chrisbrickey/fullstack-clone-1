import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';
import Modal from 'react-modal';
import {hashHistory} from 'react-router';

import FooterXXX from '../Navigation/footer';
import HeaderXXX from '../Navigation/header';

//grab current photo from url....then just need to link to it from pics on profile page
console.log("on the photo.jsx");

class PhotoDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: {
        caption: "",
        location: "",
        photo_url: ""
      },
    };

    //this.anyMethod = this.anyMethod.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updatePhoto = this.editPhoto.bind(this);
  }


  componentDidMount() {
      this.props.fetchAllPhotos();
      this.props.fetchSinglePhoto(this.props.match.params.photoId);
    }

    componentWillReceiveProps(nextProps) {
    if (this.props.match.params.photoId !== nextProps.match.params.photoId) {
      this.props.fetchSinglePhoto(nextProps.match.params.photoId);
    }
  }

    editPhoto(event) {
      console.log("inside updatePhoto on upload page");
      const newPhoto = merge({}, this.state);
      newPhoto.photo[event.target.name] = event.target.value;
      this.setState(newPhoto);
    }

    handleSubmit(event) {
      console.log("inside handleSubmit on photo page");

      let testPhoto = this.state.photo;
      console.log(testPhoto);
      console.log({ photo: testPhoto });

      event.preventDefault();

      let newPhoto = this.state.photo;
      this.props.updatePhoto({ photo: testPhoto })
        .then(
          (()=> {
            console.log("inside handleSubmit callback on photo page upon success");
            this.setState({ photo: { caption: "", location: "", photo_url: ""} });
          })
        );
    }


  //remember that errors and other objects might be null so render conditionally
  render() {

    console.log("rendering on photo.jsx");
    console.log(this.props);

    const paramId = this.props.match.params.photoId;
    const pulledPhoto = this.props.photos[paramId];

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
                        <div className="another-container">

                          <form onSubmit={this.handleSubmit} id="upload-form">

                              <label>
                                  <input
                                    type="text"
                                    placeholder="caption (optional)"
                                    name="caption"
                                    value={this.state.photo.caption}
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
                                      value={this.state.photo.location}
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
                                        value={this.state.photo.photo_url}
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




                          <button
                            onClick={this.props.destroyPhoto}
                            type="submit"
                            value="Submit"
                            className="manual-submit">
                            Delete Post
                          </button>










                        </div>

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

export default PhotoDetail;
// export default withRouter(PhotoDetail);
