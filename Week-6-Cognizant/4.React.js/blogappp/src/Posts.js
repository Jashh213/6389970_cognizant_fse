import React, { Component } from 'react';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  // Fetch meaningful blog posts
  loadPosts = () => {
    fetch('https://api.slingacademy.com/v1/sample-data/blog-posts')
      .then(response => response.json())
      .then(data => {
        const postList = data.blogs.map(p => ({
          id: p.id,
          title: p.title,
          body: p.content_text,
          image: p.photo_url,
          category: p.category
        }));
        this.setState({ posts: postList });
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        this.setState({ hasError: true });
      });
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert('An error occurred while rendering posts.');
    console.error('Error:', error, 'Info:', info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong while loading posts.</h2>;
    }

    return (
      <div style={{ padding: '20px' }}>
        <h1>Blog Posts</h1>
        {this.state.posts.map(post => (
          <div key={post.id} style={{ marginBottom: '40px' }}>
            <h2>{post.title}</h2>
            <img
              src={post.image}
              alt={post.title}
              style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }}
            />
            <p><strong>Category:</strong> {post.category}</p>
            <p>{post.body}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;