import React from "react";

const MediaOutlets = () => {
  return (
    <div className="w-full flex lg:flex-row md:flex-row flex-col p-3">
      <div className="mx-3 my-5 card lg:w-1/3 md:w-1/3 w-full bg-base-100 shadow-xl image-full bg-gradient-to-r from-yellow-300 to-yellow-400 p-3 shadow-xl">
        <div className="card-body bg-white">
          <h2 className="text-center text-3xl font-semibold text-darkBlue text-boldserif">
            TFSS Calender
          </h2>
          <p className="text-center text-xl font-semibold text-darkBlue text-oxy">
            View Local School Events Online!
          </p>
          <div className="card-actions justify-center">
            <button className="btn bg-darkBlue text-white text-center">
              View Calender
            </button>
          </div>
        </div>
      </div>
      <div className="mx-3 my-5 card lg:w-1/3 md:w-1/3 w-full bg-base-100 shadow-xl image-full bg-gradient-to-l from-yellow-300 to-yellow-400 p-3 shadow-xl">
        <div className="card-body bg-white">
          <h2 className="text-center text-3xl font-semibold text-darkBlue text-boldserif">
            Trojan TV Broadcasts
          </h2>
          <p className="text-center text-xl font-semibold text-darkBlue text-oxy">
            Watch Our Latest Broadcasts
          </p>
          <div className="card-actions justify-center">
            <button className="btn bg-darkBlue text-white text-center">
              Watch Now
            </button>
          </div>
        </div>
      </div>
      <div className="mx-3 my-5 card lg:w-1/3 md:w-1/3 w-full bg-base-100 shadow-xl image-full bg-gradient-to-r from-yellow-300 to-yellow-400 p-3 shadow-xl">
        <div className="card-body bg-white">
          <h2 className="text-center text-3xl font-semibold text-darkBlue text-boldserif">
            Trojan Times Newspaper
          </h2>
          <p className="text-center text-xl font-semibold text-darkBlue text-oxy">
            Read School News On Trojan Times!
          </p>
          <div className="card-actions justify-center">
            <button className="btn bg-darkBlue text-white text-center">
              Read Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaOutlets;
