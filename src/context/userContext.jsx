import { useState, createContext, useEffect, useContext } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);
  // write a single usestate to cover all the state values
  const [selectedQuiz, setSelectedQuiz] = useState("");
  const [quizTitle, setQuizTitle] = useState("");
  const [quizDescription, setQuizDescription] = useState("");
  const [category, setCategory] = useState("");
  const [timeLimit, setTimeLimit] = useState("");
  const [questions, setQuestions] = useState([
    {
      id: 1,
      type: "multiple-choice",
      question: "",
      options: ["", "", "", ""],
      correctAnswer: null,
      points: 1,
    },
  ]);

  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        quizTitle,
        setQuizTitle,
        quizDescription,
        setQuizDescription,
        category,
        setCategory,
        timeLimit,
        setTimeLimit,
        questions,
        setQuestions,
        selectedQuiz,
        setSelectedQuiz,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;

export const useGlobalContext = () => {
  return useContext(UserContext);
};
