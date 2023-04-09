import React from 'react';
import CountUp from 'react-countup';

import { experienceData } from '../../assets/constData/experienceData';

function Experience() {
  return (
    <div className="flex justify-center bg-black">
      <div className="flex items-center text-center flex-col w-[70%] my-10">
        <span className="text-6xl text-gold font-raleway font-bold">
          Заряджайся творчістю та чудовим настроєм на заняттях у INOUT
        </span>
        <div className="flex justify-between w-full my-12">
          <div className="flex">
            <div className="flex flex-col items-start justify-center mr-12">
              {experienceData.map((item) => (
                <CountUp
                  key={item.id}
                  start={0}
                  end={item.count}
                  duration={2.75}
                  className="text-3xl text-gold mb-6"
                />
              ))}
            </div>

            <div className="flex flex-col items-start justify-center">
              {experienceData.map((item) => (
                <span
                  key={item.id}
                  className="text-gold text-2xl font-droid mb-[28px]"
                >
                  {item.title}
                </span>
              ))}
            </div>
          </div>
          <div className="w-[50%] text-gold">
            <video
              type="video/mp4"
              autoPlay={false}
              loop={false}
              controls={false}
              muted
              className="w-full h-full object-cover"
            >
              <source
                src="https://www.youtube.com/watch?v=cmedy35qst0&ab_channel=
                %D0%92%D1%96%D1%82%D0%B0%D0%BB%D1%96%D0%B9%D1%83
                %D1%82%D0%B5%D0%B0%D1%82%D1%80%D1%96"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
