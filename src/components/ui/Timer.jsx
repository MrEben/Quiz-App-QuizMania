import React, { useState, useEffect } from "react";

const Timer = () => {
  // Convert initial time to total seconds
  const [totalSeconds, setTotalSeconds] = useState(
    14 * 3600 + // hours to seconds
      52 * 60 + // minutes to seconds
      13 // seconds
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTotalSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Convert total seconds back to hours, minutes, seconds
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    <div>
      <div className="timer">
        <p>QUIZ STARTS IN</p>
        {/* <div className="countdown">
          <div className="time-unit">
            <span id="hours">{String(hours).padStart(2, "0")}</span>
            <span className="label">HOUR</span>
          </div>
          <div className="time-unit">
            <span id="minutes">{String(minutes).padStart(2, "0")}</span>
            <span className="label">MIN</span>
          </div>
          <div className="time-unit">
            <span id="seconds"> {String(seconds).padStart(2, "0")}</span>
            <span className="label">SEC</span>
          </div>
        </div> */}
        <div className="starts-in">
          <div className="bloc-time hours" data-init-value="0">
            <div className="figure hours hours-1">
              <span>{String(hours).padStart(2, "0")}</span>
            </div>
            <span className="count-title">Hour</span>
          </div>

          <div className="bloc-time min" data-init-value="36">
            <div className="figure min min-1">
              <span>{String(minutes).padStart(2, "0")}</span>
            </div>

            <span className="count-title">Min</span>
          </div>

          <div className="bloc-time sec" data-init-value="55">
            <div className="figure sec sec-1">
              <span>{String(seconds).padStart(2, "0")}</span>
            </div>

            <span className="count-title">Sec</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
