import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { BookOpen } from "lucide-react";
export const Header = () => {
  const [selectedNav, SetselectedNav] = useState(6);
  const [showLinks, setShowLinks] = useState(false);
  const navElements = [
    {
      name: "Past Winners",
      href: "pastwinners",
    },
    {
      name: "Quiz",
      href: "questions",
    },
    {
      name: "LeaderBoard",
      href: "leaderboard",
    },
  ];
  const handleClick = (index) => {
    SetselectedNav(index);
    setShowLinks(!showLinks);
  };
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  // Remove the Nav color when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (linksRef.current && !linksRef.current.contains(event.target)) {
        SetselectedNav(6);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header>
      <nav className="custom-nav">
        <div className="logo">
          <BookOpen className="text-purple-600" size={24} />
          <Link to="/">QUIZMANIA</Link>
        </div>
        <ul ref={linksRef} className={showLinks ? "active" : ""}>
          {navElements.map((item, index) => {
            return (
              <li key={index} onClick={() => handleClick(index)}>
                <Link
                  className={selectedNav == index ? "selected" : ""}
                  to={item.href}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="auth-buttons">
          <Link to="login">
            <button className="login">Login</button>
          </Link>
          <Link to="register">
            <button className="register">Register</button>
          </Link>
          <BiMenuAltRight onClick={toggleLinks} />
        </div>
      </nav>
    </header>
  );
};
export default Header;
