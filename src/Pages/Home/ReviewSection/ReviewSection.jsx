import React, { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import customer from "../../../assets/customer-top.png";

const reviews = [
  {
    id: "5f47ac10b4f1c03e8c123456",
    user_email: "john.doe@example.com",
    userName: "John Doe",
    delivery_email: "delivery1@example.com",
    ratings: 4.5,
    review: "Smooth delivery and polite staff.",
    parcel_id: "5f47ac10b4f1c03e8c654321",
    pick_up_email: "pickup1@example.com",
    user_photoURL: "https://randomuser.me/api/portraits/men/10.jpg",
    date: "2024-05-08T14:30:00.000Z",
  },
  {
    id: "5f47ac10b4f1c03e8c234567",
    user_email: "jane.smith@example.com",
    userName: "Jane Smith",
    delivery_email: "delivery2@example.com",
    ratings: 3.8,
    review: "Took a bit longer than expected, but okay overall.",
    parcel_id: "5f47ac10b4f1c03e8c765432",
    pick_up_email: "pickup2@example.com",
    user_photoURL: "https://randomuser.me/api/portraits/women/25.jpg",
    date: "2024-06-10T10:15:00.000Z",
  },
  {
    id: "5f47ac10b4f1c03e8c345678",
    user_email: "alex.brown@example.com",
    userName: "Alex Brown",
    delivery_email: "delivery3@example.com",
    ratings: 5.0,
    review: "Excellent service! Fast and secure.",
    parcel_id: "5f47ac10b4f1c03e8c876543",
    pick_up_email: "pickup3@example.com",
    user_photoURL: "https://randomuser.me/api/portraits/men/34.jpg",
    date: "2024-07-01T08:50:00.000Z",
  },
  {
    id: "5f47ac10b4f1c03e8c456789",
    user_email: "lisa.white@example.com",
    userName: "Lisa White",
    delivery_email: "delivery4@example.com",
    ratings: 4.2,
    review: "Very responsive and professional.",
    parcel_id: "5f47ac10b4f1c03e8c987654",
    pick_up_email: "pickup4@example.com",
    user_photoURL: "https://randomuser.me/api/portraits/women/12.jpg",
    date: "2024-07-15T09:10:00.000Z",
  },
  {
    id: "5f47ac10b4f1c03e8c567890",
    user_email: "david.lee@example.com",
    userName: "David Lee",
    delivery_email: "delivery5@example.com",
    ratings: 2.9,
    review: "Late delivery and no updates. Disappointed.",
    parcel_id: "5f47ac10b4f1c03e8c098765",
    pick_up_email: "pickup5@example.com",
    user_photoURL: "https://randomuser.me/api/portraits/men/19.jpg",
    date: "2024-08-02T16:45:00.000Z",
  },
  {
    id: "5f47ac10b4f1c03e8c678901",
    user_email: "nina.khan@example.com",
    userName: "Nina Khan",
    delivery_email: "delivery6@example.com",
    ratings: 4.9,
    review: "Superb experience! Highly recommended.",
    parcel_id: "5f47ac10b4f1c03e8c109876",
    pick_up_email: "pickup6@example.com",
    user_photoURL: "https://randomuser.me/api/portraits/women/8.jpg",
    date: "2024-08-10T12:00:00.000Z",
  },
  {
    id: "5f47ac10b4f1c03e8c789012",
    user_email: "michael.jordan@example.com",
    userName: "Michael Jordan",
    delivery_email: "delivery7@example.com",
    ratings: 3.3,
    review: "Decent service but packaging could be better.",
    parcel_id: "5f47ac10b4f1c03e8c210987",
    pick_up_email: "pickup7@example.com",
    user_photoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    date: "2024-08-14T18:20:00.000Z",
  },
  {
    id: "5f47ac10b4f1c03e8c890123",
    user_email: "emma.watson@example.com",
    userName: "Emma Watson",
    delivery_email: "delivery8@example.com",
    ratings: 4.7,
    review: "Fast, safe, and friendly delivery service.",
    parcel_id: "5f47ac10b4f1c03e8c321098",
    pick_up_email: "pickup8@example.com",
    user_photoURL: "https://randomuser.me/api/portraits/women/5.jpg",
    date: "2024-08-20T07:30:00.000Z",
  },
];

const ReviewSection = () => {
  const [current, setCurrent] = useState(0);
  const total = reviews.length;

  const prev = () => setCurrent((prev) => (prev - 1 ) % total);
  const next = () => setCurrent((prev) => (prev + 1) % total);

  const getReviewAt = (index) => reviews[(index + total) % total];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 text-center">
      {/* Top Image */}
      <img
        src={customer}
        alt="Review Hero"
        className="mx-auto mb-6 w-204 h-24 object-contain"
      />

      {/* Title & Description */}
      <h2 className="text-3xl font-semibold mb-2">
        What our customers are saying
      </h2>
      <p className="max-w-2xl mx-auto mb-12">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce pain, and strengthen your body with
        ease!
      </p>

      {/* Carousel Cards */}
      <div className="flex justify-center items-center gap-6 relative">
        {[current - 1, current, current + 1].map((i, idx) => {
          const review = getReviewAt(i);
          const isCurrent = idx === 1;

          return (
            <div
              key={review.id}
              className={`bg-base-100 rounded-xl shadow-md p-6 w-72 transition-all duration-500
                ${
                  isCurrent
                    ? "scale-100 blur-0 z-10"
                    : "scale-90 blur-sm opacity-60"
                }
              `}
            >
              <FaQuoteRight className="text-xl text-primary mb-4" />
              <p className="text-sm  mb-4 h-4 overflow-hidden">
                {review.review}
              </p>
              <hr className="border-dotted border-t border-gray-300 mb-4" />
              <div className="flex items-center gap-3">
                <img
                  src={review.user_photoURL}
                  alt={review.userName}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="text-sm font-semibold">{review.userName}</h4>
                  <p className="text-xs text-gray-500">
                    {/* Senior Product Designer */}
                    {review.user_email}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={prev}
          className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 hover:text-black"
        >
          <FiArrowLeft size={20} />
        </button>

        {/* dots code snippet including */}
        <div className="flex gap-2">
          {reviews.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${
                i === current ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 hover:text-black"
        >
          <FiArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default ReviewSection;
