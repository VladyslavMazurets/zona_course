import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TfiPencilAlt } from 'react-icons/tfi';

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
        className="sticky top-0 flex items-center w-full h-[90px] xl:h-[100px] 
      bg-zinc-900 p-4 2xl:px-8 z-20"
      >
        <div
          className="flex justify-center items-center w-full text-white 
          text-xl xl:justify-between"
        >
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
            className=" xl:absolute w-[240px]
            xl:left-[42%] 2xl:w-[260px] 2xl:top-[20%] 
            2xl:left-[45%]"
          >
            <Link to="/">
              <img src={logo} alt="Inout_Logo" />
            </Link>
          </div>
        </div>

        <NavbarSmall
          buttonClick={buttonClick}
          setButtonClick={setButtonClick}
        />
      </nav>

      {!buttonClick && (
        <div
          className="fixed z-50 bottom-6 right-0 w-[35px] h-[35px] block
      flex items-center justify-center rounded-l-lg bg-gold md:w-[40px]
      md:h-[40px] md:right-0 md:top-72"
        >
          <TfiPencilAlt
            onClick={() => setButtonClick(true)}
            className="text-2xl text-black cursor-pointer md:text-[28px]"
          />
        </div>
      )}
      {buttonClick && <Registration setButtonClick={setButtonClick} />}
    </>
  );
}

export default Navbar;
