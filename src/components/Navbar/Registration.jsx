import React from 'react';
import { RxCross2 } from 'react-icons/rx';

import useClickOutside from '../../hooks/useClickOutside';
import { useClickClose } from '../../hooks/useClickCLose';

const Label = 'flex flex-col w-full mb-4 min-[390px]:mb-6 md:mb-3 2xl:mb-2';
const Title =
  'text-xl font-relawey font-semibold text-gold mb-1 ' +
  ' min-[390px]:text-2xl';
const Input =
  'text-sm p-1.5 mt-2 rounded-lg border-2 border-white focus:outline-none ' +
  'focus:border-gold min-[390px]:text-lg xl:border-4 md:text-xl 2xl:text-lg';

function Registration({ setButtonClick }) {
  const domNode = useClickOutside(() => setButtonClick(false));
  const [close, clickClose] = useClickClose(() => setButtonClick(false), 800);

  const stateClose = !close
    ? 'md:animate-moveactive'
    : 'md:animate-movepassive';
  const smallClose = !close ? 'animate-smmoveactive' : 'animate-smmovepassive';

  return (
    <>
      <div
        ref={domNode}
        className="w-full h-screen bg-black fixed top-0 left-0 z-20 
        opacity-50 hidden sm:block"
      />
      <div
        className={`fixed top-0 left-0 w-full h-full bg-zinc-900 z-30 
        flex flex-col ${smallClose} ${stateClose} md:w-4/5 md:h-max
         md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%] 
        md:rounded-xl 2xl:rounded-2xl 2xl:w-1/3 2xl:h-max`}
      >
        <div
          className="flex flex-col px-4 items-center
          md:justify-center md:p-6"
        >
          <div className="relative w-full h-full">
            <div className="flex flex-col text-center">
              <span
                className="text-2xl text-gold font-relawey font-semibold pt-8
              min-[390px]:text-3xl md:text-4xl md:mb-3 2xl:pt-4"
              >
                Реєстрація на пробне заняття
              </span>
              <p
                className="text-sm text-white font-droid mt-3 
                min-[390px]:text-lg md:text-2xl 2xl:text-xl 2xl:mt-1"
              >
                Залишіть заявку і наш менеджер звяжеться з вами найближчим часом
              </p>
            </div>
            <RxCross2
              onClick={clickClose}
              className="absolute right-[-4%] top-[6%] text-2xl text-white 
              transition delay-100 ease-linear cursor-pointer hover:text-gold 
              md:right-[-3%] md:top-[-5%] md:text-3xl lg:top-[-8%] 
              lg:right-[-2%] xl:top-[-8%] 
              xl:right-[-1%] 2xl:top-[-10%] 2xl:right-[-2%]"
            />
          </div>

          <form
            onSubmit=""
            className="flex flex-col items-center h-full w-[90%] mt-8 
            min-[390px]:mt-16 md:mt-4"
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
              rounded-lg bg-white text-lg font-droid font-medium mt-6
              hover:text-white hover:bg-gold min-[390px]:mt-12 
              min-[390px]:text-xl md:mt-10 md:mb-5 md:w-1/2 2xl:text-xl"
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
