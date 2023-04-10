import React from 'react';
import { Link } from 'react-router-dom';

import { coursesData } from '../../assets/constData/coursesData';

function Courses() {
  return (
    <div
      className="flex flex-col text-center items-center justify-center 
    bg-black"
    >
      <div className="flex flex-col justify-center items-center my-8">
        <span
          className="text-4xl text-gold font-raleway font-bold mb-12 md:text-5xl
        md:mb-16 xl:text-6xl xl:mb-20"
        >
          Наші курси
        </span>
        <div
          className="grid gap-y-5 mb-4 md:grid-cols-2 md:gap-y-6 
          xl:grid-cols-4 xl:gap-y-5"
        >
          {coursesData.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="flex flex-col items-center justify-center px-1 md:p-0"
            >
              <img
                src={item.img}
                alt="Courses_img"
                className="w-[200px] h-[200px] border-4 rounded-full
                object-cover border-yellow-100 hover:border-gold md:w-[230px] 
                md:h-[230px] lg:w-[250px] lg:h-[250px]"
              />
              <span
                className="text-white text-xl font-raleway font-droid
              font-semibold mt-3 hover:text-gold md:w-[75%] lg:text-2xl"
              >
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-[95%] h-[1.5px] bg-zinc-600" />
    </div>
  );
}

export default Courses;
