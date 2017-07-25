import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

console.log("on the uploadButton.jsx");

class Dropzone extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   user: {
    //     name: "",
    //     username: "",
    //     password: ""
    //   },
    //   errors: {}
    // };

    //this.anyMethod = this.anyMethod.bind(this);
    // this.cropPhoto = this.cropPhoto.bind(this);
    this.upload = this.upload.bind(this);
  }


  componentDidMount() {
      // this.props.fetchAllPhotos();
    }

  // cropPhoto(photoUrl) {
  //   const cropText = "/upload/c_thumb,w_600/";
  //   // const cropText = "/upload/c_thumb,h_500,w_500/";
  //   const photoUrlArray = photoUrl.split("/upload/");
  //   const croppedUrl = photoUrlArray[0] + cropText + photoUrlArray[1];
  //
  //   return croppedUrl;
  // }

  upload(event) {
    console.log("inside upload fxn on uploadButton.jsx");
    event.preventDefault();

    //calling this method with 2 arguments: the options we configured and the success callback
    cloudinary.openUploadWidget(
        window.cloudinary_options,
        //the method returns the following 2 arguments:
        ((error, images) => {
            //if error argument is null, upload was successful
            if (error === null) {
              //post the newPhoto to backend; Uploaded photos are an array...
              //...if we only let user upload one, it will be the first element of the array;
              //url is the key for it's actual url on cloudinary
              // console.log("there were no errors during upload");
              // console.log(images[0].url);
              // console.log(typeof images[0].url);

              this.props.postPhoto(images[0].url);
            } else {
              //currently not doing anything if upload does not succeed
            }
        })
    ); //end of calling openUploadWidget

  } //end of upload function


  //remember that errors and other objects might be null so render conditionally
  render() {

    return (
      <div className="dropzone-container">on the uploadButton.jsx
          <section>


            <button
                className="uploadButton"
                onClick={this.upload}>
                uploadButton
            </button>


          </section>
      </div>
    );

  }


}

export default Dropzone;
// export default withRouter(Dropzone);
