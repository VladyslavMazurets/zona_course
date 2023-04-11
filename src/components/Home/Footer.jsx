import React from 'react';
import { SiGooglemaps } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';
import { FaMobileAlt } from 'react-icons/fa';

import logo from '../../assets/photo/logo.png';

const footerIcon = 'text-gold';
const footerAdress = 'flex items-center mb-4';
const footerAdressText = 'text-white';

function Footer() {
  return (
    <div className="flex items-center justify-center bg-black">
      <div className="flex justify-between w-[85%]">
        <div className="flex flex-col">
          <img src={logo} alt="Company_logo" className="w-[170px]" />

          <span className="text-gold text-2xl font-bold">
            Зв&lsquo;яжіться з нами
          </span>

          <div className={footerAdress}>
            <SiGooglemaps className={footerIcon} />
            <span className={footerAdressText}> Adress </span>
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
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  );
}

export default Footer;
