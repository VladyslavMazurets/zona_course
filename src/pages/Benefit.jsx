import React from 'react';

import { benefitData } from '../assets/constData/benefitData';

function Benefit() {
  return (
    <div className="bg-black w-auto h-max">
      <div className="flex flex-col items-center py-12">
        <div
          className="flex flex-col items-center text-center w-[85%] 
        mb-12 xl:mb-24"
        >
          <span
            className="font-raleway font-bold text-2xl text-gold pb-4 
        border-b-2 border-gold xl:text-4xl"
          >
            Вигідні пропозиції та акції на навчання акторської майстерності
          </span>
          <span className="font-droid text-lg text-white mt-5 xl:text-[22px]">
            Ми цінуємо кожного студента нашої школи і завжди стараємося
            запропонувати найкращі пропозиції для навчання акторської
            майстерності. Це наш спосіб висловити вам подяку та показати, що ми
            прагнемо зробити ваше навчання найефективнішим. <br />
            Ознайомтеся з нашим списком вигідних акцій нижче:
          </span>
        </div>

        {benefitData.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <div
              className="flex flex-col justify-between items-center 
            w-[90%] xl:flex-row"
            >
              <img
                src={item.img}
                alt="Benefit_img"
                className="w-[300px] h-[300px] object-cover rounded-lg 
                xl:w-[500px] xl:h-[360px] "
              />
              <div
                className="flex flex-col items-center text-center justify-center
               xl:w-[65%]"
              >
                <span
                  className="font-raleway font-semibold text-2xl
                text-gold my-7 xl:m-0 xl:mb-10 xl:text-3xl"
                >
                  {item.title}
                </span>
                <span
                  className="font-droid text-lg text-white leading-7 
                xl:text-xl xl:leading-8"
                >
                  {item.description}
                </span>
              </div>
            </div>
            <div className="w-[95%] h-[1.5px] my-10 bg-zinc-600" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Benefit;
