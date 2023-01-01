import React from "react";
import "./App.css";
import CartButton from "./CartButton.js"
import Accordion from 'react-bootstrap/Accordion'

class Course extends React.Component {
 
getSections()
{
 
  var times;
  var timeA = [];
  var sectA = [];
 let sect = this.props.data.sections;
 
 //console.log(sect);
 //console.log(sect.length);
 //console.log("numb sections:" +sect.length);
  for(let i=0;i<sect.length; i++)
  {
   
    sectA.push(<li>
    {sect[i].number}
  </li>);
 
    times=Object.keys(sect[i].time);
    for(let k=0;k<times.length;k++)
    {
      
      timeA.push(<li>{times[k] +":"+sect[i].time[times[k]]}</li>);
    } 
    sectA.push(<ul><li>{'Instructor:' + sect[i].instructor}</li><li>{'Location:' + sect[i].location}</li><ul>{timeA}</ul></ul>)
    timeA = [];
    if(sect[i].subsections.length > 0)
    {sectA.push(<b>Subsections</b>)}
        for(let j=0;j<sect[i].subsections.length;j++)
        {
         
        times=Object.keys(sect[i].subsections[j].time);
        for(let k=0;k<times.length;k++)
        {
       
        timeA.push(<li>{times[k] + ':' + sect[i].subsections[j].time[times[k]]}</li>);
        }

        sectA.push(<ul>
          <li>{sect[i].subsections[j].number}</li>
          <ul>
          <li>{sect[i].subsections[j].location}</li>
          <li>Meeting Times</li>
          <ul>{timeA}</ul></ul>
        </ul>)
        timeA = [];
       

        }
        }
        return<ul>
          {sectA}
        </ul>
      
        }
       
        getkeywords()
        {
        let val = "";
        for(let i=0;i<this.props.data.keywords.length;i++)
        { 

        if(i==this.props.data.keywords.length-1)
        {val += this.props.data.keywords[i]}
        else
        {val += this.props.data.keywords[i] + ","};
        }
        
        return <p>Keywords:{val}</p>
      }

      prereqs()
      {
        var result = "";
        //console.log(this.props.data.requisites);
        //console.log(this.props.data.requisites[0]);
        if(this.props.data.requisites.length == 0)
          {
            return "None";
          }
        for(let i =0;i<this.props.data.requisites.length;i++)
        {
          
          for(let j=0;j<this.props.data.requisites[i].length;j++)
          {
        if(j==this.props.data.requisites[i].length-1)
        {
          
          result += this.props.data.requisites[i][j]
        }
        else
        {
          result += this.props.data.requisites[i][j] + " OR "
      }
    }
    if(i<this.props.data.requisites.length-1)
    {
      result+=" AND ";
    }
          }
        return result;
      }

      inCart()
      {
        console.log('in cart called');
        for(let i=0;i<this.props.cart.length;i++)
        {
          if(this.props.cart[i].name === this.props.data.name)
          {
            console.log('course was in cart:'+this.props.cart[i].name);
            return true;
          }
        }
        return false;
      }
        render() 
        { 
          //console.log("in Course");
          //console.log(this.props.update);
          //console.log('In Course');
          //console.log(this.props.cart);
          //console.log(this.props.data);
        const sections = this.props.data.sections;
        //console.log(this.props.compactMode);
          if(this.props.compactMode)
          {
           
            return<Accordion >
            <Accordion.Item eventKey="0">
              <Accordion.Header><b class="courseName">({this.props.data.number}) {this.props.data.name} | Credits:{this.props.data.credits} </b></Accordion.Header>
              <Accordion.Body>
              <p ><CartButton cart={this.props.cart} data={this.props.data} notInCart={true} updateCart={this.props.updateCart}></CartButton></p>
                      <p> Subject:{this.props.data.subject}</p> <p>{this.props.data.description}</p>
              </Accordion.Body>
              </Accordion.Item>
          </Accordion>;
          }
          else{
            //console.log(this.state.update);
        return <Accordion >
            <Accordion.Item eventKey="0">
              <Accordion.Header><b class="courseName">({this.props.data.number}) {this.props.data.name} | Credits:{this.props.data.credits} </b></Accordion.Header>
              <Accordion.Body>
              <p><CartButton cart={this.props.cart} data={this.props.data} notInCart={!(this.inCart)} updateCart={this.props.updateCart}></CartButton></p>
          <p> Subject:{this.props.data.subject}</p> <p>{this.props.data.description}</p> <p>Prerequisites:{this.prereqs()}</p>
          <p>{this.getkeywords()}</p>
          <p> Sections: {this.getSections()}</p>
              </Accordion.Body>
              </Accordion.Item>
          </Accordion>;
         }
        }
      }
        export default Course;
