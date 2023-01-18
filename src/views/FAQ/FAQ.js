import "./FAQ.css";
import Questions from "./Questions";
import { useState } from "react";

const FAQ = () => {
  const [questions, setQuestions] = useState([
    {
      Q: "What is a Hackathon?",
      P: (
        <>
          A hackathon is an event where individuals or teams come together to
          collaborate and build innovative projects in a short period of time,
          usually within 24 hours.
        </>
      ),
      id: 1,
      expand: false,
    },

    {
      Q: "Is BeachHacks 7.0 online or in-person?",
      P: <>BeachHacks is back to in-person only!</>,
      id: 2,
      expand: false,
    },

    {
      Q: "Who can participate in BeachHacks?",
      P: (
        <>
          BeachHacks registration is open to all college students, regardless of
          major! We also accept registrations from CSULB alumni who have
          graduated within the past year. Click [here] to submit your
          registration!
          <br />
          Due to the limited space, we have a cap of 150 participants. Once
          we've received all the registrations, we'll send out emails to let you
          know if you've been selected to participate. We'll do our best to
          accommodate as many participants as possible, but please keep in mind
          that current CSULB students will receive priority.
        </>
      ),
      id: 3,
      expand: false,
    },

    {
      Q: "How do I register for BeachHacks?",
      P: (
        <>
          We're thrilled that you're interested in joining us for BeachHacks! To
          register, simply fill out the registration form on our website.
          <br />
          Due to the limited space, we have a cap of 150 participants. Once
          we've received all the registrations, we'll send out emails to let you
          know if you've been selected to participate. We'll do our best to
          accommodate as many participants as possible, but please keep in mind
          that current CSULB students will receive priority.
        </>
      ),
      id: 4,
      expand: false,
    },

    {
      Q: "What type of projects can I work on at BeachHacks?",
      P: (
        <>
          Project types can vary widely and can be in the areas such as web
          development, software development, hardware, game development, data
          science, artificial intelligence, virtual reality, internet of things,
          and many more.
          <br />
          However, it's important to note that all projects must be started
          during the event and should not be pre-existing projects. This is to
          ensure the spirit of creativity, innovation, and teamwork is upheld
          throughout the hackathon. We encourage you to be creative and think
          outside the box when coming up with ideas!
        </>
      ),
      id: 5,
      expand: false,
    },

    {
      Q: "What are the rules for participating in BeachHacks?",
      P: (
        <>
          Answers
          <br />
        </>
      ),
      id: 6,
      expand: false,
    },

    {
      Q: "What should I bring to BeachHacks?",
      P: (
        <>
          You should bring your own computer, chargers, necessary equipment, and
          any other materials you may need to work on your project. For hardware
          projects, we will have a selection of materials from our sponsor,
          Arduino!
          <br />
        </>
      ),
      id: 7,
      expand: false,
    },

    {
      Q: "How can I contact the BeachHacks team if I have additional questions?",
      P: (
        <>
          Contact our team through our social media channels, or email us at
          beachhacks@csulb.acm.org. We look forward to hearing from you!
          <br />
        </>
      ),
      id: 8,
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
    <section className="faq-container" id="faq">
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
    </section>
  );
};

export default FAQ;
