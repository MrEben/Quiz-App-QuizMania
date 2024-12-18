import React, { useState } from "react";
import {
  Search,
  Download,
  Mail,
  ArrowUpDown,
  MoreVertical,
} from "lucide-react";
import img from "../../assets/EBEN (2).jpg";

const Participants = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const participants = [
    {
      id: 1,
      name: "Sarah Johnson",
      img: img,
      email: "sarah.j@example.com",
      quizzesTaken: 8,
      avgScore: 92,
      lastActive: "2024-03-15",
      status: "active",
      completionRate: 100,
    },
    {
      id: 2,
      name: "Michael Chen",
      img: img,
      email: "m.chen@example.com",
      quizzesTaken: 5,
      avgScore: 78,
      lastActive: "2024-03-14",
      status: "inactive",
      completionRate: 60,
    },
    {
      id: 3,
      name: "Emma Wilson",
      img: img,
      email: "emma.w@example.com",
      quizzesTaken: 12,
      avgScore: 88,
      lastActive: "2024-03-16",
      status: "active",
      completionRate: 95,
    },
  ];

  const stats = [
    { label: "Total Participants", value: "1,234" },
    { label: "Active This Week", value: "856" },
    { label: "Avg. Completion Rate", value: "78%" },
    { label: "Avg. Score", value: "82%" },
  ];

  // Filter participants based on search term and selected filter
  const filteredParticipants = participants.filter((participant) => {
    const matchesSearch =
      participant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      participant.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" || participant.status === selectedFilter;

    return matchesSearch && matchesFilter;
  });

  // Function to convert JSON data to CSV and download
  const exportToCSV = () => {
    const csvData = [
      [
        "ID",
        "Name",
        "Email",
        "Quizzes Taken",
        "Avg. Score",
        "Completion Rate",
        "Last Active",
        "Status",
      ],
      ...participants.map((p) => [
        p.id,
        p.name,
        p.email,
        p.quizzesTaken,
        p.avgScore,
        `${p.completionRate}%`,
        p.lastActive,
        p.status,
      ]),
    ];

    const csvContent = csvData
      .map((row) => row.map((item) => `"${item}"`).join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "participants.csv";
    link.click();

    URL.revokeObjectURL(url); // Clean up
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Participants</h1>
          <p className="text-black mt-1">
            Manage and analyze quiz participants
          </p>
        </div>
        <div className="flex space-x-3 text-black">
          <button
            className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-100"
            onClick={exportToCSV}
          >
            <Download size={20} />
            <span>Export</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            <Mail size={20} />
            <span>Invite Participants</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <p className="text-sm text-black">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Filters and Search */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4 text-black">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search participants..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>
        <div className="flex space-x-2">
          {["all", "active", "inactive"].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-lg text-sm ${
                selectedFilter === filter
                  ? "bg-purple-100 text-purple-700"
                  : "text-black hover:bg-gray-100"
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Participants Table */}
      <div className="bg-white rounded-xl border overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-800">
                <div className="flex items-center space-x-1 cursor-pointer">
                  <span>Participant</span>
                  <ArrowUpDown size={16} />
                </div>
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-800">
                Quizzes Taken
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-800">
                Avg. Score
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-800">
                Completion Rate
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-800">
                Last Active
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-800">
                Status
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-800"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredParticipants.map((participant) => (
              <tr key={participant.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={participant.img}
                      alt={participant.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className="font-medium text-gray-900">
                        {participant.name}
                      </p>
                      <p className="text-sm text-gray-800">
                        {participant.email}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-800">
                  {participant.quizzesTaken}
                </td>
                <td className="px-6 py-4 text-gray-800">
                  {participant.avgScore}%
                </td>
                <td className="px-6 py-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full"
                      style={{ width: `${participant.completionRate}%` }}
                    ></div>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-800">
                  {new Date(participant.lastActive).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      participant.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {participant.status.charAt(0).toUpperCase() +
                      participant.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <MoreVertical size={20} className="text-gray-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredParticipants.length === 0 && (
          <div className="p-6 text-center text-gray-800">
            No participants found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Participants;
