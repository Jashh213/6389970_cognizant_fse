import React from 'react';

const BookDetails = () => {
  const books = [
    { id: 1, bname: 'Master React', price: 670 },
    { id: 2, bname: 'Deep Dive into Angular 11', price: 800 },
    { id: 3, bname: 'Mongo Essentials', price: 450 }
  ];

  return (
    <div style={{
      width: '30%',
      borderLeft: '3px solid green',
      paddingLeft: '15px'
    }}>
      <h2>Book Details</h2>
      <ul>
        {books.map(book => (
          <div key={book.id}>
            <h3>{book.bname}</h3>
            <h4>{book.price}</h4>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default BookDetails;