import React from 'react';
import { RxCross2 } from 'react-icons/rx';

import useClickOutside from '../hooks/useClickOutside';

const Label = 'flex flex-col w-full mb-4 min-[400px]:mb-6';
const Title = 'text-xl font-oswald text-orange-400 min-[400px]:text-2xl';
const Input =
  // eslint-disable-next-line max-len
  'text-sm p-1.5 mt-2 rounded-lg border-2 border-white focus:outline-none ' +
  'focus:border-orange-600 min-[400px]:text-lg xl:border-4';

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
        flex flex-col items-center xl:rounded-2xl"
      >
        <div className="flex flex-col py-8 px-4 xl:p-6">
          <div className="flex relative min-[400px]:mt-12">
            <div className="flex flex-col text-center">
              <span
                className="text-2xl text-orange-400 font-oswald 
              min-[400px]:text-3xl"
              >
                Реєстрація на пробне заняття
              </span>
              <p
                className="text-sm text-white font-droid mt-3 
              min-[400px]:text-lg"
              >
                Залишіть заявку і наш менеджер звяжеться з вами найближчим часом
              </p>
            </div>
            <button
              type="button"
              onClick={() => setButtonClick(false)}
              className="absolute right-[-3%] top-[-30%] text-2xl text-white 
              transition delay-100 ease-linear hover:text-orange-500 
              min-[400px]:text-3xl min-[400px]:top-[-70%]"
            >
              <RxCross2 />
            </button>
          </div>

          <form
            onSubmit=""
            className="flex flex-col h-full w-full items-center mt-16 pb-6"
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
              hover:text-white hover:bg-orange-500 min-[400px]:text-xl xl:w-1/2"
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
