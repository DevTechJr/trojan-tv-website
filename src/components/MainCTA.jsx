import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MainCTA = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      autoPlay={true}
      autoPlaySpeed={5000}
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      className="py-8 rounded-3xl w-full my-5 my-8 h-96 max-h-96 h-full"
    >
      <div className="mb-2 rounded-md card bg-base-200 hover:bg-base-300 ">
        <img
          className="w-full rounded-3xl"
          src="https://i.ibb.co/5Kz5Ytd/weightroomannouncement.png"
        />
      </div>
      <div className="mb-2 rounded-md card bg-base-200 hover:bg-base-300">
        <img
          className="w-full rounded-3xl"
          src="https://i.ibb.co/Btv0yvk/semiformalannouncement.png"
        />
      </div>
      <div className="mb-2 rounded-md card bg-base-200 hover:bg-base-300">
        <img
          className="w-full rounded-3xl"
          src="https://i.ibb.co/fvPt815/prideclub-announcement.png"
        />
      </div>
    </Carousel>
  );
};

export default MainCTA;
