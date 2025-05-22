import React from "react";
import "./CustomerReviews.css"; // Link to external CSS file

const reviews = [
  {
    name: "Jane Doe",
    rating: 5,
    comment: "Absolutely loved the service! Highly recommend to everyone.",
  },
  {
    name: "John Smith",
    rating: 4,
    comment: "Great experience overall. Will use again!",
  },
  {
    name: "Emily Johnson",
    rating: 5,
    comment: "Customer support was excellent and prompt.",
  },
];

const CustomerReviews = () => {
  return (
    <div className="reviews-page">
      <h2 className="reviews-heading">What Our Customers Say</h2>
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={`star ${i < review.rating ? "filled" : ""}`}>
                  ★
                </span>
              ))}
            </div>
            <p className="comment">"{review.comment}"</p>
            <p className="reviewer">– {review.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
