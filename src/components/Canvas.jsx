import React, { useRef, useEffect } from 'react';
import './canvas.css'
const Canvas = ({ onDrawFinish }) => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  let mouseX, mouseY;
  let lastX, lastY;
  let isDrawing = false;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctxRef.current = ctx;

    const handleMouseDown = (e) => {
      isDrawing = true;
      getMousePos(e);
      lastX = mouseX;
      lastY = mouseY;
    };

    const handleMouseUp = () => {
      if (isDrawing) {
        isDrawing = false;
        onDrawFinish(canvas); // Call this if you need to do something when drawing finishes
      }
    };

    const handleMouseMove = (e) => {
      if (!isDrawing) return;
      getMousePos(e);
      draw(ctx, mouseX, mouseY);
    };

    const handleTouchStart = (e) => {
      isDrawing = true;
      getTouchPos(e);
      lastX = touchX;
      lastY = touchY;
      draw(ctx, touchX, touchY);
      e.preventDefault();
    };

    const handleTouchEnd = () => {
      if (isDrawing) {
        isDrawing = false;
        onDrawFinish(canvas); // Call this if you need to do something when drawing finishes
      }
    };

    const handleTouchMove = (e) => {
      if (!isDrawing) return;
      getTouchPos(e);
      draw(ctx, touchX, touchY);
      e.preventDefault();
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    canvas.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    canvas.addEventListener('touchmove', handleTouchMove);

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);

      canvas.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      canvas.removeEventListener('touchmove', handleTouchMove);
    };
  }, [onDrawFinish]);

  const getMousePos = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  };

  const getTouchPos = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    touchX = touch.pageX - rect.left;
    touchY = touch.pageY - rect.top;
  };

  const draw = (ctx, x, y) => {
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 15;
    ctx.lineJoin = ctx.lineCap = 'round';
    
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    
    ctx.closePath();
    ctx.stroke();

    lastX = x; // Update last position
    lastY = y; // Update last position
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Reset background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className='canvas-container'>
      <canvas
        ref={canvasRef}
        id="sketchpad"
        height="280"
        className='canvas-box'
      />
      <button className='clear-btn' onClick={handleClear}>
        <span className="shadow"></span>
        <span className="content">Clear</span>
      </button>
    </div>
  );
};

export default Canvas;
