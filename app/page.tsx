"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

interface student {
  name: string;
  url: string;
  description: string;
}
const data: student[] = [
  {
    name: "Annabelle mae",
    url: "/pro5.png",
    description:
      "bcjggjhdhfdh  fu jagfya agdyaddsa dysa  nagyugad agduya nas sduyegdyu asjgfuya nas sduyegdyu asjgfuya",
  },
  {
    name: "Ann Claire",
    url: "/pro3.png",
    description:
      "bcjggjhdhfdh  fu jagfya agdyaddsa dysa  nagyugad agduya nas sduyegdyu asjgfuya nas sduyegdyu asjgfuya",
  },
  {
    name: "Elizabeth Anne",
    url: "/pro5.png",
    description:
      "bcjggjhdhfdh  fu jagfya agdyaddsa dysa  nagyugad agduya nas sduyegdyu asjgfuya nas sduyegdyu asjgfuya ",
  },
  {
    name: "Emma Grace",
    url: "/pro3.png",
    description:
      "bcjggjhdhfdh  fu jagfya agdyaddsa dysa  nagyugad agduya nas sduyegdyu asjgfuya nas sduyegdyu asjgfuya",
  },
  {
    name: "Elizabeth Anne",
    url: "/pro5.png",
    description:
      "bcjggjhdhfdh  fu jagfya agdyaddsa dysa  nagyugad agduya nas sduyegdyu asjgfuya nas sduyegdyu asjgfuya ",
  },
  {
    name: "Emma Grace",
    url: "/pro3.png",
    description:
      "bcjggjhdhfdh  fu jagfya agdyaddsa dysa  nagyugad agduya nas sduyegdyu asjgfuya nas sduyegdyu asjgfuya",
  },
  {
    name: "Elizabeth Anne",
    url: "/pro5.png",
    description:
      "bcjggjhdhfdh  fu jagfya agdyaddsa dysa  nagyugad agduya nas sduyegdyu asjgfuya nas sduyegdyu asjgfuya ",
  },
  {
    name: "Emma Grace",
    url: "/pro3.png",
    description:
      "bcjggjhdhfdh  fu jagfya agdyaddsa dysa  nagyugad agduya nas sduyegdyu asjgfuya nas sduyegdyu asjgfuya",
  },
];

export default function Home() {
  return (
    <>
      <div className="text-3xl my-4 text-center font-bold text-white">
        Reviews
      </div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div className=" ">
          {data.map((item, index) => {
            return (
              <SwiperSlide key={index} className=" bg-white ">
                <div className="flex-col justify-center items-center   rounded-lg  ">
                  <div className="bg-blue-500 py-6 rounded">
                    <Image
                      src={item.url}
                      alt="image"
                      width={150}
                      height={150}
                      className="bg-blue-100 rounded-full mx-auto "
                    />
                  </div>

                  <div className="text-2xl text-center my-3">{item.name}</div>
                  <div className="text-md px-3 bg-w text-center">
                    {item.description}
                  </div>
                  <div>
                    <button className="bg-blue-400 mx-auto block my-5 text-white  rounded py-1 px-4">
                      Learn More
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </>
  );
}
