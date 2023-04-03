import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { navLinkData } from '../assets/constData/navLink';

import TopBar from './TopBar';
import Registration from './Registration';
import NavbarSmall from './NavbarSmall';

const NavBtn = 'transition delay-100 ease-linear hover:text-orange-400';

function Navbar() {
  const [buttonClick, setButtonClick] = useState(false);

  return (
    <>
      <TopBar />
      <nav
        className="sticky top-0 flex items-center w-full h-[90px] 
      bg-zinc-500 p-4 2xl:px-8"
      >
        <div
          className="flex justify-center items-center w-full text-white 
          text-xl font-medium	font-oswald xl:justify-between"
        >
          <div>
            <button
              type="button"
              className={`${NavBtn} hidden xl:block`}
              onClick={() => setButtonClick((prevState) => !prevState)}
            >
              Записатися на пробне заняття
            </button>
          </div>

          <div className="text-3xl xl:absolute xl:left-[42%] 2xl:left-[45%]">
            Zona Course
          </div>

          <div
            className="hidden w-full xl:w-1/3 xl:block xl:justify-between 
            xl:flex 2xl:w-1/4"
          >
            {navLinkData?.map((item) => (
              <Link key={item.id} to="/" className={NavBtn}>
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <NavbarSmall
          buttonClick={buttonClick}
          setButtonClick={setButtonClick}
        />
      </nav>
      {buttonClick && <Registration setButtonClick={setButtonClick} />}
    </>
  );
}

export default Navbar;
