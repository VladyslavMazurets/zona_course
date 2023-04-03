import React from 'react';
import { RxCross2 } from 'react-icons/rx';

import useClickOutside from '../hooks/useClickOutside';

const Label = 'flex flex-col w-full mb-4';
const Title = 'text-xl font-oswald text-orange-500 xl:text-2xl';
const Input =
  // eslint-disable-next-line max-len
  'text-sm p-1.5 mt-2 rounded-lg border-2 border-white focus:outline-none ' +
  'focus:border-orange-600 xl:border-4 xl:text-lg';

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
        className="fixed top-0 left-0 w-full h-full bg-zinc-500 z-30 
        flex flex-col items-center justify-center xl:rounded-2xl"
      >
        <div className="flex flex-col py-8 px-4 xl:p-6">
          <div className="flex relative">
            <div className="flex flex-col text-center">
              <span
                className="text-2xl text-orange-500 font-oswald 
              xl:text-3xl"
              >
                Реєстрація на пробне заняття
              </span>
              <p className="text-sm text-white font-droid mt-3 xl:text-lg">
                Залишіть заявку і наш менеджер звяжеться з вами найближчим часом
              </p>
            </div>
            <button
              type="button"
              onClick={() => setButtonClick(false)}
              className="absolute right-[-4.5%] top-[-35%] text-2xl text-white 
              transition delay-100 ease-linear hover:text-orange-500 
              xl:text-3xl"
            >
              <RxCross2 />
            </button>
          </div>

          <form
            onSubmit=""
            className="flex flex-col h-full w-full items-center pt-4 pb-6"
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
              rounded-lg bg-white text-lg font-semibold font-droid mt-12
              hover:text-white hover:bg-orange-500 xl:w-1/2"
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
