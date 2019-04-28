import React from 'react'
import './tour.scss'

export default class Tour extends React.Component{
  state={
    showInfo:false
  }
  handleInfo = () =>{
    this.setState({showInfo : !this.state.showInfo})
  }
  render(){
    const {id,city,img,name,info} = this.props.info;
    const {removeTour} = this.props;
    return (
    <article className="tour">
    <div className="img-container">
    <img src={img} alt="tour" />
    <span className="closebtn" onClick={() => removeTour(id)}>
    <i className="fas fa-window-close" />
    </span>
    </div>
    <div className="tourinfo">
    <h3>{city}</h3>
    <h4>{name}</h4>
    <h5>info <span onClick={this.handleInfo}> <i className="fas fa-caret-square-down" /> </span> </h5>
    {this.state.showInfo && <p>{info} </p>}


    </div>
    </article>

    )
  }
}
