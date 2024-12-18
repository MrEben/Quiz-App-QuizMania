import React, { useState } from "react";
import {
  Check,
  Copy,
  Share2,
  ArrowLeft,
  Eye,
  Globe,
  Lock,
  Users,
  Settings,
} from "lucide-react";

const QuizPublishSuccess = () => {
  const [copied, setCopied] = useState(false);
  const [visibility, setVisibility] = useState("public");

  const quizUrl = "quiz.app/take/js-fundamentals-xyz789";
  const quizCode = "XYZ789";

  const handleCopyUrl = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <div className="bg-white border-b px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <ArrowLeft size={20} className="text-gray-800" />
            </button>
            <h1 className="text-xl font-bold text-black">Quiz Published</h1>
          </div>

          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg">
              <Settings size={20} />
              <span>Quiz Settings</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white hover:bg-purple-700 rounded-lg">
              <Eye size={20} />
              <span>Preview Quiz</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-8">
        {/* Success Message */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <Check size={32} className="text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Quiz Successfully Published!
          </h2>
          <p className="text-gray-800">
            Your quiz is now ready to be shared with participants
          </p>
        </div>

        {/* Share Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
          <div className="p-6">
            <h3 className="text-lg font-medium mb-6">Share Quiz</h3>

            {/* Quiz URL */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quiz URL
              </label>
              <div className="flex items-center space-x-2">
                <div className="flex-1 flex items-center bg-gray-50 border rounded-lg p-3">
                  <Globe size={20} className="text-black mr-2" />
                  <span className="text-gray-800">{quizUrl}</span>
                </div>
                <button
                  onClick={handleCopyUrl}
                  className="flex items-center space-x-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg"
                >
                  <Copy size={20} className="text-gray-800" />
                  <span>{copied ? "Copied!" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* Quiz Code */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quiz Code
              </label>
              <div className="inline-block bg-purple-50 border border-purple-100 rounded-lg px-4 py-2">
                <span className="text-lg font-mono font-semibold text-purple-600">
                  {quizCode}
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-800">
                Participants can use this code to join the quiz
              </p>
            </div>

            {/* Quick Share Buttons */}
            <div className="flex items-center space-x-3 mb-6">
              <button className="flex-1 flex items-center justify-center space-x-2 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                <Share2 size={20} />
                <span>Share via Email</span>
              </button>
              <button className="flex-1 flex items-center justify-center space-x-2 p-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
                <Users size={20} />
                <span>Share to Class</span>
              </button>
            </div>

            {/* Visibility Settings */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quiz Visibility
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setVisibility("public")}
                  className={`flex items-center space-x-3 p-3 rounded-lg border-2 ${
                    visibility === "public"
                      ? "border-purple-600 bg-purple-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Globe
                    size={20}
                    className={
                      visibility === "public" ? "text-purple-600" : "text-black"
                    }
                  />
                  <div className="text-left">
                    <p className="font-medium">Public</p>
                    <p className="text-sm text-gray-800">
                      Anyone with the link can access
                    </p>
                  </div>
                </button>
                <button
                  onClick={() => setVisibility("private")}
                  className={`flex items-center space-x-3 p-3 rounded-lg border-2 ${
                    visibility === "private"
                      ? "border-purple-600 bg-purple-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Lock
                    size={20}
                    className={
                      visibility === "private"
                        ? "text-purple-600"
                        : "text-black"
                    }
                  />
                  <div className="text-left">
                    <p className="font-medium">Private</p>
                    <p className="text-sm text-gray-800">
                      Only invited users can access
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps Alert */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800">
            You can track quiz responses and participant performance in the
            Analytics dashboard.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizPublishSuccess;
