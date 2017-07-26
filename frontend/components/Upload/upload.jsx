import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';
import Dropzone from 'react-dropzone';
import request from 'superagent';

import FooterXXX from '../Navigation/footer';
import HeaderXXX from '../Navigation/header';
import CloudWidget from './cloudwidget';

const CLOUDINARY_UPLOAD_PRESET = 'n440adct';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dckkkjkuz/image/upload';


console.log("on the upload.jsx");

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: {
        caption: "",
        location: "",
        photo_url: "placeholder"
      },
      // uploadedFileCloudinaryUrl: "filler"
    };

    //this.anyMethod = this.anyMethod.bind(this);
    // this.cropPhoto = this.cropPhoto.bind(this);
    this.postPhoto = this.postPhoto.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updatePhoto = this.updatePhoto.bind(this);
    // this.onImageDrop = this.onImageDrop.bind(this);
    // this.handleImageUpload = this.handleImageUpload.bind(this);
  }


  componentDidMount() {
      this.props.fetchAllPhotos();
    }

  onImageDrop(files) {
    console.log("inside ImageDrop");
    console.log(files);
    this.handleImageUpload(files[0]);

  }


  handleImageUpload(file) {
    console.log("inside handleImageUpload");
    console.log(file);

    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                          .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                          .field('file', file);

      upload.end((err, response) => {
        if (err) {
          console.log(`error resulting from cloudinary upload: ${err}`);
        }

        console.log("not throwing errors");

        if (response.body.secure_url !== 'placeholder') {
          this.setState({ photo: { photo_url: response.body.secure_url}});
          console.log(this.state);
        }

      });
  }

  // cropPhoto(photoUrl) {
  //   const cropText = "/upload/c_thumb,w_600/";
  //   // const cropText = "/upload/c_thumb,h_500,w_500/";
  //   const photoUrlArray = photoUrl.split("/upload/");
  //   const croppedUrl = photoUrlArray[0] + cropText + photoUrlArray[1];
  //
  //   return croppedUrl;
  // }

  //for upload via cloudinary
  postPhoto(photoUrl) {
    console.log("inside postPhoto on upload.jsx");
    let newPhoto = {photo_url: photoUrl};
    console.log(newPhoto);
    this.props.createPhoto({photo: newPhoto});
  }


  updatePhoto(event) {
    console.log("inside updatePhoto on upload page");
    const newPhoto = merge({}, this.state);
    newPhoto.photo[event.target.name] = event.target.value;
    this.setState(newPhoto);
  }

  handleSubmit(event) {
    console.log("inside handleSubmit on upload page");

    let testPhoto = this.state.photo;
    console.log(testPhoto);
    console.log({ photo: testPhoto });

    event.preventDefault();

    let newPhoto = this.state.photo;
    this.props.createPhoto({ photo: testPhoto })
      .then(
        (()=> {
          console.log("inside handleSubmit callback upon success");
          this.setState({ photo: { caption: "", location: "", photo_url: ""} });
        })
      );
  }

  //remember that errors and other objects might be null so render conditionally
  render() {

    console.log("rendering on upload.jsx");
    console.log(this.props);

    return (
      <div className="upload-page-container">

          <HeaderXXX userId={this.props.currentUser.id}/>


          <section className="upload-sub-container">
              <div className="sub-sub-container">
                  <div className="upload-form-container">



                    <section className="option1-box">

                        <div className="optionText">Option Dropzone: working on this</div>

                        <div className="cloudinary-container">

                            <Dropzone
                                multiple={false}
                                accept="image/*"
                                onDrop={this.onImageDrop.bind(this)}>
                                <p>Drop an image or click to select a file to upload.</p>
                            </Dropzone>

                        </div>

                    </section>





                      <section className="option1-box">

                          <div className="optionText">Option 1: select file here</div>

                          <div className="cloudinary-container">
                            <CloudWidget postPhoto={this.postPhoto}/>
                          </div>

                      </section>



                      <section className="option2-box">

                          <div className="optionText">Option 2: enter information manually</div>

                          <div className="options-form-container">
                              <form onSubmit={this.handleSubmit} id="upload-form">

                                  <label>
                                      <input
                                        type="text"
                                        placeholder="caption (optional)"
                                        name="caption"
                                        value={this.state.photo.caption}
                                        onChange={this.updatePhoto}
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
                                          onChange={this.updatePhoto}
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
                                            onChange={this.updatePhoto}
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
                                    Submit
                                  </button>

                              </form>

                          </div>


                      </section>



                      <section className="option1-box">

                          <div className="optionText">WIP: drag/drop or select file here</div>
                          <div className="options-form-container">

                              <form onSubmit={this.handleSubmit} id="upload-form-WIP">


                                  <div className="cloudinary-container">
                                    <CloudWidget postPhoto={this.postPhoto}/>
                                  </div>


                                  <label>
                                      <input
                                        type="text"
                                        placeholder="caption (optional)"
                                        name="caption"
                                        value={this.state.photo.caption}
                                        onChange={this.updatePhoto}
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
                                          onChange={this.updatePhoto}
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
                                    Submit
                                  </button>
                              </form>

                          </div>


                      </section>



                  </div>
              </div>
          </section>


          <FooterXXX/>

      </div>
    );

  }


}

export default Upload;
