import { useEffect, useRef } from 'react';

const useClickOutside = (handler) => {
  const domNode = useRef(null);

  useEffect(() => {
    const maybeHandler = ({ target }) => {
      if (domNode.current.contains(target)) {
        handler();
      }
    };

    document.addEventListener('mousedown', maybeHandler);

    return () => {
      document.removeEventListener('mousedown', maybeHandler);
    };
  });

  return domNode;
};

export default useClickOutside;
