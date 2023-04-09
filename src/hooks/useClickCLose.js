import { useState } from 'react';

export const useClickClose = (handler, time) => {
  const [close, setClose] = useState(false);

  const clickClose = () => {
    setClose(true);

    setTimeout(() => {
      handler();
      setClose(false);
    }, time);
  };

  return [close, clickClose];
};
