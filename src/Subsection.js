import React from "react";
import "./App.css";

class Subsection extends React.Component {
  // Use of this component is optional,
  // but it will help you modularize the application and make the code more readable.

  render() {
    return <div><p>{this.props.data.instructor}</p>
    <p>{this.props.data.instructor}</p>
    <p>{this.props.data.location}</p>
    </div>;
  }
}

export default Subsection;
