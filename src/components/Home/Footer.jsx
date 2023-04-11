import React from 'react';
import { SiGooglemaps } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';
import { FaMobileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import logo from '../../assets/photo/logo.png';
import { navLinkData } from '../../assets/constData/navLink';

const footerTitle = 'text-gold text-2xl font-raleway font-bold mb-4';
const footerIcon = 'text-xl text-gold mr-6';
const footerAdress = 'flex items-center mb-4';
const footerAdressText = 'text-lg font-droid text-white hover:text-gold';

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center bg-black">
      <div className="flex justify-between items-start w-[90%] h-[250px] my-8">
        <div className="relative z-0 flex flex-col w-[25%]">
          <img
            src={logo}
            alt="Company_logo"
            className="w-[250px] absolute 
            bottom-[25%]"
          />

          <span className="text-2xl text-gold mt-20">
            <strong className="text-white text-4xl">&ldquo;</strong>
            Стань героєм своєї історії та розкрий свій потенціал усередині себе
            з нашою професійною підтримкою
            <strong className="text-white text-4xl leading-3">&ldquo;</strong>
          </span>
        </div>

        <div className="h-full flex flex-col items-start justify-between">
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

        <div className="h-full flex flex-col items-center justify-between">
          <span className={footerTitle}> Навігація </span>

          {navLinkData.map((item) => (
            <Link
              key={item.id}
              to="/"
              className="text-xl text-white hover:text-gold"
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div className="flex flex-col">
          <span className={footerTitle}>Зв&lsquo;яжіться з нами</span>

          <span>text</span>

          <Link to="/"> 2 </Link>
        </div>
      </div>

      <div className="w-[95%] h-[2px] bg-zinc-600" />

      <div
        className="w-[90%] flex justify-between py-4 text-lg font-raleway
      text-white"
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
