import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { addImage,getImage } from "../actions/actions";
import { connect } from 'react-redux';
import actions from '../redux/actions/image';
import { FilePond, registerPlugin } from 'react-filepond';
import axios from 'axios';

class ImageAdd extends Component {
    
    constructor() {
        super();
        this.state = {
            imageid: "",
            image: "",
           
        };
        
        // this.handleupload = this.handleupload.bind(this);
    }
    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
          let img = event.target.files[0];
          this.setState({
            image: URL.createObjectURL(img)
          });
        }
      };

    componentDidMount() {
        this.props.dispatch(actions.getImage());
    }
   
    addOrderHandler = (onFileSelect) =>
    {
       
        const {imageid} = this.state;
        const {image} = this.state;
        this.setState({image: image});
        console.log(image);

       let data = {
        imageid: imageid,
        image: image, 
       }
       console.log(data)
       this.props.dispatch(actions.addImage(data));
       if(this.props.createMessage){
        alert("Healthcare product Added");
        this.redirectToHome()
    }
    else {
        alert("Couldnt Healthcare product")
    }
    };
    redirectToHome = () => {
        const { history } = this.props;
        if(history) history.push('/Home');
      }

    //   const FileUploader = ({onFileSelect}) => {
    //     const fileInput = useRef(null)
    
    //     const handleFileInput = (e) => {
    //         // handle validations
    //         onFileSelect(e.target.files[0])
    //     }

    handleimageChange= (event) => {
       // event.preventDefault();
       let image = event.target.files[0];
        this.setState({ image: image });
        console.log(image);
        //console.log(event.target.files[0]);
        
    };
    // handleupload(event){
    //     let image = this.state.image;
    //     let formdata = new FormData();
    //     formdata.append('image',image)
    //     formdata.append('name',"jawad")
    // axios({
    //     url: `http://localhost:3001/users/addImage`,
    //     method: 'POST',
    //     headers:{
    //         authorization:'your token'
    //     },
    //     data: formdata
    // }).then((res)=>{

    // })
    // }

    handlehealthcarequantityChange = (event) => {
        event.preventDefault();
        this.setState({ healthcarequantity: event.target.value });
    };
    handleuseridChange = (event) => {
        event.preventDefault();
        this.setState({ userid: event.target.value });
    };


  
    

    render() {
        
        return (
            <div className="row mt-5">
                <div className="col-md-6-m-auto">
                    <div className="card card-body">
                    <li className="navbar-brand">
                     <a className="navbar-brand" href="/Home">
                      <img src="pharmacylogo.png" width="100%" height="100%" className="floatright" alt=""></img>
                    </a>
                     </li>
                        <h1 className="text-center mb-3">
                            <i className="fas fa-sign-in-alt">
                            </i>
                Add Health care product
                </h1>
                         
                         <div className="file-uploader">
                            <label>Health Care Product Name</label>
                            <input
                                type="file"
                                id = "image"
                                className="form-control"
                                onChange = {this.handleimageChange}
                           />
                        </div>


                 
                        <div>
                         <img src="PharmacyDesign.jpg" width = "100% height = 100%"></img>
                          </div>
                        <button
                            id="1"
                            name="btn"
                            type="submit"
                            onClick= {this.addOrderHandler}
                            className = "btn btn-dark btn-block"
                        >
                            Add New Health Care Product
                            
                        </button>

                        

                 </div>
                 </div >
                 </div > 
                 
    );
    }

}

const mapStateToProps = state =>({
    image: state.imageReducer.image,
    createMessage: state.imageReducer.createMessage,
  })


export default connect(mapStateToProps)(ImageAdd);

