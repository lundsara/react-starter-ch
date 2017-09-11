import React, { Component } from 'react';
import '../App.css';
import Display from './Display';
import NumberPad from './NumberPad';

  // this component may need to have some state
  // think about what you need to keep track of
  // where would you need to pass information to?
var num;
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 0,
      num:0
    }
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event){


    num = event.target.innerHTML;
  // var num2 = event.target.innerHTML
   var adding = parseInt(this.state.num) + parseInt(num)
   var multiply = parseInt(this.state.num) * parseInt(num)
   var sub = parseInt(this.state.num) - parseInt(num)
   var divide = parseInt(this.state.num) / parseInt(num)

    this.setState({
        display:multiply,
        num:[event.target.innerHTML]
    })
  }

// adding(event){
//   this.setState({
//     display:(parseInt(this.state.num) + parseInt(num))
//         num:[event.target.innerHTML]
//   })
// }
// multiply(event){
//   this.setState({
//     display(parseInt(this.state.num)* parseInt(num)
//     this.setState({
//         display:multiply,
//         num:[event.target.innerHTML]
//   })
// }
// subtract(event){
//   this.setState({
//     display(parseInt(this.state.num))- parseInt(num)
//     this.setState({
//         display:subtract,
//         num:[event.target.innerHTML]
//   })
// }
// divide(event){
//   this.setState({
//     display(parseInt(this.state.num))/ parseInt(num)
//     this.setState({
//         display:divide,
//         num:[event.target.innerHTML]
//   })
// }


// assigning(){
//      if (event.target.id===15){
//      event.preventDefault()
//      this.adding()
//    } else if (event.target.id===7){
//      event.preventDefault()
//      this.multiply()
//    } else if (event.target.id===11){
//      event.preventDefault()
//      this.subtract()
//    } else if (event.target.id===3){
//      event.preventDefault()
//      this.divide()
//    }
// }



  render() {
    return (
      <div className="calculator">
        <Display display= {this.state.display}/>
        <NumberPad display= {this.state.display} handleOnClick={this.handleOnClick}/>
      </div>
    );
  }
}

export default Calculator;
