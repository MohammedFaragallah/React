import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      const posts = res.data.slice(0, 5).map(post => ({
        ...post,
        author: 'Mohammed Faragallah',
      }));
      this.setState({ posts });
    });
  }

  postSelected = id => {
    this.setState({ selectedPostId: id });
  };

  render() {
    return (
      <div>
        <section className="Posts">
          {this.state.posts.map(post => (
            <Post
              key={post.id}
              title={post.title}
              author={post.author}
              body={post.body}
              clicked={() => this.postSelected(post.id)}
            />
          ))}
        </section>
        <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
