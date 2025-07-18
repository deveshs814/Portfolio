import React, { useEffect, useRef } from "react";

const CursorTrail = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const visible = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (x, y) => {
      const size = Math.random() * 4 + 2;
      particles.current.push({
        x,
        y,
        size,
        alpha: 1,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.01;

        if (p.alpha <= 0) {
          particles.current.splice(i, 1);
        } else {
          ctx.beginPath();
          ctx.fillStyle = `rgba(255, 105, 180, ${p.alpha})`;
          ctx.shadowColor = "rgba(255, 105, 180, 0.6)";
          ctx.shadowBlur = 10;
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const onMouseMove = (e) => {
      if (!visible.current) {
        canvas.style.display = "block";
        visible.current = true;
      }

      mouse.current = { x: e.clientX, y: e.clientY };
      for (let i = 0; i < 2; i++) {
        createParticle(mouse.current.x, mouse.current.y);
      }
    };

    const onMouseLeave = () => {
      visible.current = false;
      canvas.style.display = "none";
      particles.current = [];
    };

    const onMouseEnter = () => {
      visible.current = true;
      canvas.style.display = "block";
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[9999] pointer-events-none"
    />
  );
};

export default CursorTrail;
