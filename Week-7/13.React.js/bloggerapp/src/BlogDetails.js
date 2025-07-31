import React from 'react';

const BlogDetails = () => {
  const blogs = [
    {
      id: 1,
      title: 'React Learning',
      author: 'Stephen Biz',
      description: 'Welcome to learning React!'
    },
    {
      id: 2,
      title: 'Installation',
      author: 'Schwezdnier',
      description: 'You can install React from npm.'
    }
  ];

  return (
    <div style={{
      width: '30%',
      borderLeft: '3px solid green',
      paddingLeft: '15px'
    }}>
      <h2>Blog Details</h2>
      <ul>
        {blogs.map(blog => (
          <div key={blog.id}>
            <h3>{blog.title}</h3>
            <p><strong>{blog.author}</strong></p>
            <p>{blog.description}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default BlogDetails;