import React, { useState } from "react";
import {
  ArrowLeft,
  Plus,
  Trash2,
  GripVertical,
  Camera,
  Clock,
  Settings,
  HelpCircle,
  Save,
} from "lucide-react";
import { useGlobalContext } from "../../context/userContext";

const CreateQuizPage = ({ setActiveSection }) => {
  const {
    quizTitle,
    quizDescription,
    category,
    timeLimit,
    questions,
    setQuizTitle,
    setQuizDescription,
    setCategory,
    setTimeLimit,
    setQuestions,
  } = useGlobalContext();

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      {/* Top Navigation */}
      <div className="bg-white border-b px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* send you to previous page onclick feature */}
            <button
              className="p-2 hover:bg-gray-100 rounded-lg"
              onClick={() => setActiveSection("dashboard")}
            >
              <ArrowLeft className="w-5 h-5 text-black" />
            </button>
            <h1 className="text-xl font-bold">Create New Quiz</h1>
          </div>

          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-black hover:bg-gray-100 px-4 py-2 rounded-lg">
              <HelpCircle className="w-5 h-5" />
              <span>Help</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg">
              <Save className="w-5 h-5" />
              <span>Save Draft</span>
            </button>
            <button
              onClick={() => setActiveSection("publishsuccess")}
              className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white hover:bg-purple-700 rounded-lg"
            >
              <span>Publish Quiz</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-8">
        {/* Quiz Settings Card */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="p-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quiz Title
                </label>
                <input
                  type="text"
                  value={quizTitle}
                  onChange={(e) => setQuizTitle(e.target.value)}
                  placeholder="Enter quiz title"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={quizDescription}
                  onChange={(e) => setQuizDescription(e.target.value)}
                  placeholder="Enter quiz description"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                >
                  <option value="">Select category</option>
                  <option value="programming">Programming</option>
                  <option value="design">Design</option>
                  <option value="business">Business</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Time Limit
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black w-5 h-5" />
                  <input
                    type="number"
                    value={timeLimit}
                    onChange={(e) => setTimeLimit(e.target.value)}
                    placeholder="Time in minutes"
                    className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Questions Section */}
        <div className="space-y-6">
          {questions.map((question, index) => (
            <div
              key={question.id}
              className="bg-white rounded-lg shadow-sm relative"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <GripVertical className="text-black cursor-move w-5 h-5" />
                    <h3 className="font-medium">Question {index + 1}</h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    <select
                      value={question.type}
                      onChange={(e) => {
                        const newQuestions = [...questions];
                        newQuestions[index].type = e.target.value;
                        setQuestions(newQuestions);
                      }}
                      className="p-2 border rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                    >
                      <option value="multiple-choice">Multiple Choice</option>
                      <option value="true-false">True/False</option>
                      <option value="short-answer">Short Answer</option>
                    </select>
                    <button
                      className="p-2 hover:bg-gray-100 rounded-lg"
                      onClick={() => {
                        // Create a new copy of the questions array
                        const newQuestions = [...questions];

                        // Remove the question at the current index
                        newQuestions.splice(index, 1);

                        // Update the state with the modified questions array
                        setQuestions(newQuestions);
                      }}
                    >
                      <Trash2 className="w-4.5 h-4.5 text-black" />
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <textarea
                      placeholder="Enter your question"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                      rows={2}
                    />
                    <button className="mt-2 flex items-center space-x-2 text-sm text-black hover:text-gray-900">
                      <Camera className="w-4 h-4" />
                      <span>Add Image</span>
                    </button>
                  </div>

                  {question.type === "multiple-choice" && (
                    <div className="space-y-3">
                      {question.options.map((option, optionIndex) => (
                        <div
                          key={optionIndex}
                          className="flex items-center space-x-3"
                        >
                          <input
                            type="radio"
                            name={`question-${question.id}`}
                            className="w-4 h-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                          />
                          <input
                            type="text"
                            placeholder={`Option ${optionIndex + 1}`}
                            value={option}
                            onChange={(e) => {
                              const newQuestions = [...questions];
                              newQuestions[index].options[optionIndex] =
                                e.target.value;
                              setQuestions(newQuestions);
                            }}
                            className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                          />
                          <button
                            className="p-2 hover:bg-gray-100 rounded-lg"
                            onClick={() => {
                              const newQuestions = [...questions];
                              newQuestions[index].options.splice(
                                optionIndex,
                                1
                              );
                              setQuestions(newQuestions);
                            }}
                          >
                            <Trash2 className="w-4.5 h-4.5 text-black" />
                          </button>
                        </div>
                      ))}

                      <button
                        className="flex items-center space-x-2 text-sm text-purple-600 hover:text-purple-700"
                        onClick={() => {
                          const newQuestions = [...questions];
                          newQuestions[index].options.push("");
                          setQuestions(newQuestions);
                        }}
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add Option</span>
                      </button>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <label className="text-sm text-black">Points:</label>
                        <input
                          type="number"
                          value={question.points}
                          onChange={(e) => {
                            const newQuestions = [...questions];
                            newQuestions[index].points =
                              parseInt(e.target.value, 10) || 1; // Ensure a minimum value of 1
                            setQuestions(newQuestions);
                          }}
                          className="w-16 p-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                          min="1"
                        />
                      </div>
                    </div>
                    <button className="flex items-center space-x-2 text-sm text-black hover:text-gray-900">
                      <Settings className="w-4 h-4" />
                      <span>Advanced Options</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Question Button */}
        <button
          className="mt-6 w-full py-4 border-2 border-dashed border-gray-300 rounded-lg text-black hover:border-purple-600 hover:text-purple-600 flex items-center justify-center space-x-2"
          onClick={() => {
            setQuestions([
              ...questions,
              {
                id: questions.length + 1, // Generate a unique ID
                type: "multiple-choice", // Default type
                question: "",
                options: ["", "", "", ""], // Default options
                correctAnswer: null,
                points: 1, // Default points
              },
            ]);
          }}
        >
          <Plus className="w-5 h-5" />
          <span>Add Question</span>
        </button>

        {/* Quiz Settings */}
        <div className="bg-white rounded-lg shadow-sm mt-8">
          <div className="p-6">
            <h3 className="text-lg font-medium mb-4">Quiz Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Randomize Questions</p>
                  <p className="text-sm text-black">
                    Show questions in random order
                  </p>
                </div>
                <input
                  type="checkbox"
                  className="w-4 h-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Show Results Immediately</p>
                  <p className="text-sm text-black">
                    Display correct answers after submission
                  </p>
                </div>
                <input
                  type="checkbox"
                  className="w-4 h-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Required Passing Score</p>
                  <p className="text-sm text-black">
                    Set minimum score to pass
                  </p>
                </div>
                <input
                  type="number"
                  className="w-20 p-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                  placeholder="%"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Success Alert */}
        <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-green-800">
            Your quiz will be saved automatically as you make changes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateQuizPage;
