import React from "react";
import { star } from "../assets/icons";
import CustomerReviews from "./CustomerReviews";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img src={imgURL} alt="user" className="rounded-full w024 h-24" />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-3">
        <img src={star} alt="rating" />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h2 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h2>
    </div>
  );
};

export default ReviewCard;
