import React from "react";
import "./App.css";
import Course from "./Course";
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';

class Star extends React.Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
  this.rating1 = this.rating1.bind(this);
  this.rating2 = this.rating2.bind(this);
  this.rating3 = this.rating3.bind(this);
  this.rating4 = this.rating4.bind(this);
  this.rating5 = this.rating5.bind(this);
    this.state = {rating: 0, stars:[<button onClick={this.rating1} ><FaRegStar /></button>
    ,<button onClick={this.rating2} ><FaRegStar /></button>
    ,<button onClick={this.rating3} ><FaRegStar /></button>,
    <button onClick={this.rating4} ><FaRegStar /></button>,
    <button onClick={this.rating5} ><FaRegStar /></button>]}


    
  }
  rating1()
  {
    if(this.state.rating == 0)
    {
      console.log(this.props.upateRating);
       this.props.updateRating(this.props.numRated+1);
       console.log('numRated:');
        console.log(this.props.numRated.length);
        console.log(this.props.numRated);
    }
    this.setState({rating : 1});
    this.setState({stars:[<button onClick={this.rating1} ><FaStar /></button>
        ,<button onClick={this.rating2} ><FaRegStar /></button>
        ,<button onClick={this.rating3} ><FaRegStar /></button>,
        <button onClick={this.rating4} ><FaRegStar /></button>,
        <button onClick={this.rating5} ><FaRegStar /></button>]})
    
  }
  rating2()
  {
    if(this.state.rating == 0)
    {
      console.log(this.props.upateRating);
       this.props.updateRating(this.props.numRated+1);
        console.log('numRated:');
        console.log(this.props.numRated.length);
        console.log(this.props.numRated);
    }
    this.setState({rating : 2});
    this.setState({stars:[<button onClick={this.rating1} ><FaStar /></button>
        ,<button onClick={this.rating2} ><FaStar /></button>
        ,<button onClick={this.rating3} ><FaRegStar /></button>,
        <button onClick={this.rating4} ><FaRegStar /></button>,
        <button onClick={this.rating5} ><FaRegStar /></button>]});
   
  }
  rating3()
  {
    if(this.state.rating == 0)
    {
        
      console.log(this.props.upateRating);
       this.props.updateRating(this.props.numRated+1);
        console.log('numRated:');
        console.log(this.props.numRated.length);
        console.log(this.props.numRated);
    }
    this.setState({rating : 3});
    this.setState({stars:[<button onClick={this.rating1} ><FaStar /></button>
        ,<button onClick={this.rating2} ><FaStar /></button>
        ,<button onClick={this.rating3} ><FaStar /></button>,
        <button onClick={this.rating4} ><FaRegStar /></button>,
        <button onClick={this.rating5} ><FaRegStar /></button>]})

  }
  rating4()
  {
    if(this.state.rating == 0)
    {
        
      console.log(this.props.upateRating);
       this.props.updateRating(this.props.numRated+1);
        console.log('numRated:');
        console.log(this.props.numRated.length);
        console.log(this.props.numRated);
    }
    this.setState({rating : 4});
    this.setState({stars:[<button onClick={this.rating1} ><FaStar /></button>
        ,<button onClick={this.rating2} ><FaStar /></button>
        ,<button onClick={this.rating3} ><FaStar /></button>,
        <button onClick={this.rating4} ><FaStar /></button>,
        <button onClick={this.rating5} ><FaRegStar /></button>]});
    
        
  }
  rating5()
  {
    if(this.state.rating == 0)
    {
        
      console.log(this.props.upateRating);
       this.props.updateRating(this.props.numRated+1);
        console.log('numRated:');
        console.log(this.props.numRated.length);
        console.log(this.props.numRated);
    }
    this.setState({rating : 5});
    this.setState({stars:[<button onClick={this.rating1} ><FaStar /></button>
        ,<button onClick={this.rating2} ><FaStar /></button>
        ,<button onClick={this.rating3} ><FaStar /></button>,
        <button onClick={this.rating4} ><FaStar /></button>,
        <button onClick={this.rating5} ><FaStar /></button>]});
    
  }

  render() {
    //console.log('In Cartbutton');
    //let stars = [5];
    //console.log(this.state.rating);
    
        
    //console.log('data:');
    return  <div><p>Rating: {this.state.rating} stars</p>
    <p>{this.state.stars}</p></div>  
    
    
  }
};
export default Star;
