import React, { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";

const SearchDropdown = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Sample quiz data - replace with your actual data source
  const quizzes = [
    { id: 1, title: "JavaScript Basics" },
    { id: 2, title: "React Fundamentals" },
    { id: 3, title: "CSS Mastery" },
    { id: 4, title: "Python for Beginners" },
    { id: 5, title: "Data Structures" },
  ];

  // Filter quizzes based on search term
  const filteredQuizzes = quizzes.filter((quiz) =>
    quiz.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setIsDropdownOpen(true);
  };

  // Handle quiz selection
  const handleQuizSelect = (quiz) => {
    setSearchTerm(quiz.title);
    setIsDropdownOpen(false);
    // Add your logic here for what happens when a quiz is selected
  };

  return (
    <div className="relative flex-1 max-w-xl text-black" ref={dropdownRef}>
      <Search
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800"
        size={20}
      />
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search quizzes..."
        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      />

      {/* Dropdown */}
      {isDropdownOpen && searchTerm && (
        <div className="absolute w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto z-50">
          {filteredQuizzes.length > 0 ? (
            filteredQuizzes.map((quiz) => (
              <button
                key={quiz.id}
                onClick={() => handleQuizSelect(quiz)}
                className="w-full px-4 py-2 text-left hover:bg-purple-50 focus:bg-purple-50 focus:outline-none"
              >
                <span className="text-black">{quiz.title}</span>
              </button>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">No quizzes found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;
