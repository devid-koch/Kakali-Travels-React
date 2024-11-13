import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { carouselData } from "../../../assets/data/data";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full">
      <Carousel
        showThumbs={ false }
        showArrows={ true }
        showIndicators={ false }
        infiniteLoop
        autoPlay
        transitionTime={ 2000 }
        interval={ 5000 }
        showStatus={ false }
      >
        { carouselData?.item.map((item) => (
          <div key={ item.id } className="relative h-screen w-full">
            <img
              src={ item.img }
              alt={ item.title }
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center md:text-start bg-black bg-opacity-40">
              <div className="w-[95%] md:w-[70%]">
                <div className="w-[95%] md:w-[55%]">
                  <h2 className="text-white text-4xl md:text-5xl font-bold mt-4 font-secondary">
                    { item.title }
                  </h2>
                  <p className="text-white mt-2 text-sm py-3 ">{ item.text }</p>
                  <button className="mt-4 px-6 py-2 bg-white text-black text-sm uppercase">
                    { item.btn }
                  </button>
                </div>
              </div>
            </div>
          </div>
        )) }
      </Carousel>
    </div>
  );
};

export default HeroSection;
