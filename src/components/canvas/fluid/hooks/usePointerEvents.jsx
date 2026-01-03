import { useEffect, useRef } from 'react';

import { Vector2 } from 'three';

const usePointerEvents = (mainRef, size, force) => {
  const splatStack = useRef([]);
  const lastMouse = useRef(new Vector2());
  const hasMoved = useRef(false);

  useEffect(() => {
    if (!mainRef.current) {
      return undefined;
    }

    const element = mainRef.current;

    const handlePointerMove = (event) => {
      const clientX = event.clientX || event.touches?.[0]?.clientX;
      const clientY = event.clientY || event.touches?.[0]?.clientY;

      if (clientX === undefined || clientY === undefined) return;

      const deltaX = clientX - lastMouse.current.x;
      const deltaY = clientY - lastMouse.current.y;

      if (!hasMoved.current) {
        hasMoved.current = true;
        lastMouse.current.set(clientX, clientY);
        return;
      }

      lastMouse.current.set(clientX, clientY);

      splatStack.current.push({
        mouseX: clientX / size.width,
        mouseY: 1.0 - clientY / size.height,
        velocityX: deltaX * force,
        velocityY: -deltaY * force,
      });
    };

    element.addEventListener('pointermove', handlePointerMove, { passive: true });

    return () => {
      element.removeEventListener('pointermove', handlePointerMove);
    };
  }, [mainRef, size, force]);

  return splatStack;
};

export default usePointerEvents;
