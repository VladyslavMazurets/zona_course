import React from 'react';
import { Link } from 'react-router-dom';

import TopBar from './TopBar';

const NavBtn = 'transition delay-100 hover:text-orange-600';

function Navbar() {
  return (
    <>
      <TopBar />
      <div className="sticky top-0 flex items-center w-full h-28 bg-gray-200 px-8">
        <div className="flex justify-between w-full text-black text-xl font-medium">
          <div>
            <button type="button" className={NavBtn}>
              Записатися на пробне заняття
            </button>
          </div>

          <div className="absolute left-[46%] top-[35%] text-3xl">
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
    </>
  );
}

export default Navbar;
