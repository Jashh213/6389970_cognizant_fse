// src/App.js
import React from 'react';

const App = () => {
  const heading = <h1>Office Space Rental Portal</h1>;

  
  const imageURL = "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg";

  const office = {
    name: "TechHub Workspace",
    rent: 55000,
    address: "Plot No. 23, HiTech City, Hyderabad"
  };

  const officeList = [
    { name: "Startup Bay", rent: 45000, address: "Madhapur, Hyderabad" },
    { name: "InnovateX", rent: 62000, address: "Gachibowli, Hyderabad" },
    { name: "CodeNest", rent: 58000, address: "Kondapur, Hyderabad" },
    { name: "DevSquare", rent: 70000, address: "Banjara Hills, Hyderabad" }
  ];

  const getRentStyle = (rent) => ({
    color: rent < 60000 ? 'red' : 'green',
    fontWeight: 'bold'
  });

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {heading}

      
      <img
        src={imageURL}
        alt="Office Space"
        style={{ width: "400px", height: "200px", objectFit: "cover", borderRadius: "8px", marginBottom: "20px" }}
      />

      <h2>Featured Office</h2>
      <p><strong>Name:</strong> {office.name}</p>
      <p><strong>Rent:</strong> <span style={getRentStyle(office.rent)}>{office.rent}</span></p>
      <p><strong>Address:</strong> {office.address}</p>

      <h2>Available Office Spaces</h2>
      <ul>
        {officeList.map((item, index) => (
          <li key={index}>
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Rent:</strong> <span style={getRentStyle(item.rent)}>{item.rent}</span></p>
            <p><strong>Address:</strong> {item.address}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;