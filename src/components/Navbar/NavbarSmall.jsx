import React, { useState } from 'react';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';

import { navLinkData } from '../../assets/constData/navLink';
import logo from '../../assets/images/logo.png';
import { useClickClose } from '../../hooks/useClickCLose';

const NavBtn = 'mb-6 transition delay-100 ease-linear hover:text-gold md:mb-12';

function NavbarSmall({ setButtonClick }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [close, clickClose] = useClickClose(() => setToggleMenu(false), 800);

  const moveHome = !close
    ? 'animate-movehomeactive'
    : 'animate-movehomepassive';

  return (
    <div className="block xl:hidden">
      <RxHamburgerMenu
        className="text-2xl absolute top-[35%] right-[5%] text-white 
        md:right-[3%]"
        onClick={() => setToggleMenu(true)}
      />

      {toggleMenu && (
        <div
          className={`fixed top-0 left-0 w-full h-full flex flex-col 
            items-center justify-center 
            ${moveHome} bg-zinc-700`}
        >
          <div className="w-full text-white">
            <div
              className="absolute top-[-2%] left-5 w-[100px] h-[100px]
            min-[400px]:top-[-1%] md:w-[200px] md:top-[-4%] lg:top-[-5%]"
            >
              <img src={logo} alt="Inout_logo" />
            </div>
            <RxCross2
              onClick={clickClose}
              className="absolute top-5 right-[-5%] mr-8 transition delay-100 
              ease-linear text-2xl hover:text-gold md:text-3xl md:right-[-2%]"
            />
          </div>

          <div
            className="flex flex-col items-center text-xl text-white 
            font-oswald min-[400px]:text-2xl md:text-3xl"
          >
            {navLinkData?.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                onClick={clickClose}
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
             hover:bg-gold md:text-xl md:px-5"
          >
            Запис на курси
          </button>
        </div>
      )}
    </div>
  );
}

export default NavbarSmall;
