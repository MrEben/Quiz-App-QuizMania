import React, { useState, useEffect } from "react";
import Timer from "../components/ui/Timer";
const users = {
  "2024-W09": {
    users: [
      {
        id: 1,
        username: "KofiMensah",
        points: 5,
        rank: 1,
        weekNumber: "2024-W09",
        quizDate: "2024-02-26",
        completionTime: "14:23",
        correctAnswers: 8,
        totalQuestions: 10,
      },
      {
        id: 2,
        username: "AmaAddo",
        points: 5,
        rank: 2,
        weekNumber: "2024-W09",
        quizDate: "2024-02-26",
        completionTime: "14:25",
        correctAnswers: 8,
        totalQuestions: 10,
      },
      {
        id: 3,
        username: "KwameOwusu",
        points: 5,
        rank: 3,
        weekNumber: "2024-W09",
        quizDate: "2024-02-26",
        completionTime: "14:20",
        correctAnswers: 7,
        totalQuestions: 10,
      },
      {
        id: 4,
        username: "YaaAsante",
        points: 5,
        rank: 4,
        weekNumber: "2024-W09",
        quizDate: "2024-02-26",
        completionTime: "14:28",
        correctAnswers: 7,
        totalQuestions: 10,
      },
      {
        id: 5,
        username: "AfiaDarkwah",
        points: 3,
        rank: 5,
        weekNumber: "2024-W09",
        quizDate: "2024-02-26",
        completionTime: "14:30",
        correctAnswers: 6,
        totalQuestions: 10,
      },
    ],
  },
  "2024-W10": {
    users: [
      {
        id: 1,
        username: "KofiMensah",
        points: 5,
        rank: 1,
        weekNumber: "2024-W10",
        quizDate: "2024-03-04",
        completionTime: "14:18",
        correctAnswers: 9,
        totalQuestions: 10,
      },
      {
        id: 6,
        username: "AmaAppiah",
        points: 5,
        rank: 2,
        weekNumber: "2024-W10",
        quizDate: "2024-03-04",
        completionTime: "14:22",
        correctAnswers: 8,
        totalQuestions: 10,
      },
      {
        id: 2,
        username: "AmaAddo",
        points: 3,
        rank: 3,
        weekNumber: "2024-W10",
        quizDate: "2024-03-04",
        completionTime: "14:24",
        correctAnswers: 8,
        totalQuestions: 10,
      },
      {
        id: 4,
        username: "YaaAsante",
        points: 3,
        rank: 4,
        weekNumber: "2024-W10",
        quizDate: "2024-03-04",
        completionTime: "14:26",
        correctAnswers: 7,
        totalQuestions: 10,
      },
      {
        id: 7,
        username: "KwesiBrown",
        points: 3,
        rank: 5,
        weekNumber: "2024-W10",
        quizDate: "2024-03-04",
        completionTime: "14:30",
        correctAnswers: 6,
        totalQuestions: 10,
      },
    ],
  },
  "2024-W11": {
    users: [
      {
        id: 3,
        username: "KwameOwusu",
        points: 5,
        rank: 1,
        weekNumber: "2024-W11",
        quizDate: "2024-03-11",
        completionTime: "14:15",
        correctAnswers: 9,
        totalQuestions: 10,
      },
      {
        id: 6,
        username: "AmaAppiah",
        points: 5,
        rank: 2,
        weekNumber: "2024-W11",
        quizDate: "2024-03-11",
        completionTime: "14:18",
        correctAnswers: 8,
        totalQuestions: 10,
      },
      {
        id: 5,
        username: "AfiaDarkwah",
        points: 3,
        rank: 3,
        weekNumber: "2024-W11",
        quizDate: "2024-03-11",
        completionTime: "14:25",
        correctAnswers: 7,
        totalQuestions: 10,
      },
      {
        id: 1,
        username: "KofiMensah",
        points: 3,
        rank: 4,
        weekNumber: "2024-W11",
        quizDate: "2024-03-11",
        completionTime: "14:27",
        correctAnswers: 6,
        totalQuestions: 10,
      },
      {
        id: 8,
        username: "KojoTetteh",
        points: 3,
        rank: 5,
        weekNumber: "2024-W11",
        quizDate: "2024-03-11",
        completionTime: "14:30",
        correctAnswers: 6,
        totalQuestions: 10,
      },
    ],
  },
  "2024-W12": {
    users: [
      {
        id: 7,
        username: "KwesiBrown",
        points: 5,
        rank: 1,
        weekNumber: "2024-W12",
        quizDate: "2024-03-18",
        completionTime: "14:12",
        correctAnswers: 9,
        totalQuestions: 10,
      },
      {
        id: 2,
        username: "AmaAddo",
        points: 5,
        rank: 2,
        weekNumber: "2024-W12",
        quizDate: "2024-03-18",
        completionTime: "14:14",
        correctAnswers: 8,
        totalQuestions: 10,
      },
      {
        id: 3,
        username: "KwameOwusu",
        points: 3,
        rank: 3,
        weekNumber: "2024-W12",
        quizDate: "2024-03-18",
        completionTime: "14:20",
        correctAnswers: 8,
        totalQuestions: 10,
      },
      {
        id: 8,
        username: "KojoTetteh",
        points: 3,
        rank: 4,
        weekNumber: "2024-W12",
        quizDate: "2024-03-18",
        completionTime: "14:22",
        correctAnswers: 7,
        totalQuestions: 10,
      },
      {
        id: 9,
        username: "AkuaOwusu",
        points: 3,
        rank: 5,
        weekNumber: "2024-W12",
        quizDate: "2024-03-18",
        completionTime: "14:24",
        correctAnswers: 7,
        totalQuestions: 10,
      },
      {
        id: 10,
        username: "AkuaOwusu",
        points: 3,
        rank: 6,
        weekNumber: "2024-W12",
        quizDate: "2024-03-18",
        completionTime: "14:24",
        correctAnswers: 7,
        totalQuestions: 10,
      },
      {
        id: 11,
        username: "AkuaOwusu",
        points: 3,
        rank: 7,
        weekNumber: "2024-W12",
        quizDate: "2024-03-18",
        completionTime: "14:24",
        correctAnswers: 7,
        totalQuestions: 10,
      },
      {
        id: 12,
        username: "AkuaOwusu",
        points: 3,
        rank: 8,
        weekNumber: "2024-W12",
        quizDate: "2024-03-18",
        completionTime: "14:24",
        correctAnswers: 7,
        totalQuestions: 10,
      },
      {
        id: 13,
        username: "AkuaOwusu",
        points: 3,
        rank: 9,
        weekNumber: "2024-W12",
        quizDate: "2024-03-18",
        completionTime: "14:24",
        correctAnswers: 7,
        totalQuestions: 10,
      },
      {
        id: 14,
        username: "AkuaOwusu",
        points: 3,
        rank: 10,
        weekNumber: "2024-W12",
        quizDate: "2024-03-18",
        completionTime: "14:24",
        correctAnswers: 7,
        totalQuestions: 10,
      },
    ],
  },
};

const PastWinners = () => {
  const [selectedWeek, setSelectedWeek] = useState("2024-W09");

  const handleWeekChange = (event) => {
    setSelectedWeek(event.target.value);
  };

  const currentWeekUsers = users[selectedWeek]?.users || [];

  return (
    <div className="leaderboard-page">
      <div className="container past-winners">
        <div className="raffle-header">
          <div className="user-points">
            <div className="raffle-price">Past Winners</div>
            <input
              type="week"
              id="weekSelect"
              name="weekSelect"
              min="2024-W09"
              max="2024-W20"
              value={selectedWeek}
              onChange={handleWeekChange}
              required
              className="week-input-wrapper"
            />
          </div>

          <div className="raffle-info">
            <div className="timer">
              {/* <span>Quiz starts in</span> */}
              {/* <Timer /> */}
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

export default PastWinners;
