import React from 'react';

import video from '../../assets/video/meal.mp4';

function Intro() {
  return (
    <div className="flex flex-col items-center w-full h-max bg-black">
      <div className="w-full h-[780px]">
        <video
          src={video}
          type="video/mp4"
          autoPlay
          loop
          controls={false}
          muted
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className="text-center px-2 py-12 lg:w-4/5 xl:w-[90%] 2xl:w-3/5 
      2xl:py-16"
      >
        <span className="text-xl text-gold font-droid">
          &ldquo; INOUT &ldquo; - це акторська школа, яка пропонує якісну освіту
          з акторської майстерності та театральної практики. <br />
          Ми працюємо з талановитими та амбітними людьми, які хочуть розвивати
          свій акторський потенціал та стати професійними акторами. <br />
          Наші авторські курси дозволяють знайти власний голос та стиль,
          розвивати акторську техніку та емоційну гру, вивчати сценічну мову та
          танці, засвоїти навички роботи зі світлом та звуком. <br />
          Ми пропонуємо індивідуальний підхід до кожного студента та
          забезпечуємо можливості для участі в театральних виставах та
          фестивалях. <br />
          &ldquo; INOUT &ldquo; - це шлях до самовираження та творчого розвитку,
          де кожен може розкрити свій потенціал та знайти своє місце в світі
          мистецтва.
        </span>
      </div>

      <div className="w-[95%] h-[1.5px] bg-white" />
    </div>
  );
}

export default Intro;
