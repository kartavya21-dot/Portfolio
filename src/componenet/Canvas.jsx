import React, { useRef, useEffect } from "react";

const Canvas = ({ dots }) => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const shouldRenderRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        shouldRenderRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );

    observer.observe(canvas);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((dot) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, canvas.width / 400, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.fill();
        
        const dx = mouseRef.current.x - dot.x;
        const dy = mouseRef.current.y - dot.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < canvas.width / 10) {
          ctx.strokeStyle = dot.color;
          ctx.lineWidth = canvas.width / 600;
          ctx.beginPath();
          ctx.moveTo(mouseRef.current.x, mouseRef.current.y);
          ctx.lineTo(dot.x, dot.y);
          ctx.stroke();
        }
      });
    };
    
    render();

    
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      render();
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [dots]);

  return <canvas ref={canvasRef} style={{ width: "100dvw", height: "100dvw" }} />;
};

export default Canvas;
