import React, { Component } from 'react'
import { connect } from "react-redux";
import { incNumber , decNumber } from '../actions';

class Counter extends Component {
    render() {
        let counter = this.props.counter;
        return (
            <div>
            <div className="container">

                <h1>Increment/Decrement</h1>

                <div className="container">
                    <button  onClick={()=> this.props.decNumber()}  ><span> - </span></button>
                    <input name="quantity" type="text" value={counter} />
                    <button  onClick={()=> this.props.incNumber()}><span> + </span></button>
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    const counter = state.changeNumber;
    return {
      counter
    };
  }

const mapDispatchToProps = () => {
    return {
        incNumber,
        decNumber
  }};  

export default connect(mapStateToProps,mapDispatchToProps())(Counter) 
