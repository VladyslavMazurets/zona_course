import React from 'react';
import CountUp from 'react-countup';

import { experienceData } from '../../assets/constData/experienceData';

function Experience() {
  return (
    <div className="flex flex-col items-center bg-black">
      <div
        className="flex text-center w-full flex-col my-10 px-2 xl:px-12 
      2xl:w-[75%] 2xl:p-0"
      >
        <span className="text-2xl text-gold font-raleway font-bold xl:text-4xl">
          Заряджайся творчістю та чудовим настроєм на заняттях у
          <p
            className="text-zinc-300 text-5xl font-black mt-5 
          hover:text-orange-200 2xl:text-6xl"
          >
            INOUT
          </p>
        </span>
        <div
          className="flex flex-col justify-between w-full my-10 
          max-[1275px]:items-center xl:flex-row"
        >
          <div className="flex flex-col xl:items-start">
            {experienceData.map((item) => (
              <div
                key={item.id}
                className="h-full w-auto flex flex-col mb-6
               xl:relative xl:m-0"
              >
                <CountUp
                  start={0}
                  end={item.count}
                  duration={2.75}
                  className="text-4xl text-gold font-semibold xl:absolute
                  xl:bottom-[46%]"
                />
                <span
                  className="text-white text-xl font-droid xl:ml-[120px]
                2xl:text-2xl 2xl:ml-32"
                >
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          <div
            className="border-gold border-b-2 w-[95%] 
          xl:w-0 xl:border-r-2"
          />

          <div
            className="h-[300px] w-full text-gold mt-8 xl:m-0 xl:w-[45%] 
          xl:h-[400px]"
          >
            <iframe
              width="100%"
              height="100%"
              // eslint-disable-next-line max-len
              src="https://www.youtube.com/embed/cmedy35qst0?autoplay=0&showinfo=0&controls=0&autohide=1"
              title="YouTube video player"
              allowfullscreen
            />
          </div>
        </div>
      </div>

      <div className="w-[95%] h-[1.5px] bg-zinc-600" />
    </div>
  );
}

export default Experience;
