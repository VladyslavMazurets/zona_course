import React from 'react';
import { SiGooglemaps } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';
import { FaMobileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import { navLinkData } from '../../assets/constData/navLink';

const footerTitle = `text-gold text-2xl font-raleway font-bold mb-4 pb-2 
border-b-[1px] border-zinc-500 md:text-xl md:mb-0 xl:text-2xl`;
const footerIcon = 'text-xl text-gold mr-3 md:text-lg xl:mr-4 xl:text-xl';
const footerAdress = 'flex items-center mb-3 md:m-0';
const footerAdressText = `text-lg font-droid text-white hover:text-gold
 md:text-sm xl:text-lg`;

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center bg-black">
      <div
        className="flex flex-col justify-between items-center w-[90%]
        my-8 md:flex-row md:items-start md:h-[250px]"
      >
        <div className="relative z-0 flex flex-col md:w-[25%]">
          <img
            src={logo}
            alt="Company_logo"
            className="w-[250px] absolute top-[25%] left-[50%] 
            translate-x-[-50%] translate-y-[-100%] md:w-[200px] md:translate-x-0
            md:translate-y-0 md:left-0 md:top-5 md:translate-y-[-25%] 
            xl:w-[300px] xl:translate-y-[-25%]"
          />

          <span
            className="text-center text-2xl text-gold font-droid mt-28 
          leading-9 md:text-lg md:mt-20 md:text-start xl:text-xl xl:mt-28
          2xl:text-2xl"
          >
            <strong className="text-white text-4xl md:text-3xl xl:text-4xl">
              &ldquo;
            </strong>
            Стань героєм своєї історії та розкрий свій потенціал усередині себе
            з нашою професійною підтримкою.
            <strong
              className="text-white text-4xl leading-3
            md:leading-4 md:text-3xl xl:text-4xl xl:leading-3"
            >
              &ldquo;
            </strong>
          </span>
        </div>

        <div
          className="h-full flex flex-col items-center justify-between mt-8
        md:m-0 md:items-start md:w-[20%] xl:w-max"
        >
          <span className={footerTitle}>Наші контакти</span>

          <div className={footerAdress}>
            <SiGooglemaps className={footerIcon} />
            <a
              href="http://maps.google.com/?q=вулиця Пушкінська, 12Б,
               Київ, Україна, 02000"
              target="_blank"
              className={footerAdressText}
              rel="noreferrer"
            >
              Київ, вулиця Пушкінська, 12Б
            </a>
          </div>
          <div className={footerAdress}>
            <FaMobileAlt className={footerIcon} />
            <a href="tel:+380978975064" className={footerAdressText}>
              +380 97 897 50 64
            </a>
          </div>
          <div className={footerAdress}>
            <FaMobileAlt className={footerIcon} />
            <a href="tel:+380978975064" className={footerAdressText}>
              +380 97 897 50 64
            </a>
          </div>
          <div className={footerAdress}>
            <FiMail className={footerIcon} />
            <a href="mailto:ogidj88@gmail.com" className={footerAdressText}>
              ogidj88@gmail.com
            </a>
          </div>
        </div>

        <div
          className="h-full flex flex-col items-center justify-between mt-8
        md:m-0"
        >
          <span className={footerTitle}> Навігація </span>

          {navLinkData.map((item) => (
            <Link
              key={item.id}
              to="/"
              className="text-xl font-droid text-white hover:text-gold mb-3
              md:m-0 md:text-sm xl:text-lg"
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div
          className="h-full flex flex-col items-center justify-between w-[95%]
          mt-8 md:w-[18%] md:m-0"
        >
          <span className={footerTitle}>Зв&lsquo;яжіться з нами</span>

          <span
            className="text-xl text-center text-white font-droid 
          leading-8 md:text-sm xl:text-lg 2xl:text-xl"
          >
            Відкрий свій потенціал та стань актором власного театру! <br />
            Зв&lsquo;яжись з нами для деталей.
          </span>

          <Link
            to="/contactus"
            className="w-[55%] text-xl text-black text-center font-semibold
            font-droid rounded-[5px] px-8 py-1 bg-gold mt-6
            border-[2px] border-transparent transition duration-300 ease-linear	
            hover:bg-black hover:text-gold hover:border-gold md:mt-0 
            md:text-sm md:w-full xl:w-1/2 xl:p-0 xl:text-lg 2xl:text-xl
            2xl:py-[5px] 2xl:w-[75%]"
          >
            Творіть
          </Link>
        </div>
      </div>

      <div className="w-[95%] h-[2px] bg-zinc-600" />

      <div
        className="w-full flex justify-between py-8 text-sm font-raleway px-4
      text-white md:w-[90%] md:px-0 xl:text-lg"
      >
        <span>© 2023 All rights reserved</span>
        <a
          href="https://www.linkedin.com/in/vladyslav-mazurets-00b9b8257"
          target="_blank"
          className="hover:text-gold"
          rel="noreferrer"
        >
          Created by Vladyslav Mazurets
        </a>
      </div>
    </div>
  );
}

export default Footer;
