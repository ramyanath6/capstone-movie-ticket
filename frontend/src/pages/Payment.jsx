import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handlePaymentSuccess = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      navigate('/');
    }, 3000); // Show popup for 3 seconds, then redirect
  };

  return (
    <div className="payment-container">
      <h2>Payment Processing...</h2>
      <button onClick={handlePaymentSuccess}>Confirm Payment</button>

      {showPopup && (
        <div className="popup">
          <p>🎉 Payment Successful! Your booking is confirmed.</p>
        </div>
      )}
    </div>
  );
};

export default Payment;