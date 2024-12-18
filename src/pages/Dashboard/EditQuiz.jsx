import React from "react";
import { ArrowLeft, Save, HelpCircle, Trash2 } from "lucide-react";
import { useGlobalContext } from "../../context/userContext";

const EditQuizPage = ({ setActiveSection }) => {
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
            <button
              className="p-2 hover:bg-gray-100 rounded-lg"
              onClick={() => setActiveSection("dashboard")}
            >
              <ArrowLeft className="w-5 h-5 text-black" />
            </button>
            <h1 className="text-xl font-bold">Edit Quiz</h1>
          </div>

          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-black hover:bg-gray-100 px-4 py-2 rounded-lg">
              <HelpCircle className="w-5 h-5" />
              <span>Help</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg">
              <Save className="w-5 h-5" />
              <span>Save Changes</span>
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
                  <h3 className="font-medium">Question {index + 1}</h3>
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
                  </div>
                </div>

                <div>
                  <textarea
                    value={question.question}
                    onChange={(e) => {
                      const newQuestions = [...questions];
                      newQuestions[index].question = e.target.value;
                      setQuestions(newQuestions);
                    }}
                    placeholder="Enter your question"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                    rows={2}
                  />
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
                            newQuestions[index].options.splice(optionIndex, 1);
                            setQuestions(newQuestions);
                          }}
                        >
                          <Trash2 className="w-4.5 h-4.5 text-black" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Save Button */}
        <button
          className="mt-6 w-full py-4 border-2 border-dashed border-gray-300 rounded-lg text-black hover:border-purple-600 hover:text-purple-600 flex items-center justify-center space-x-2"
          onClick={() => {
            // Handle saving the quiz changes
          }}
        >
          <Save className="w-5 h-5" />
          <span>Save Changes</span>
        </button>
      </div>
    </div>
  );
};

export default EditQuizPage;
