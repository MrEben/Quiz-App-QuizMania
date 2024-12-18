import React, { useState } from "react";
import Timer from "../components/ui/Timer";
import { Link } from "react-router-dom";
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
        id: 1,
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
        username: "Akuausu",
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
        username: "Owusu",
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
        username: "Joe",
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
        username: "Ama",
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
        username: "Kofi",
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
// Function to calculate cumulative points for each user
const calculateLeaderboard = (data) => {
  const userPoints = {};

  Object.values(data).forEach((week) => {
    week.users.forEach((user) => {
      if (userPoints[user.username]) {
        userPoints[user.username].points += user.points;
      } else {
        userPoints[user.username] = {
          username: user.username,
          points: user.points,
        };
      }
    });
  });

  return Object.values(userPoints).sort((a, b) => b.points - a.points);
};

const LeaderBoard = () => {
  // Calculate leaderboard data
  const leaderboard = calculateLeaderboard(users);

  return (
    <div className="leaderboard-page">
      <div className="container">
        <div className="raffle-header">
          <div className="user-points">
            <div className="raffle-price">Your Score: 20pts</div>
            <Link to="/questions">
              <button className="btn">PLAY NOW</button>
            </Link>
          </div>

          <div className="raffle-info">
            <Timer />
          </div>
        </div>

        <div className="winners">
          <div className="top-3">
            {leaderboard.slice(0, 3).map((user, index) => (
              <div
                key={index}
                className="leader"
                id={["first", "second", "third"][index]}
              >
                <div className="medal">{["🥇", "🥈", "🥉"][index]}</div>
                <div className="name">{user.username}</div>
                <div className="wager">{user.points}pts</div>
              </div>
            ))}
          </div>

          <div className="leaderboard-list">
            {leaderboard.slice(3).map((user, index) => (
              <div key={index + 3} className="leaderboard-item">
                <span className="rank">{index + 4}</span>
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

export default LeaderBoard;
