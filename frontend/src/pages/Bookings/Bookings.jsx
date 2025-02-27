import React, { useState, useContext } from 'react';
import './Bookings.css';
import { StoreContext } from '../../context/StoreContext.jsx';
import { useNavigate } from 'react-router-dom';

const Bookings = () => {
  const navigate = useNavigate();
  const { getTotalCartAmount } = useContext(StoreContext);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [popcornCount, setPopcornCount] = useState(1);
  const [selectedTime, setSelectedTime] = useState(""); 
  const seatPrice = 200;
  const popcornPrice = 135;


  const seats = Array.from({ length: 1000 }, (_, i) => i + 1);
  const showTimings = ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM", "10:00 PM"]; 

  const toggleSeat = (seat) => {
    setSelectedSeats((prevSeats) =>
      prevSeats.includes(seat)
        ? prevSeats.filter((s) => s !== seat)
        : [...prevSeats, seat]
    );
  };

  const increasePopcorn = (e) => {
    e.preventDefault();
    setPopcornCount((prev) => prev + 1);
  };

  const decreasePopcorn = (e) => {
    e.preventDefault();
    setPopcornCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  const cartTotal = getTotalCartAmount();
  const seatsTotal = selectedSeats.length * seatPrice;
  const popcornTotal = popcornCount * popcornPrice;
  const grandTotal = cartTotal + seatsTotal + popcornTotal;
  

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Booking Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="text" placeholder="Email Address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />

        <div className="show-timings">
          <p className="title">Select Show Timing</p>
          <div className="timing-options">
            {showTimings.map((time) => (
              <button
                key={time}
                className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleTimeSelection(time);
                }}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <div className="seat-selection">
          <p className="title">Select Your Seats</p>
          <div className="seat-grid">
            {seats.map((seat) => (
              <div
                key={seat}
                className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
                onClick={() => toggleSeat(seat)}
              >
                {seat}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Cart Sub Total</p>
              <p>Rs.{cartTotal}/-</p>
            </div>
            <div className="cart-total-details">
              <p>Seats ({selectedSeats.length})</p>
              <p>Rs.{seatsTotal}/-</p>
            </div>
            <div className="cart-total-details">
              <p>Popcorn</p>
              <div className="popcorn-counter">
                <button onClick={decreasePopcorn}>-</button>
                <span>{popcornCount}</span>
                <button onClick={increasePopcorn}>+</button>
              </div>
            </div>
            <div className="cart-total-details">
              <p><b>Grand Total</b></p>
              <b>Rs.{grandTotal}/-</b>
            </div>
          </div>
          <button onClick={() => navigate('/payment')} disabled={selectedSeats.length === 0 || !selectedTime}>
  Proceed to Payment
</button>
        </div>

        {selectedSeats.length > 0 && selectedTime && (
          <div className="ticket-summary">
            <h3>🎟️ Ticket Summary</h3>
            <p><b>Show Time:</b> {selectedTime}</p>
            <p><b>Selected Seats:</b> {selectedSeats.join(", ")}</p>
            <p><b>Total Price:</b> Rs.{grandTotal}/-</p>
          </div>
        )}
      </div>
    </form>
  );
};

export default Bookings;
