import React from 'react';

import TopBar from './TopBar';

function Navbar() {
  return (
    <>
      <TopBar />
      <div className="flex items-center w-full h-28 bg-orange-500 px-8">
        <div className="flex justify-between w-full">
          <div>
            <button type="button">Записатися на пробне заняття</button>
          </div>

          <div>Title</div>
          <div>
            <button type="button">Про школу</button>
            <button type="button">Курси</button>
            <button type="button">Акції</button>
            <button type="button">Галерея</button>
            <button type="button">Контакти</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
