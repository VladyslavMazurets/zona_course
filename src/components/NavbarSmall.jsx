import React, { useState } from 'react';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';

import { navLinkData } from '../assets/constData/navLink';

// eslint-disable-next-line max-len
const NavBtn =
  'mb-6 transition delay-100 ease-linear hover:text-orange-400 md:mb-12';

function NavbarSmall({ buttonClick, setButtonClick }) {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="block xl:hidden">
      <RxHamburgerMenu
        className="text-2xl absolute top-[35%] right-[5%] text-white 
        md:right-[3%]"
        onClick={() => setToggleMenu(true)}
      />

      {toggleMenu && (
        <div
          className="fixed top-0 left-0 w-full h-full transition delay-100
             ease-linear flex flex-col items-center justify-center bg-zinc-500"
        >
          <div
            className="absolute top-5 left-5 w-full flex text-2xl text-white
             font-oswald justify-between md:text-3xl"
          >
            <span className="text-2xl min-[400px]:text-3xl md:text-4xl">
              Zona Course
            </span>
            <RxCross2
              onClick={() => setToggleMenu(false)}
              className="mr-8 transition delay-100 ease-linear 
              hover:text-orange-500"
            />
          </div>

          <div
            className="flex flex-col items-center text-xl text-white 
            font-oswald min-[400px]:text-2xl md:text-3xl"
          >
            {navLinkData?.map((item) => (
              <Link
                key={item.id}
                to="/"
                onClick={() => setToggleMenu(false)}
                className={NavBtn}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => {
              setButtonClick(true);
              setToggleMenu(false);
            }}
            className="mt-4 p-3 bg-white rounded-lg transition delay-100
             ease-linear font-semibold font-droid hover:text-white 
             hover:bg-orange-500 md:text-xl md:px-5"
          >
            Запис на курси
          </button>
        </div>
      )}
    </div>
  );
}

export default NavbarSmall;
