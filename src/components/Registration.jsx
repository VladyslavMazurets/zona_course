import React from 'react';

const Label = 'flex flex-col w-full';
const Title = 'my-4 text-xl font-oswald';

function Registration() {
  return (
    <>
      <div className="w-full h-screen bg-black fixed top-0 left-0 z-20 opacity-50 hidden sm:block" />
      <div className="fixed top-[40%] left-[40%] w-1/4 h-max bg-zinc-500 z-30">
        <form
          onSubmit=""
          className="flex flex-col h-full w-full items-start p-8"
        >
          <label htmlFor="name" className={Label}>
            <p className={Title}>Ваше імя</p>
            <input id="name" type="text" placeholder="Ім'я" required />
          </label>

          <label htmlFor="telNum" className={Label}>
            <p className={Title}>Ваш номер телефону</p>
            <input
              id="telNum"
              type="tel"
              placeholder="Номер телефону"
              required
            />
          </label>

          <label htmlFor="email" className={Label}>
            <p className={Title}>Ваш Email</p>
            <input id="email" type="email" placeholder="Email" required />
          </label>
          <button type="submit"> Записатися зараз </button>
        </form>
      </div>
    </>
  );
}

export default Registration;
