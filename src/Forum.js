import React, { Component } from "react";
import Posts from "./components/Posts";

class Forum extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-lg">
            <Posts />
          </div>
          
        </div>
      </div>  
    );
  }
}
 
export default Forum;