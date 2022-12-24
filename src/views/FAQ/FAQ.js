import "./FAQ.css";
import Questions from "./Questions";
import { useState } from "react";

const FAQ = () => {
  const [questions, setQuestions] = useState([
    {
      Q: "Question",
      P: (
        <>
          Answers
          <br />
        </>
      ),
      id: 1,
      expand: false,
    },

    {
      Q: "Question",
      P: (
        <>
          Answers
          <br />
        </>
      ),
      id: 2,
      expand: false,
    },

    {
      Q: "Question",
      P: (
        <>
          Answers
          <br />
        </>
      ),
      id: 3,
      expand: false,
    },

    {
      Q: "Question",
      P: (
        <>
          Answers
          <br />
        </>
      ),
      id: 4,
      expand: false,
    },
  ]);

  const toggleQuestion = (id) => {
    setQuestions(
      questions.map((question) =>
        question.id === id
          ? { ...question, expand: !question.expand }
          : question
      )
    );
  };
  return (
    <section className="ele-container">
      <div className="faq-container" id="faq">
        {/* FAQ's */}
        <div className="header">
          <h1>FAQ</h1>
        </div>

        {/* Dropdown bars */}
        {/* <div /* className="question"> */}
        <div className="question-container">
          {questions.length > 0 ? (
            <Questions questions={questions} onToggle={toggleQuestion} />
          ) : (
            "None"
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
