import { useState } from "react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { ImInsertTemplate } from "react-icons/im";

const HeroBanner = () => {
  const [featureData] = useState([
    {
      id: 1,
      title: "Plastic-Free July",
      description:
        "Avoid single-use plastic for one month and save the planet 🌍",
      img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1200&q=60",
    },
    {
      id: 2,
      title: "Save Energy Week",
      description: "Turn off lights and appliances when not in use ⚡",
      img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=60",
    },
    {
      id: 3,
      title: "Tree Planting Challenge",
      description: "Plant 5 trees this month and inspire others ",
      img: "https://conservationvolunteers.co.nz/wp-content/uploads/2024/03/210526.Acumen.Mondelez-02639-1024x683.jpg",
    },
    {
      id: 4,
      title: "Clean Water Drive",
      description: "Join our mission to provide clean water to communities 💧",
      img: "https://media.assettype.com/freepressjournal/2025-02-24/t3vgpg7o/cleanliness.jpg",
    },
  ]);
  return (
    <div className="mb-15">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        Pagination={{ clickble: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        spaceBetween={30}
        slidePreview={1}
        className="lg:h-[50vh] h-[30vh] w-full rounded-md shadow-lg"
      >
        {featureData.map((item) => (
          <SwiperSlide key={ImInsertTemplate.id}>
            <div className="relative h-[50vh] md:h-[70vh] w-full">
              <img
                className="object-cover w-full h-full"
                src={item.img}
                alt={item.title}
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4 mb-10">
                <h2 className="text-2xl md:text-5xl font-bold mb-2">
                  {item.title}
                </h2>
                <p className="text-sm md:text-lg mb-3 max-w-xl">
                  {item.description}
                </p>
                <button className="bg-green-700 hover:bg-green-800 text-white text-sm md:text-base px-5 py-2 rounded-md font-semibold transition-all shadow-md lg:mb-40 md:mb-70 mt-2 mb-30">
                  View Challenge
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroBanner;
