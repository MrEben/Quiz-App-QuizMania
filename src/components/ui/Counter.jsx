import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
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
    <div className="timer">
      <p>QUIZ RESETS IN</p>
      <div className="countdown">
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
      </div>
    </div>
  );
};

export default CountdownTimer;

const answers = [
  {
    label: "A",
    name: "Milky Way Galaxy",
  },
  {
    label: "B",
    name: "Brown Eye Galaxy",
  },
  {
    label: "C",
    name: "Green Eye Galaxy",
  },
  {
    label: "D",
    name: "Yellow Eye Galaxy",
  },
];

const QuizWithTimer = () => {
  const [totalSeconds, setTotalSeconds] = useState(
    14 * 3600 + // hours
      52 * 60 + // minutes
      13 // seconds
  );
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTotalSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsTimeUp(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const handleClick = (answer) => {
    setSelected(answer);
  };

  const handleNext = () => {
    console.log("Selected answer:", selected);
  };

  return (
    <div className="questions-container">
      <div className="holder">
        {!isTimeUp ? (
          <div className="timer">
            <p>QUIZ RESETS IN</p>
            <div className="countdown">
              <div className="time-unit">
                <span id="hours">{String(hours).padStart(2, "0")}</span>
                <span className="label">HOUR</span>
              </div>
              <div className="time-unit">
                <span id="minutes">{String(minutes).padStart(2, "0")}</span>
                <span className="label">MIN</span>
              </div>
              <div className="time-unit">
                <span id="seconds">{String(seconds).padStart(2, "0")}</span>
                <span className="label">SEC</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="question-container">
            <div className="question">
              <p>1. Which Galaxy does our Solar System belong to?</p>
            </div>
            <div className="answers">
              {answers.map((item) => (
                <div
                  key={item.label}
                  className={
                    selected === item.name ? "answer selected-answer" : "answer"
                  }
                  onClick={() => handleClick(item.name)}
                >
                  <div className="option-label">{item.label}</div>
                  <div className="option-name">{item.name}</div>
                </div>
              ))}
            </div>
            <button id="next-button" onClick={handleNext} disabled={!selected}>
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
const LeaderBoard = () => {
  const [selectedWeek, setSelectedWeek] = useState("2024-W09");

  const handleWeekChange = (event) => {
    setSelectedWeek(event.target.value);
  };

  const currentWeekUsers = users[selectedWeek]?.users || [];

  return (
    <div className="leaderboard-page">
      <div className="container">
        <div className="raffle-header">
          <div className="user-points">
            <div className="raffle-price">Past Winners</div>
            <input
              type="week"
              id="weekSelect"
              name="weekSelect"
              min="2024-W09"
              max="2024-W35"
              value={selectedWeek}
              onChange={handleWeekChange}
              required
              className="week-input-wrapper"
            />
          </div>

          <div className="raffle-info">
            <div className="timer">
              <span>Quiz starts in</span>
              <div className="starts-in">
                <div className="bloc-time hours" data-init-value="0">
                  <div className="figure hours hours-1">
                    <span>0</span>
                  </div>
                  <span className="count-title">Hour</span>
                </div>

                <div className="bloc-time min" data-init-value="36">
                  <div className="figure min min-1">
                    <span>36</span>
                  </div>
                  <span className="count-title">Min</span>
                </div>

                <div className="bloc-time sec" data-init-value="55">
                  <div className="figure sec sec-1">
                    <span>55</span>
                  </div>
                  <span className="count-title">Sec</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="winners">
          <div className="leaderboard-list">
            {currentWeekUsers.map((user) => (
              <div key={user.id} className="leaderboard-item">
                <span className="rank">{user.rank}</span>
                <span className="name">{user.username}</span>
                <span className="wager">{user.points}pts</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
