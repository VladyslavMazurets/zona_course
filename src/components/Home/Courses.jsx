import React from 'react';
import { Link } from 'react-router-dom';

import { coursesData } from '../../assets/constData/coursesData';

function Courses() {
  return (
    <div className="flex text-center justify-center bg-black">
      <div className="flex flex-col  justify-center my-12">
        <span className="text-5xl text-gold font-oswald"> Наші курси </span>
        <div className="grid gap-x-24 grid-cols-4 flex-wrap w-[100%]">
          {coursesData.map((item) => (
            <Link key={item.id} to={item.link}>
              <img
                src={item.img}
                alt="Courses_img"
                className="w-[250px] h-[250px] border-4 rounded-full"
              />
              <span className="text-gold">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
