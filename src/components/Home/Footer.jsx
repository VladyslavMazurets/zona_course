import React from 'react';
import { SiGooglemaps } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';
import { FaMobileAlt } from 'react-icons/fa';

import logo from '../../assets/photo/logo.png';

const footerIcon = 'text-gold';

function Footer() {
  return (
    <div className="flex items-center justify-center bg-black">
      <div className="flex justify-between w-[85%]">
        <div className="flex flex-col">
          <img src={logo} alt="Company_logo" className="w-[170px]" />

          <span className="text-white text-2xl font-bold">
            Зв&lsquo;яжіться з нами
          </span>

          <div>
            <SiGooglemaps className={footerIcon} />
          </div>
          <div>
            <FaMobileAlt className={footerIcon} />
          </div>
          <div>
            <FaMobileAlt className={footerIcon} />
          </div>
          <div>
            <FiMail className={footerIcon} />
          </div>
        </div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  );
}

export default Footer;
