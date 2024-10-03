import React from "react";
import "./careerdetails.css";
const CareerDetails = () => {
  return (
    <div className="career-details relative z-[110] py-12">
      <div className="flex mx-auto h-full justify-center items-center">
        <div>
          <p className="text-white font-bold text-center mb-2">
            Discover Your Dream Job
          </p>
          <h1 className="text-white font-bold text-4xl text-center mb-2">
            More Than Just a Job, We’re a Community
          </h1>
          <p className="text-center max-w-[900px] text-white text-justify">
            We understand that finding a fulfilling career can be challenging.
            Our mission is to simplify this process and offer a workplace
            you&apos;ll enjoy coming to. Explore our job openings to start your
            journey.
          </p>
          <div className="flex justify-center">
            <button className="text-black bg-white p-3 mt-4 ">
              See All Openings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerDetails;
