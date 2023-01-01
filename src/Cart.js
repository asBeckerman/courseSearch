import React from "react";
import "./App.css";
import Course from "./Course";

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cartUpdated: false};
    }
  getCourses() {
    // 1. Declarative way of returning the courses, using .map().
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map for more details.
    // const courses = this.props.data.map((course) => {
    //   return <Course key={course.name} data={course} compactMode={true}/>;
    // });

    let courses = [];

    console.log('Courses in Cart:');
    console.log(this.props.cart);
        for(let i=0;i<this.props.cart.length;i++)
        {
            courses.push (
            
                <Course key={this.props.cart[i].name} data={this.props.cart[i]} compactMode={true} cart={this.props.cart} updateCart={this.props.updateCart}/>
              );
            }
    console.log('Cart:');
      console.log(courses);   
    return courses;
  }

  // cartButtonCallback = (dataFromButton) => {
  //   console.log("rerender");
  //   this.setState({cartUpdated:dataFromButton})
  // };


  render() {
    //console.log('In Cart');
    //console.log(this.props.cart);
    return <div style={{ margin: "5px" }}>{this.getCourses()}</div>;
  }
}

export default Cart;