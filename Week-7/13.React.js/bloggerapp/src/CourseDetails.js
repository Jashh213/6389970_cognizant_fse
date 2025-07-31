import React from 'react';

const CourseDetails = () => {
  const courses = [
    { id: 1, name: 'Angular', date: '4/5/2021' },
    { id: 2, name: 'React', date: '6/3/2021' }
  ];

  return (
    <div style={{ width: '30%' }}>
      <h2>Course Details</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <strong>{course.name}</strong><br />
            {course.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;