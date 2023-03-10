import React from "react";
import "./App.css";
import Course from "./Course";

class CourseArea extends React.Component {
  getCourses() {
    // 1. Declarative way of returning the courses, using .map().
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map for more details.
    const courses = this.props.data.map((course) => {
      return <Course key={course.name} data={course} compactMode={false} cart={this.props.cart} updateCart={this.props.updateCart}/>;
    });

    // 2. Imperative way of returning the courses, using for ... of iteration and .push().
    // To use this instead, uncomment the following code and comment the above code.
    // let courses = [];

    // for(const course of this.props.data) {
    //   courses.push (
    //     <Course key={course.name} data={course}/>
    //   )
    // }

    return courses;
  }

  render() {
    return <div  style={{ margin: "5px"}}>{this.getCourses()}</div>;
  }
}

export default CourseArea;
