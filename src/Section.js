import React from "react";
import "./App.css";
import Subsection from "./Subsection.js";

class Section extends React.Component {
  // Use of this component is optional,
  // but it will help you modularize the application and make the code more readable.

  render() {
    return <div><p>{this.props.data.instructor}</p>
    <p>{this.props.data.meeting}</p>
    <p>{this.props.data.time}</p>
    </div>
    
    ;
  }
}

export default Section;
