import React, { useState } from "react";
import { Plus, Eye, Edit, Copy, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { quizData } from "../../data";
import { useGlobalContext } from "../../context/userContext";

const DashBoardContent = ({ setActiveSection }) => {
  const { selectedQuiz, setSelectedQuiz } = useGlobalContext();
  const [selectedTab, setSelectedTab] = useState("all");
  const [quizzes, setQuizzes] = useState(quizData);

  // Filter quizzes based on the selected tab
  const filteredQuizzes =
    selectedTab === "all"
      ? quizzes
      : quizzes.filter((quiz) => quiz.status === selectedTab);

  const handleButtonClick = () => {
    setActiveSection("create"); // This will update the active section
  };

  const handleDeleteQuiz = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this quiz?"
    );
    if (confirmDelete) {
      setQuizzes(quizzes.filter((quiz) => quiz.id !== id));
    }
  };

  const handleViewDetails = (quiz) => {
    setSelectedQuiz(quiz); // Set the selected quiz in global context
    setActiveSection("quiz-details"); // Update the active section
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex-1 max-w-xl">
          <h1 className="text-2xl font-bold text-gray-900">My Quizzes</h1>
          <p className="text-black mt-1">Create and manage your quizzes</p>
        </div>
        {/* clicking this button generatesa new quiz with a unique id */}
        <button
          onClick={handleButtonClick}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-purple-700"
        >
          <Plus size={20} />
          <span>Create New Quiz</span>
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex space-x-2">
          {["all", "published", "draft", "archived"].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm ${
                selectedTab === tab
                  ? "bg-purple-100 text-purple-700"
                  : "text-black hover:bg-gray-100"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Quiz Grid */}
      <div className="grid grid-cols-1 gap-4">
        {filteredQuizzes.map((quiz) => (
          <div
            key={quiz.id}
            className="bg-white p-6 rounded-xl border hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {quiz.title}
                </h3>
                <p className="text-sm text-gray-500">{quiz.category}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Link to="/editquiz">
                  {/* the button click workd only when you return to this page */}
                  <button
                    onClick={() => setSelectedQuiz(quiz)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <Edit size={18} className="text-black" />
                  </button>
                </Link>

                <button
                  className="p-2 hover:bg-gray-100 rounded-lg"
                  onClick={() => handleDeleteQuiz(quiz.id)}
                >
                  <Trash2 size={18} className="text-black" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-black">Questions</p>
                <p className="text-lg font-semibold">{quiz.questions}</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-black">Participants</p>
                <p className="text-lg font-semibold">
                  {quiz.totalParticipants}
                </p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-black">Avg. Score</p>
                <p className="text-lg font-semibold">{quiz.avgScore}%</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-black">Last Modified</p>
                <p className="text-lg font-semibold">
                  {new Date(quiz.lastModified).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  quiz.status === "published"
                    ? "bg-green-100 text-green-700"
                    : quiz.status === "draft"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {quiz.status.charAt(0).toUpperCase() + quiz.status.slice(1)}
              </span>
              {/* clicking on this button should lead to page with details of this option.could I use link with useparams. though im not doing a dynamc link setupset all is happenig inside the dashboard url. */}

              <button
                onClick={() => handleViewDetails(quiz)}
                className="text-purple-600 hover:text-purple-700 text-sm font-medium"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
        {filteredQuizzes.length === 0 && (
          <div className="p-6 text-center text-gray-500">
            No quizzes available in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default DashBoardContent;
