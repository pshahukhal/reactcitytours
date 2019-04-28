import React from 'react' ;
import Tour  from "../Tour/Tour" ;
import './tourlist.scss' ;
import {tourData} from '../../tourData'
export default class Tourlist extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      tours : tourData
    }
  }

  removeTour = id =>{
    const newtours = this.state.tours.filter((item) => item.id !== id )
    this.setState({tours:newtours})

  }

  render(){
    return (
    <section className="tourlist" >
    {this.state.tours.map(tour => (<Tour key={tour.id} info={tour} removeTour={this.removeTour}  />))}
    </section>
    )
  }
}
