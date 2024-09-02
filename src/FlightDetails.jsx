import React from 'react';
import { useLocation } from 'react-router-dom';

function FlightDetails() {
  const location = useLocation();
  const { from, to, departDate, returnDate } = location.state;

  return (
    <div className="flight-details">
      <h1>Flight Details</h1>
      <div className="flight-info">
        <p>From: {from}</p>
        <p>To: {to}</p>
        <p>Departure: {departDate}</p>
        <p>Return: {returnDate}</p>
      </div>
    </div>
  );
}

export default FlightDetails;