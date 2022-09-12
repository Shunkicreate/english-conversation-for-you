import { useLayoutEffect, useState } from 'react';

export const useWindowSize = (): number[] => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = (): void => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;

};

export const calWidth = (width:number) => {
    if (width > 1280) {
        return Math.round(width / 2)
    }
    else {
        return width
    }
}
export const calHeight = (width:number) => {
    return Math.round(calWidth(width) /16 * 9)
}