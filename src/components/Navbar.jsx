import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import TopBar from './TopBar';
import Registration from './Registration';

const NavBtn = 'transition delay-100 ease-linear hover:text-orange-400';

function Navbar() {
  const [buttonClick, setButtonClick] = useState(false);

  return (
    <>
      <TopBar />
      <div
        className="sticky top-0 flex items-center w-full h-[90px] 
      bg-zinc-500 px-8"
      >
        <div
          className="flex justify-between w-full text-white text-xl 
          font-medium	font-oswald"
        >
          <div>
            <button
              type="button"
              className={NavBtn}
              onClick={() => setButtonClick((prevState) => !prevState)}
            >
              Записатися на пробне заняття
            </button>
          </div>

          <div className="absolute left-[46%] top-[30%] text-3xl">
            Zona Course
          </div>

          <div className="flex justify-between w-1/4">
            <Link to="/" className={NavBtn}>
              Про школу
            </Link>
            <Link to="/" className={NavBtn}>
              Курси
            </Link>
            <button type="button" className={NavBtn}>
              Акції
            </button>
            <Link to="/" className={NavBtn}>
              Галерея
            </Link>
            <Link to="/" className={NavBtn}>
              Контакти
            </Link>
          </div>
        </div>
      </div>
      {buttonClick && <Registration setButtonClick={setButtonClick} />}
    </>
  );
}

export default Navbar;
