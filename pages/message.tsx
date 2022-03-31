import { useEffect } from 'react';
import { useRouter } from 'next/router';

import confetti from 'canvas-confetti'; 


const defaults = { particleCount: 50, startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function Message() {
  const router = useRouter();
  const { m } = router.query;

  useEffect(() => {
    const intervalId = setInterval(() => {
      confetti({
        ...defaults,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        origin: { x: randomInRange(0.3, 0.6), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        origin: { x: randomInRange(0.6, 0.9), y: Math.random() - 0.2 },
      });

      return () => clearInterval(intervalId);
    }, 500);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md px-4 text-4xl font-extrabold animate-bounce work-keep-all">{m}</div>
    </div>
  );
}

export default Message;
