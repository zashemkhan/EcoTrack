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
  return <div className="mb-15"></div>;
};

export default HeroBanner;
