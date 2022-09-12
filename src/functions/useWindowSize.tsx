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


// const [size, setSize] = useState([0, 0]);
// useLayoutEffect(() => {
//     const updateSize = (): void => {
//         let TemporaryX = 0
//         let TemporaryY = 0
//         if (window.innerWidth > 1280) {
//             TemporaryX = Math.round(window.innerWidth / 3)
//             setSize([Math.round(window.innerWidth / 3), size[1]]);
//         }
//         else {
//             setSize([1280, size[1]]);
//         }
//         if (window.innerHeight > 720) {
//             TemporaryY = Math.round(window.innerHeight / 3)
//             setSize([size[0], Math.round(window.innerHeight / 3)]);
//         }
//         else {
//             setSize([size[0], 720]);
//         }
//         // setSize([TemporaryX, TemporaryY]);
//         console.log(size)
//         console.log("TemporaryX, TemporaryY")
//         console.log(TemporaryX, TemporaryY)
//     };
    
//     window.addEventListener('resize', updateSize);
//     updateSize();
//     return () => window.removeEventListener('resize', updateSize);
// }, []);
//   return size;


};