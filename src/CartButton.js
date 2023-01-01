import React from "react";
import "./App.css";
import Course from "./Course";

class CartButton extends React.Component {
  constructor(props) {
    super(props);
    if(this.props.notInCart)
    {
      this.state = {notInCart: false};
    }
    else
    {
      this.state = {notInCart: true};
    }
    

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick()
  {
    console.log("inCart: "+this.state.notInCart);
    
    console.log('In Cartbutton');
    var removeIndex = 0;
    //console.log(this.props.cart);
    console.log('data:');
    console.log(this.props.data);
    console.log('data name:');
    console.log(this.props.data['name']);
    console.log(' cart before update');
    console.log(this.props.cart);
    console.log(this.props.cart.indexOf(this.props.data));
    console.log(this.props.update);
    this.setState(prevState => ({
      notInCart: !prevState.notInCart
      
    }));
    console.log("inCart:2 "+this.state.notInCart);

    if(!this.state.notInCart)
    {
      console.log('remove');
      for(let i=0;i<this.props.cart.length;i++)
      {
        console.log(this.props.data['name']);
        console.log(this.props.cart[i]);
        console.log(this.props.cart[i].name);
        if(this.props.data['name'] === this.props.cart[i].name)
        {
          removeIndex = i;
        }
      }
    }
    console.log('remove index:'+removeIndex);
    
    //= this.props.cart.slice(0,removeIndex).concat(this.props.cart.slice(removeIndex,this.props.cart.length))
    //this.props.update('Cart');
    this.state.notInCart ? this.props.cart.push(this.props.data) :
     this.props.cart.splice(removeIndex,1) ;
    //this.props.update(this.state.inCart);
    console.log('After update');
    console.log(this.props.cart);
    this.props.updateCart(this.props.cart);
  }

  render() {
    //console.log('In Cartbutton');
    
    //console.log('data:');
    //console.log(this.props.data);
    return<button onClick={this.handleClick}>{this.state.notInCart ? 'Add to' : 'Remove from'} Cart</button>
    
  }
}

export default CartButton;