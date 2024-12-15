import { useEffect, useRef } from 'react';
import './cursor.css';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cursor2Ref = useRef<HTMLDivElement | null>(null);
  const cursor3Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursor2 = cursor2Ref.current;
    const cursor3 = cursor3Ref.current;

    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;

    const speed = 0.1;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      posX += (mouseX - posX) * speed;
      posY += (mouseY - posY) * speed;

      if (cursor) {
        cursor.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
      }
      if (cursor2) {
        cursor2.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
      }
      if (cursor3) {
        cursor3.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', moveCursor);
    animate();

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor2" ref={cursor2Ref} />
      <div className="cursor3" ref={cursor3Ref} />
    </>
  );
}
