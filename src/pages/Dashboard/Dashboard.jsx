import React, { useState, useEffect } from "react";
import {
  Layout,
  BookOpen,
  Users,
  BarChart2,
  Settings,
  Plus,
  Search,
  MoreHorizontal,
  Edit,
  Trash2,
  Copy,
  Eye,
  Bell,
  ChevronDown,
} from "lucide-react";
import { Link, NavLink, Outlet } from "react-router-dom";
import SearchDropdown from "../../components/ui/SearchDropdown";
import DashBoardContent from "./DashBoardContent";
import Participants from "./Participants";
import CreateQuizPage from "./CreateNewQuiz";
import QuizDetailsPage from "./QuizDetails";
import QuizPublishSuccess from "./QuizPublishSuccess";
import SettingsPage from "./Settings";
import img from "../../assets/EBEN (2).jpg";
import EditQuizPage from "./EditQuiz";

const QuizDashboard = () => {
  const [notifications, setNotifications] = useState(3); // Number of unread notifications
  const [activeSection, setActiveSection] = useState("dashboard");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading content whenever the active section changes
    if (activeSection) {
      setIsLoading(true); // Show loader
      const timer = setTimeout(() => {
        setIsLoading(false); // Hide loader after 2 seconds (simulating content loading)
      }, 500);

      return () => clearTimeout(timer); // Clean up timer if component unmounts or section changes
    }
  }, [activeSection]); // Trigger when activeSection changes

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const menuItems = [
    {
      id: "dashboard",
      path: "/dashboard",
      icon: <Layout size={20} />,
      text: "Dashboard",
    },
    {
      id: "participants",
      path: "/dashboard/participants",
      icon: <Users size={20} />,
      text: "Participants",
    },
    {
      id: "create",
      path: "/dashboard/create",
      icon: <Users size={20} />,
      text: "Create New",
    },
    {
      id: "settings",
      path: "/dashboard/settings",
      icon: <Settings size={20} />,
      text: "Settings",
    },
  ];

  // const renderContent = () => {
  //   switch (activeSection) {
  //     case "dashboard":
  //       return <DashBoardContent setActiveSection={setActiveSection} />;
  //     // case "quizzes":
  //     //   return <MyQuizzes />;
  //     case "participants":
  //       return <Participants />;
  //     case "create":
  //       return <CreateQuizPage setActiveSection={setActiveSection} />;
  //     case "editquiz":
  //       return <EditQuizPage setActiveSection={setActiveSection} />;
  //     case "settings":
  //       return <SettingsPage />;
  //     case "publishsuccess":
  //       return <QuizPublishSuccess />;
  //     case "quiz-details":
  //       return <QuizDetailsPage setActiveSection={setActiveSection} />;
  //     default:
  //       return <DashBoardContent />;
  //   }
  // };

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800 dashboard">
      {/* Sidebar */}
      <div
        className="w-64 bg-white p-6 flex flex-col border-r"
        style={{
          height: "100vh",
          position: "sticky",
          top: 0,
          overflowY: "auto",
        }}
      >
        <div className="flex items-center space-x-2 mb-8 text-black">
          <BookOpen className="text-purple-600" size={24} />
          <Link to="/">
            <h1 className="text-xl font-bold">QUIZMANIA</h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="space-y-2 flex-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              onClick={() => setActiveSection(item.id)}
              className={`flex items-center w-full p-3 rounded-lg cursor-pointer ${
                activeSection === item.id
                  ? "bg-purple-100 text-purple-900"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.icon}
              <span className="ml-3">{item.text}</span>
            </NavLink>
          ))}
        </nav>

        {/* Pro Features */}
        <div className="mt-auto p-4 bg-purple-50 rounded-xl">
          <h3 className="font-medium text-purple-900">
            Pro Features Available
          </h3>
          <p className="text-sm text-purple-700 mt-1">
            Unlock advanced analytics and custom branding
          </p>
          <button className="mt-3 w-full bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700">
            Upgrade Now
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Navigation Bar */}
        <div className="bg-white border-b px-8 py-4">
          <div className="flex items-center justify-between">
            <SearchDropdown />

            <div className="flex items-center space-x-4">
              {/* Settings Button */}
              <button
                onClick={() => setActiveSection("settings")}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <Settings size={20} className="text-black" />
              </button>

              <NotificationBell />

              <div className="relative">
                {/* User Profile Section */}
                <div
                  className="flex items-center space-x-3 border-l pl-4 cursor-pointer"
                  onClick={toggleDropdown}
                >
                  <img
                    src={img}
                    alt="User avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="hidden md:block">
                    <p className="text-sm font-medium text-gray-700">
                      Ebenezer Odame
                    </p>
                    <p className="text-xs text-gray-500">Premium Plan</p>
                  </div>
                  <ChevronDown size={16} className="text-gray-500" />
                </div>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-10"
                  >
                    <ul className="py-1 text-sm text-gray-700">
                      <li>
                        <button
                          className="w-full text-left px-4 py-2 hover:bg-gray-100"
                          onClick={() => setActiveSection("settings")}
                        >
                          Profile
                        </button>
                      </li>
                      <li>
                        <button
                          className="w-full text-left px-4 py-2 hover:bg-gray-100"
                          onClick={() => alert("Settings clicked")}
                        >
                          Settings
                        </button>
                      </li>
                      <li>
                        <button
                          className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                          onClick={() => alert("Logout clicked")}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Dynamic Content Area */}
        <Outlet />
        {/* {isLoading ? (
          <div className="flex items-center justify-center h-screen">
            <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
            <p className="ml-4">Loading...</p>
          </div>
        ) : (
          renderContent()
        )} */}
      </div>
    </div>
  );
};

const NotificationBell = () => {
  const [notifications, setNotifications] = useState([
    "New comment on your post",
    "You have a new follower",
    "Reminder: Meeting at 3 PM",
  ]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const clearNotifications = () => {
    setNotifications([]);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative">
      {/* Notification Bell */}
      <button
        className="p-2 hover:bg-gray-100 rounded-lg relative"
        onClick={toggleDropdown}
      >
        <Bell size={20} className="text-black" />
        {notifications.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {notifications.length}
          </span>
        )}
      </button>

      {/* Notification Dropdown */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          {notifications.length > 0 ? (
            <>
              <ul className="max-h-60 overflow-auto">
                {notifications.map((notification, index) => (
                  <li
                    key={index}
                    className="p-4 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    {notification}
                  </li>
                ))}
              </ul>
              <button
                className="w-full text-center p-2 text-sm text-red-600 hover:bg-gray-100"
                onClick={clearNotifications}
              >
                Clear All Notifications
              </button>
            </>
          ) : (
            <div className="p-4 text-sm text-gray-500 text-center">
              No notifications
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizDashboard;
