import React from 'react';
import { GoDeviceMobile } from 'react-icons/go';

const numberStyle = `text-2xl font-raleway font-bold mt-2 xl:mt-3 md:text-4xl
lg:text-2xl`;
const inputTitleStyle = `flex flex-col text-xl text-gold font-droid mt-5 mb-1
md:text-2xl md:mt-4 lg:text-xl lg:mt-3`;
const inputStyle = `text-lg text-black py-1 px-3 w-full rounded-[5px] 
border-4 border-transparent focus:outline-none focus:border-gold md:text-xl
lg:text-lg`;
const titleStyle = `text-3xl text-gold font-raleway font-semibold mb-5
border-b-2 border-gold pb-6 md:mb-8 md:text-5xl lg:text-4xl`;

function ContactUs() {
  return (
    <div
      className="h-max w-auto flex justify-center items-center 
    bg-black"
    >
      <div
        className="flex flex-col justify-between items-center py-8 w-[85%]
      lg:flex-row lg:w-[95%]"
      >
        <div
          className="bg-[url('/src/assets/images/contact_bg.jpg')] bg-center
          bg-no-repeat bg-cover h-[430px] w-[280px] flex items-center 
          justify-center relative md:h-[350px] md:w-[700px] lg:w-[250px] 
          lg:h-[700px] xl:h-[775px] xl:w-[350px]"
        >
          <div className="absolute z-0 h-full w-full bg-black opacity-20" />

          <div
            className="absolute z-10 text-white flex flex-col text-center
           items-center"
          >
            <GoDeviceMobile className="text-5xl mb-6 md:text-7xl lg:text-6xl" />
            <span
              className="text-xl font-raleway font-semibold leading-10 
            md:mb-3 md:text-2xl lg:text-xl"
            >
              Виникли запитання? <br /> Телефонуйте нам!
            </span>
            <span className={numberStyle}>+380 97 897 50 64</span>
            <span className={numberStyle}>+380 97 897 50 64</span>
          </div>
        </div>

        <div
          className="flex flex-col items-center mt-12 lg:m-0 lg:w-[35%]
        lg:items-start"
        >
          <span className={`${titleStyle} w-max`}>Адреса</span>

          <div
            className="flex flex-col items-center text-center lg:mt-8
            lg:text-start lg:items-start"
          >
            <span
              className="text-xl font-droid text-white mb-3 md:text-2xl
            lg:text-xl"
            >
              Чекаємо вас за адресою:
            </span>
            <span className="text-white font-droid text-lg mb-3">
              Київ, вулиця Пушкінська, 12Б, 49/13, 1 парадне
            </span>

            <div
              className="w-[290px] h-[450px] bg-white md:w-[700px] lg:w-full
              lg:h-[300px] lg:mb-8 xl:w-[600px] xl:h-[450px]"
            />
          </div>
        </div>

        <div
          className="flex flex-col items-center mt-12 xl:items-start
         lg:m-0 lg:w-[30%]"
        >
          <span
            className={`${titleStyle} text-center w-[80%] md:w-[50%] lg:w-[85%]
          xl:w-[68%]`}
          >
            Надішліть нам повідомлення
          </span>

          <form className="flex flex-col w-full">
            <label htmlFor="name">
              <span className={`${inputTitleStyle} xl:mt-10`}>
                Ваше ім&apos;я:
              </span>
              <input
                name="name"
                placeholder="Name"
                className={inputStyle}
                required
              />
            </label>
            <label htmlFor="email">
              <span className={inputTitleStyle}>
                Ваша адреса електронної пошти:
              </span>
              <input
                name="email"
                placeholder="Email"
                className={inputStyle}
                required
              />
            </label>
            <label htmlFor="text">
              <span className={inputTitleStyle}>Ваше повідомлення:</span>
              <textarea
                rows="6"
                name="text"
                placeholder="Message"
                className="w-full text-xl text-black py-2 px-3 resize-none
                rounded-[5px] border-4 border-transparent focus:outline-none 
                focus:border-gold"
                required
              />
            </label>
            <button
              type="submit"
              className="bg-gold text-xl font-droid py-1 mt-6 
              rounded-[5px] transition duration-300 ease-linear	border-2
              border-transparent hover:bg-black hover:text-gold 
              hover:border-gold lg:w-1/2 xl:w-1/3"
            >
              Надіслати
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
