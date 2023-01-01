import React from "react";
import "./App.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Sidebar from "./Sidebar";
import CourseArea from "./CourseArea";
import CompletedCourse from "./CompletedCourse";
import CompletedCourseArea from "./CompletedCourseArea";
import Cart from "./Cart";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from './logo.png';

/**
 * The main application component.
 *
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCourses: [], // All the courses fetched from the server.
      filteredCourses: [], // The courses to be displayed in the CourseArea under Search tab.
      subjects: [], // The list of unique subjects fetched from the server.
      completedCourses: [], // The list of *course numbers* of completed courses.
      cartList: [],
      numRated: 0,
      title : "Completed Courses (6 need rating)",
      u: false,
      otherButton: true
    };
    this.updateCart = this.updateCart.bind(this);
    this.updateRating = this.updateRating.bind(this);
  }

  /**
   * When the component mounts, fetch the classes data from the server.
   * Save the data in the state.
   *
   */
  componentDidMount() {
    // Fetch all the courses from the server
    fetch("https://cs571.cs.wisc.edu/api/react/classes")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          allCourses: data,
          filteredCourses: data,
          subjects: this.getSubjects(data),
        });
      })
      .catch((err) => console.log(err));

    // Fetch the completed courses from the server.
    fetch("https://cs571.cs.wisc.edu/api/react/students/5022025924/classes/completed")
      .then((res) => res.json())
      .then((data) => {
        // Notice that completed courses are returned
        // as a list of course numbers, not course objects.
        this.setState({
          completedCourses: data.data,
        });
      })
      .catch((err) => console.log(err));
  }

  getSubjects(data) {
    // Get all the subjects from the JSON of fetched courses.
    // Return a list of unique subjects.

    let subjects = [];
    subjects.push("All");

    for (const course of Object.values(data)) {
      if (subjects.indexOf(course.subject) === -1)
        subjects.push(course.subject);
    }

    return subjects;
  }

  setCourses(courses) {
    // This is a callback function for the filteredCourses state.
    // Set the courses to be displayed in the CourseArea under Search tab.
    // Refer to the Sidebar component (Sidebar.js) to understand when this is used.

    this.setState({ filteredCourses: courses });
  }
  setTitle()
  {
    //console.log("Completed Courses"+this.state.completedCourses.length-this.state.numRated.length+"Need Rating");
    this.setState({title:"Completed Courses"+this.state.completedCourses.length+"Need Rating"});
    
  }

  updateCart(cart)
  {
    this.setState({ cartList: cart });
  }

  updateRating(num)
  {
    console.log("len:"+this.state.completedCourses.length);
    var t = "Completed Courses ("+((this.state.completedCourses.length)-num)+" need rating)";
    console.log("Num: "+num);
    this.setState({numRated:num});
    this.setState({title:t});
  }

//   setSearchButton(s)
//   {
// this.setState({otherButton})
//   }

  render() {
    return (
      <Container >
        
         
         <Row>
           <Col>
           <div class="title"> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>Search</div>
           <div class="borderLarge"><Sidebar class="border"
              setCourses={(courses) => this.setCourses(courses)}
              courses={this.state.allCourses}
              subjects={this.state.subjects}
            /></div></Col>
           <Col >
              <p class="maintitle "><img src={logo}></img>Course Catalog</p>
              <div class="borderLarge">
              <CourseArea class=" border"
                data={this.state.filteredCourses}
                allData={this.state.allCourses}
                compactMode={false}
                cart={this.state.cartList}
                updateCart={this.updateCart} // Optionally, you could use this prop in the future for Cart and Completed Courses?
              /></div>
            </Col>
           <Col>
           <div class="title "> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg> Cart</div>
           <div class="borderSmall">
           
            <Cart class=" border"
                data={this.state.filteredCourses}
                allData={this.state.allCourses}
                compactMode={true}
                cart={this.state.cartList}
                updateCart={this.updateCart}
                // Optionally, you could use this prop in the future for Cart and Completed Courses?
              />
              </div>
              <div class="title "><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
</svg>Completed Courses</div>
              <div class="borderSmall">
              
            {<CompletedCourseArea class=" border"
            
                courseNames={this.state.completedCourses}
                data={this.state.filteredCourses}
                compactMode={true}
                rated = {this.state.numRated}
                title = {this.state.title} 
                updateRating = {this.updateRating}
                // Optionally, you could use this prop in the future for Cart and Completed Courses?
              /> }
              {/* Put your component for the completed courses feature here. */}
              {/* Or, can you think of a way to reuse the CourseArea component? */}
            </div>
              {/* Put your component for the cart feature here. */}
              {/* Or, can you think of a way to reuse the CourseArea component?  */}
            
  
          {/* Completed Courses Tab */}
          {this.setTitle}
          
          
            
           </Col>
           </Row>
           
          {/* Search Tab */}
            
            
         

          {/* Cart Tab */}
           
          

        
      </Container>
    );
  }
}

export default App;
