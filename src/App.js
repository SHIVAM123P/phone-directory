import React, { Component } from "react";
import Header from "./Header"

class App extends Component {
  render() {
    return (
      
      <div>
        <Header/>
        <button> Add </button>
        <div>
          <span> Name </span><br />
          <span> Phone </span>
        </div> 
      </div>

    );
  }
}
export default App;




    //   <label htmlFor="name">Name:</label>
      //   <input id="name" type="text" placeholder="Type here" defaultValue={x+y}/>
