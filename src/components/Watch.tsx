'use client';

import React, { useState, useEffect } from 'react';

const Watch = () => {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!time) {
    return <div className="watch-placeholder" />;
  }

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');

  return (
    <div className="watch-container relative">
      <div className="watch">
        <div className="frame">
          <div className="text">
            <div>{hours}</div>
            <div>{minutes}</div>
          </div>
        </div>
      </div>
      <style>{`
        .watch {
          position: relative;
          transform: scale(0.7);
        }
        .watch::after,
        .watch::before {
          content: "";
          width: 10rem;
          height: 200px;
          background: radial-gradient(circle at 200px, rgb(0, 0, 0), rgb(48, 48, 48));
          box-shadow: inset 0px -10px 18px #ffffffb9, 10px 0px 30px #00000071;
          position: absolute;
          left: 50%;
          transform: translate(-50%, 0%);
        }
        .watch::before {
          content: "";
          width: 10rem;
          height: 200px;
          background: radial-gradient(circle at 200px, rgb(0, 0, 0), rgb(48, 48, 48));
          box-shadow: inset 0px 10px 18px #ffffffb9, 10px 0px 30px #00000071;
          position: absolute;
          left: 50%;
          transform: translate(-50%, -100%);
        }

        .frame {
          background: #0d0d0d;
          border-radius: 92px;
          box-shadow: inset 0 0 24px 1px #0d0d0d, inset 0 0 0 12px #606c78,
            0 20px 30px #00000071;
          height: 380px;
          margin: 0 20px;
          padding: 28px 26px;
          position: relative;
          width: 20rem;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        .text {
          color: #dddf8f;
          font-size: 10rem;
          font-family: serif;
          font-weight: bolder;
          line-height: 0.8;
          text-shadow: 0 0 40px #d7d886c7;
        }
        .frame::before {
          border: 1px solid #0d0d0d;
          border-radius: 80px;
          box-shadow: 0 0 12px rgba(255, 255, 255, 0.5),
            inset 0 0 12px 2px rgba(255, 255, 255, 0.75);
          content: "";
          height: 356px;
          left: 12px;
          position: absolute;
          top: 12px;
          width: 18.625rem;
        }

        .watch-placeholder {
          width: 320px; 
          height: 400px; /* Adjust according to component scaled size */
          transform: scale(0.7);
        }
      `}</style>
    </div>
  );
};

export default Watch;
