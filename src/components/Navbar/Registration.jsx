import React from 'react';
import { RxCross2 } from 'react-icons/rx';

import useClickOutside from '../../hooks/useClickOutside';

const Label = 'flex flex-col w-full mb-4 min-[400px]:mb-6 2xl:mb-4';
const Title = 'text-xl font-oswald text-gold mb-1 min-[400px]:text-2xl';
const Input =
  // eslint-disable-next-line max-len
  'text-sm p-1.5 mt-2 rounded-lg border-2 border-white focus:outline-none ' +
  'focus:border-gold min-[400px]:text-lg xl:border-4 md:text-xl 2xl:text-lg';

function Registration({ setButtonClick }) {
  const domNode = useClickOutside(() => setButtonClick(false));

  return (
    <>
      <div
        ref={domNode}
        className="w-full h-screen bg-black fixed top-0 left-0 z-20 
        opacity-50 hidden sm:block"
      />
      <div
        className="fixed top-0 left-0 w-full h-full bg-zinc-700 z-30 
        flex flex-col 2xl:rounded-2xl 2xl:w-1/3 2xl:h-max 2xl:top-[16%]
        2xl:left-[34.5%]"
      >
        <div
          className="flex flex-col w-full px-4 items-center
        xl:p-6"
        >
          <div className="relative w-full h-full">
            <div className="flex flex-col text-center">
              <span
                className="text-2xl text-gold font-oswald pt-8
              min-[400px]:text-3xl md:text-4xl md:mb-3 2xl:text-3xl 2xl:pt-4"
              >
                Реєстрація на пробне заняття
              </span>
              <p
                className="text-sm text-white font-droid mt-3 
              min-[400px]:text-lg md:text-xl 2xl:text-lg"
              >
                Залишіть заявку і наш менеджер звяжеться з вами найближчим часом
              </p>
            </div>
            <RxCross2
              onClick={() => setButtonClick(false)}
              className="absolute right-[-4%] top-[6%] text-2xl text-white 
              transition delay-100 ease-linear cursor-pointer hover:text-gold 
              md:right-[-1%] md:top-[8%] xl:top-[-8%] xl:right-[-1%]"
            />
          </div>

          <form
            onSubmit=""
            className="flex flex-col items-center h-full w-[90%] mt-16 
            md:mt-24 2xl:mt-6"
          >
            <label htmlFor="name" className={Label}>
              <p className={Title}>Ваше імя</p>
              <input
                className={Input}
                id="name"
                type="text"
                placeholder="Ім'я"
                required
              />
            </label>

            <label htmlFor="telNum" className={Label}>
              <p className={Title}>Ваш номер телефону</p>
              <input
                className={Input}
                id="telNum"
                type="tel"
                placeholder="Номер телефону"
                required
              />
            </label>

            <label htmlFor="email" className={Label}>
              <p className={Title}>Ваш Email</p>
              <input
                className={Input}
                id="email"
                type="email"
                placeholder="Email"
                required
              />
            </label>

            <button
              type="submit"
              className="transition delay-100 ease-linear py-2 px-6 w-full 
              rounded-lg bg-white text-lg font-droid font-medium mt-12
              hover:text-white hover:bg-gold min-[400px]:text-xl md:mt-16 
              md:w-1/2 2xl:mt-10 2xl:text-xl"
            >
              Записатися зараз
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Registration;
