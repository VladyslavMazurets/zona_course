import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { navLinkData } from '../../assets/constData/navLink';
import logo from '../../assets/images/logo.png';

import TopBar from './TopBar';
import Registration from './Registration';
import NavbarSmall from './NavbarSmall';

const NavBtn =
  'transition delay-100 ease-linear font-raleway' +
  'font-semibold hover:text-gold';

function Navbar() {
  const [buttonClick, setButtonClick] = useState(false);

  return (
    <>
      <TopBar />
      <nav
        className="sticky top-0 flex items-center w-full h-[90px] 
      bg-zinc-700 p-4 2xl:px-8 z-50"
      >
        <div
          className="flex justify-center items-center w-full text-white 
          text-xl xl:justify-between"
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

          <div
            className=" xl:absolute w-[140px] h-[140px]
            xl:left-[42%] 2xl:w-[200px] 2xl:h-[200px] 2xl:left-[45%]"
          >
            <Link to="/">
              <img src={logo} alt="Inout_Logo" />
            </Link>
          </div>

          <div
            className="hidden w-full xl:w-1/3 xl:block xl:justify-between 
            xl:flex 2xl:w-1/4"
          >
            {navLinkData?.map((item) => (
              <Link key={item.id} to={item.link} className={NavBtn}>
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
