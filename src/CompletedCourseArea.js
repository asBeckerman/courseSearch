import React from "react";
import "./App.css";
import CompletedCourse from "./CompletedCourse";

class CompletedCourseArea extends React.Component {
  constructor(props) {
    super(props);
  }
  getCourses() {
    // // 1. Declarative way of returning the courses, using .map().
    // // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map for more details.
    //const courses = this.props.data.map((course) => {
    //   for(var i=0;i<this.props.data.length;i++)
    //   {
    //     if(course.name === this.props.courseNames[i])
    //     {

    //     }
    //   }
    //   return <CompletedCourse key={course.name} data={course} courseNames ={this.props.courseNames} compactMode={false}/>;
    // });

    // 2. Imperative way of returning the courses, using for ... of iteration and .push().
    // To use this instead, uncomment the following code and comment the above code.
    let courses = [];

    for(const course of this.props.data) {
      for(let i=0;i<this.props.courseNames.length;i++)
      {
        //console.log('Course from completed:' + this.props.courseNames[i]);
        //console.log(course);
        if(course.number===this.props.courseNames[i])
        {
          courses.push (
            <CompletedCourse key={course.name} data={course} rated = {this.props.rated} updateRating = {this.props.updateRating}/>
          );
        }
      }
      
    }
    return courses;
  }


  render() {
    return <div style={{ margin: "5px" }}>{this.getCourses()}</div>;
  }
}

export default CompletedCourseArea;
