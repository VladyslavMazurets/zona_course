import React from 'react';

import useClickOutside from '../hooks/useClickOutside';

const Label = 'flex flex-col w-full';
const Title = 'text-2xl font-oswald text-white';
const Input = 'text-lg p-2 mt-2 rounded-lg';

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
        className="fixed top-[22%] left-[40%] w-1/4 bg-zinc-500 z-30 
      rounded-lg"
      >
        <div className=" flex flex-col items-center w-full h-full p-6">
          <p className="text-3xl text-white font-oswald ">
            Реєстраія на пробне заняття
          </p>
          <form
            onSubmit=""
            className="flex flex-col h-[425px] w-full justify-between 
          items-start pt-8 pb-6"
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
              className="transition delay-100 ease-linear p-3 rounded-lg 
              bg-white text-lg font-semibold mt-2
              hover:text-white hover:bg-orange-500"
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
