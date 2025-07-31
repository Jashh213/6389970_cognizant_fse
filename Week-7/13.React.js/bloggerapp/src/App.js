import React from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

const App = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Welcome to Blogger App</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <CourseDetails />
        <BookDetails />
        <BlogDetails />
      </div>
    </div>
  );
};

export default App;