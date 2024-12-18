import React, { useState } from "react";
import {
  ArrowLeft,
  Users,
  Clock,
  Award,
  BarChart2,
  Download,
  Share2,
  Edit,
} from "lucide-react";
import { useGlobalContext } from "../../context/userContext";
import QuizPerformanceChart from "../../components/ui/quiz-performance-chart";

const QuizDetailsPage = ({ setActiveSection }) => {
  const { selectedQuiz } = useGlobalContext(); // Access the selected quiz
  const [questionsdata, setQuestionsdata] = useState(selectedQuiz);

  // Sample question performance data
  const questionPerformance = [
    {
      id: 1,
      question: "What is a closure in JavaScript?",
      correctRate: 85,
      avgTime: "45s",
    },
    {
      id: 2,
      question: "Explain the difference between let and var",
      correctRate: 72,
      avgTime: "55s",
    },
    {
      id: 3,
      question: "How does prototype inheritance work?",
      correctRate: 65,
      avgTime: "90s",
    },
    {
      id: 4,
      question: "What is event bubbling?",
      correctRate: 78,
      avgTime: "40s",
    },
    { id: 5, question: "Explain async/await", correctRate: 68, avgTime: "80s" },
  ];

  const exportToCSV = () => {
    const csvData = [
      ["Question", "Correct Rate (%)", "Average Time"], // CSV header row
      ...questionPerformance.map((q) => [q.question, q.correctRate, q.avgTime]),
    ];

    // Convert the data to CSV format
    const csvContent = csvData
      .map((row) => row.map((item) => `"${item}"`).join(","))
      .join("\n");

    // Create a Blob with the CSV content
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

    // Create a link to download the file
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${questionsdata.title}-question-performance.csv`; // Download file with quiz title
    link.click();

    URL.revokeObjectURL(link.href); // Clean up the object URL
  };
  // Sample recent participants
  // recent partici should help me trace which particular quiz
  const recentParticipants = [
    {
      id: 1,
      name: "Sarah Johnson",
      score: 92,
      completedAt: "2024-03-15",
      time: "16:24",
    },
    {
      id: 2,
      name: "Mike Chen",
      score: 88,
      completedAt: "2024-03-15",
      time: "22:15",
    },
    {
      id: 3,
      name: "Alex Kumar",
      score: 75,
      completedAt: "2024-03-14",
      time: "19:30",
    },
    {
      id: 4,
      name: "Emma Wilson",
      score: 95,
      completedAt: "2024-03-14",
      time: "15:45",
    },
    {
      id: 5,
      name: "James Brown",
      score: 82,
      completedAt: "2024-03-14",
      time: "14:20",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Top Navigation */}
      <div className="bg-white border-b px-8 py-4">
        <div className="flex items-center">
          <button
            onClick={() => setActiveSection("dashboard")}
            className="mr-4 hover:bg-gray-100 p-2 rounded-lg"
          >
            <ArrowLeft size={20} className="text-black" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-900">
              {questionsdata.title}
            </h1>
            <p className="text-sm text-gray-500">
              Last modified on{" "}
              {new Date(questionsdata.lastModified).toLocaleDateString()}
            </p>
          </div>
          <div className="ml-auto flex items-center space-x-3">
            <button
              onClick={exportToCSV}
              className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
            >
              <Download size={18} />
              <span>Export</span>
            </button>
            <button
              onClick={() => setActiveSection("editquiz")}
              className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              <Edit size={18} />
              <span>Edit Quiz</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        <div className="grid grid-cols-4 gap-6 mb-8">
          {/* Stats Cards */}
          <div className="bg-white p-6 rounded-xl border">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Users size={20} className="text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-black">Total Participants</p>
                <p className="text-2xl font-bold">
                  {questionsdata.totalParticipants}
                  {/* this data should be fetched from useparams or contest */}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Award size={20} className="text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-black">Average Score</p>
                <p className="text-2xl font-bold">{questionsdata.avgScore}%</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <Clock size={20} className="text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-black">Avg. Duration</p>
                <p className="text-2xl font-bold">
                  {questionsdata.avgDuration}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border">
            <div className="flex items-center">
              <div className="p-2 bg-orange-100 rounded-lg">
                <BarChart2 size={20} className="text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-black">Passing Rate</p>
                <p className="text-2xl font-bold">76%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Chart */}
        <QuizPerformanceChart />

        {/* Question Performance */}
        <div className="bg-white rounded-xl border mb-8">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold">Question Performance</h2>
          </div>
          <div className="divide-y">
            {questionPerformance.map((question) => (
              <div
                key={question.id}
                className="p-6 flex items-center justify-between"
              >
                <div className="flex-1">
                  <p className="font-medium">{question.question}</p>
                  <div className="flex items-center mt-2">
                    <div className="w-48 h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-purple-600 rounded-full"
                        style={{ width: `${question.correctRate}%` }}
                      />
                    </div>
                    <span className="ml-3 text-sm text-black">
                      {question.correctRate}% correct
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-black">Avg. Time</p>
                  <p className="font-medium">{question.avgTime}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Participants */}
        <div className="bg-white rounded-xl border">
          <div className="p-6 border-b flex items-center justify-between">
            <h2 className="text-lg font-semibold">Recent Participants</h2>
            <button
              onClick={() => setActiveSection("participants")}
              className="text-purple-600 hover:text-purple-700"
            >
              View All
            </button>
          </div>
          <div className="divide-y">
            {recentParticipants.map((participant) => (
              <div
                key={participant.id}
                className="p-6 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <img
                    src="/api/placeholder/40/40"
                    alt={participant.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-4">
                    <p className="font-medium">{participant.name}</p>
                    <p className="text-sm text-gray-500">
                      Completed on{" "}
                      {new Date(participant.completedAt).toLocaleDateString()}{" "}
                      at {participant.time}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={`text-lg font-semibold ${
                      participant.score >= questionsdata.passingScore
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {participant.score}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizDetailsPage;
