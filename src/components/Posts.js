import React, { Component } from 'react'

class Posts extends Component {
  constructor(props){
      super(props);
      this.state = {
          posts: []
      }
  }
  componentWillMount(){
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => this.setState({ posts: data}));
  }

  render() {
      const postItems = this.state.posts.map(post => (
          <div className="container post" key={post.id}>
            <h3>{post.title}</h3>
            <p><strong>Postdate: </strong> 12/27/18 </p>
            <p>{post.body}</p>
            <p>
                <a href="#">
                    <ul className="list-inline">
                        <li id={post.id} className="list-inline-item">
                            [View More]
                        </li>
                        <li id={post.id} className="list-inline-item">
                            [Reply]
                        </li>
                        <li id={post.id} className="list-inline-item">
                            [Report]
                        </li>
                    </ul>
                </a>
            </p>
          </div>
      ));
    return (
      <div>
        <h1>Posts</h1>
        { postItems }
      </div>
    )
  }
}

export default Posts;