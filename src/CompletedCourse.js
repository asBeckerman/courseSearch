import React from "react";
import "./App.css";
import Section from "./Section";
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import Star from "./Star";




class Course extends React.Component {
  constructor(props) {
    super(props);
  }

        render() 
        { 
        const sections = this.props.data.sections;
            return<div> <p><b>({this.props.data.name}) | Credits:{this.props.data.credits} </b></p>
            <p> Subject:{this.props.data.subject}</p> <p>{this.props.data.description}
            
            </p>
            <Star numRated = {this.props.rated} updateRating={this.props.updateRating}></Star>
            </div>
         
        }
      }
        export default Course;
