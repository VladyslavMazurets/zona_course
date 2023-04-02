import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import {
  FaTelegramPlane,
  FaFacebook,
  FaViber,
  FaTiktok,
  FaMobileAlt,
} from 'react-icons/fa';

const IconsTel = 'mr-2';
const TelBtn = 'flex items-center transition delay-100 hover:text-orange-600';
const SocialBtn = 'transition delay-100 ease-linear hover:text-orange-600';

function TopBar() {
  return (
    <div className="w-full h-14 bg-black">
      <div className="flex justify-between text-white items-center p-4">
        <div className="flex justify-around text-2xl w-1/6">
          <button
            className={SocialBtn}
            type="button"
            onClick={() =>
              window.open('https://www.instagram.com/evgenmazurets/')
            }
          >
            <AiOutlineInstagram />
          </button>
          <button
            className={`hover: ${SocialBtn}`}
            type="button"
            onClick={() => window.open('https://web.telegram.org/k/#555445824')}
          >
            <FaTelegramPlane />
          </button>
          <button
            className={`hover: ${SocialBtn}`}
            type="button"
            onClick={() =>
              window.open(
                'https://www.facebook.com/profile.php?id=100001731765715'
              )
            }
          >
            <FaFacebook />
          </button>
          <button
            className={`hover: ${SocialBtn}`}
            type="button"
            onClick={() => window.open('https://www.viber.com/')}
          >
            <FaViber />
          </button>
          <button
            className={`hover: ${SocialBtn}`}
            type="button"
            onClick={() => window.open('https://www.tiktok.com/')}
          >
            <FaTiktok />
          </button>
        </div>

        <div className="flex justify-around w-1/3">
          <a href="tel:+380978975064" className={TelBtn}>
            <FaMobileAlt className={IconsTel} /> +380 97 897 50 64
          </a>
          <a href="tel:+380978975064" className={TelBtn}>
            <FaMobileAlt className={IconsTel} /> +380 97 897 50 64
          </a>
          <a href="mailto:ogidj88@gmail.com" className={TelBtn}>
            <FiMail className={IconsTel} />
            ogidj88@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
