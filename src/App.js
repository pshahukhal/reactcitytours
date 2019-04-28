import React, {Component} from 'react';
import './App.scss';
import Navbar from "./Components/Navbar/Navbar"
import Tourlist from "./Components/Tourlist"
class App extends Component {
  render(){
    return(
      <>
      <Navbar />
      <Tourlist />
      </>
    )
  }
}

export default App;
