import React, { Component } from "react";
import { Fragment } from 'react';


class App extends Component {
  render() {
    return (
      <div>

      
        {/* <div className="Header">
          Phone Directory
        </div>
        <button> Add </button>
        <div>
          <span> Name </span><br />
          <span> Phone </span>
        </div> */}

        <label htmlFor="name">Name:</label>
        <input id="name" type="text" placeholder="Type here" defaultValue="Shilpa"/>

        </div>

    );
  }
}
export default App;
