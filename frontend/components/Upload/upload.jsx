import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';
import Dropzone from 'react-dropzone';
import request from 'superagent';

import theFooter from '../Navigation/footer';
import HeaderXXX from '../Navigation/header';

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
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updatePhoto = this.updatePhoto.bind(this);
  }

  componentDidMount() {
      this.props.fetchAllPhotos();
  }

  onImageDrop(files) {
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                          .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                          .field('file', file);

      upload.end((err, response) => {
        if (err) {
          console.log(`error resulting from cloudinary upload: ${err}`);
        }

        if (response.body.secure_url !== 'placeholder') {
          this.setState({ photo: { photo_url: response.body.secure_url}});
          console.log(this.state);
        }

      });
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

  render() {

    return (
      <div className="upload-page-container">

          <HeaderXXX userId={this.props.currentUser.id}/>


          <section className="upload-sub-container">
              <div className="sub-sub-container">
                  <div className="upload-form-container">

                      <section className="option1-box">

                          <div className="optionText">WIP: drag/drop or select file here</div>
                          <div className="options-form-container">

                              <form onSubmit={this.handleSubmit} id="upload-form-WIP">


                                  <div className="cloudinary-container">

                                      <Dropzone
                                          multiple={false}
                                          accept="image/*"
                                          onDrop={this.onImageDrop.bind(this)}>
                                          <p>Drop an image or click to select a file to upload.</p>
                                      </Dropzone>

                                      <div>
                                          {this.state.photo.photo_url === 'placeholder' ? null :
                                              (<div>
                                                  <img src={this.state.photo.photo_url} />
                                               </div>)}
                                      </div>

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
                                    Post it
                                  </button>
                              </form>

                          </div>


                      </section>



                  </div>
              </div>
          </section>


          <theFooter/>

      </div>
    );

  }


}

export default Upload;
