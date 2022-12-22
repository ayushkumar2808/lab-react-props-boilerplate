import { Component } from "react";
import "./App.css"


export default class AppClass extends Component{
  

  render(){
    return <>
    <h1>Kalvium Library</h1>
    <div className='flex'>
      <img src={this.props.data[0].img} alt="" />
      <img src={this.props.data[1].img} alt="" />
      <img src={this.props.data[2].img} alt="" />
      <img src={this.props.data[3].img} alt="" />
    </div>
    </>
  }
  
}
