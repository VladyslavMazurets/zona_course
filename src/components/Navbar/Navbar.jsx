import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TfiPencilAlt } from 'react-icons/tfi';

import { navLinkData } from '../../assets/constData/navLink';
import logo from '../../assets/images/logo.png';

import TopBar from './TopBar';
import Registration from './Registration';
import NavbarSmall from './NavbarSmall';

const NavBtn = `transition delay-100 ease-linear text-[22px] font-raleway
 hover:text-gold xl:text-xl`;

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
          xl:justify-between"
        >
          <div
            className="hidden w-full xl:w-1/3 xl:block xl:justify-between 
            xl:flex 2xl:w-[28%]"
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
            className="w-[190px] md:w-[220px] xl:absolute 
            xl:left-[44%] 2xl:w-[230px] 2xl:top-[20%] 
            2xl:left-[44%]"
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
          className="fixed z-10 bottom-14 right-[-9.5%] w-max h-max rotate-90 
          block flex items-center justify-center rounded-b-lg bg-gold 
          transition delay-[8000ms] ease-in hover:right-[-12.5%] 
          md:right-[-6%] md:hover:right-[-6.5%]
          md:top-72"
        >
          {/* <TfiPencilAlt
            onClick={() => setButtonClick(true)}
            className="text-2xl text-black cursor-pointer md:text-[28px]"
          /> */}
          <span
            className="py-1 px-2 text-sm text-zinc-900 font-droid font-bold
            uppercase tracking-[0.1em] cursor-pointer hover:text-lg 
            md:text-lg md:hover:text-xl
            xl:hover:text-2xl
            "
          >
            Вам Сюди
          </span>
        </div>
      )}
      {buttonClick && <Registration setButtonClick={setButtonClick} />}
    </>
  );
}

export default Navbar;
