import React, { Component } from "react";
import Posts from "./components/Posts";
import Postform from "./components/Postform";

class Forum extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg">
            <Postform />
            <hr />
            <Posts />
          </div>
          
        </div>
      </div>  
    );
  }
}
 
export default Forum;