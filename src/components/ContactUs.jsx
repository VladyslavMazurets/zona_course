import React from 'react';
import { GoDeviceMobile } from 'react-icons/go';

const numberStyle = 'text-4xl font-raleway font-bold mt-3';
const labelStyle = 'flex flex-col text-gold';
const inputStyle = 'text-2xl text-black py-2 px-4';

function ContactUs() {
  return (
    <div className="h-max w-auto flex justify-center items-center bg-black">
      <div className="flex justify-between items-center py-8 w-[85%]">
        <div
          className="bg-[url('/src/assets/images/contact_bg.jpg')] bg-center
          bg-no-repeat bg-cover h-[775px] w-[350px] flex items-center 
          justify-center relative"
        >
          <div className="absolute h-full w-full bg-black opacity-30 z-0" />

          <div
            className="absolute z-50 text-white flex flex-col text-center
           items-center"
          >
            <GoDeviceMobile className="text-7xl mb-6" />
            <span
              className="text-2xl font-raleway font-semibold leading-10 
            mb-3"
            >
              Виникли запитання? <br /> Телефонуйте нам!
            </span>
            <span className={numberStyle}>+380 97 897 50 64</span>
            <span className={numberStyle}>+380 97 897 50 64</span>
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-gold">
            Школа INOUT
            <p>Чекаємо вас за адресою:</p>
            <p>Київ, вулиця Пушкінська, 12Б</p>
          </span>

          <div>Map</div>
        </div>

        <div className="flex flex-col">
          <span className="text-gold">Надішліть нам повідомлення</span>
          <form className="flex flex-col">
            <label htmlFor="name" className={labelStyle}>
              Ваше ім&apos;я:
              <input
                name="name"
                placeholder="Name"
                className={inputStyle}
                required
              />
            </label>
            <label htmlFor="email" className={labelStyle}>
              Ваша адреса електронної пошти:
              <input
                name="email"
                placeholder="Email"
                className={inputStyle}
                required
              />
            </label>
            <label htmlFor="text" className={labelStyle}>
              Ваше повідомлення:
              <textarea
                name="text"
                placeholder="Message"
                className="text-2xl text-black py-2 px-4 resize-none"
                required
              />
            </label>
            <button type="submit">Надіслати</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
