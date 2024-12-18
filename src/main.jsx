import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import LeaderBoard from "./pages/LeaderBoard";
import PastWinners from "./pages/PastWinners";
import Questions from "./pages/Questions";
import Logout from "./pages/Logout";
import UserProvider from "./context/userContext";
import QuizDashboard from "./pages/Dashboard/Dashboard";
import DashBoardContent from "./pages/Dashboard/DashBoardContent";
import EditQuiz from "./pages/Dashboard/EditQuiz";
import CreateQuizPage from "./pages/Dashboard/CreateNewQuiz";
import Participants from "./pages/Dashboard/Participants";
import SettingsPage from "./pages/Dashboard/Settings";
import QuizPublishSuccess from "./pages/Dashboard/QuizPublishSuccess";
import QuizDetailsPage from "./pages/Dashboard/QuizDetails";
import Submitted from "./pages/Submitted";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserProvider>
        <Layout />
      </UserProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "leaderboard",
        element: <LeaderBoard />,
      },
      {
        path: "questions",
        element: <Questions />,
      },
      {
        path: "submitted",
        element: <Submitted />,
      },
      {
        path: "profile/:id",
        element: <UserProfile />,
      },
      {
        path: "pastwinners",
        element: <PastWinners />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
      {
        path: "dashboard",
        element: <QuizDashboard />, // Parent layout for dashboard
        children: [
          {
            index: true, // Default child route for the dashboard
            element: <DashBoardContent />,
          },
          {
            path: "participants",
            element: <Participants />,
          },
          {
            path: "create",
            element: <CreateQuizPage />,
          },
          {
            path: "editquiz",
            element: <EditQuiz />,
          },
          {
            path: "settings",
            element: <SettingsPage />,
          },
          {
            path: "publishsuccess",
            element: <QuizPublishSuccess />,
          },
          {
            path: "quizdetails",
            element: <QuizDetailsPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
