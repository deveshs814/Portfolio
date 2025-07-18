import React, { useEffect, useRef } from "react";

const CursorTrail = () => {
  const dotRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const dot = dotRef.current;

    const moveMouse = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      dot.style.opacity = "1";
    };

    const hideCursor = () => {
      dot.style.opacity = "0";
    };

    // Smooth trailing loop
    const followMouse = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.1;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.1;

      dot.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;

      requestAnimationFrame(followMouse);
    };

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mouseout", hideCursor);
    window.addEventListener("mouseenter", moveMouse);

    followMouse();

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mouseout", hideCursor);
      window.removeEventListener("mouseenter", moveMouse);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed z-[9999] w-4 h-4 bg-pink-500 rounded-full pointer-events-none mix-blend-difference opacity-0 transition-opacity duration-300"
    />
  );
};

export default CursorTrail;

