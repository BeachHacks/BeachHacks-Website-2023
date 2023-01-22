import "./FAQ.css";
import Questions from "./Questions";
import { useState } from "react";

const FAQ = () => {
  const [questions, setQuestions] = useState([
    {
      Q: "What is BeachHacks?",
      P: (
        <>
          Looking for an exciting opportunity to dive into exciting projects, network with industry professionals, and showcase your skills? Look no further than BeachHacks, the premier 24-hour hackathon at Cal State Long Beach! Join a community of talented students and industry professionals as you collaborate to bring your innovative ideas to life. With prizes, networking opportunities, and technical workshops, BeachHacks is the perfect platform for you to take your skills to the next level.
          <br />
        </>
      ),
      id: 1,
      expand: false,
    },

    {
      Q: "What is a hackathon?",
      P: (
        <>
          A hackathon is an event where individuals or teams come together to collaborate and build innovative projects in a short period of time, usually within 24 hours.
          <br />
        </>
      ),
      id: 2,
      expand: false,
    },

    {
      Q: "Is BeachHacks 7.0 online or in-person?",
      P: (
        <>
          BeachHacks is back to in-person only!
          <br />
        </>
      ),
      id: 3,
      expand: false,
    },

    {
      Q: "Who can participate in BeachHacks?",
      P: (
        <>
          BeachHacks registration is open to all college students, regardless of major! We also accept registrations from CSULB alumni who have graduated within the past year. <a href="/apply"><span>[Click Here]</span></a> to submit your registration!
          Due to the limited space, we have a cap of 150 participants. Once we've received all the registrations, we'll send out emails to let you know if you've been selected to participate.
          <br />
        </>
      ),
      id: 4,
      expand: false,
    },
    {
      Q: "How do I register for BeachHacks?",
      P: (
        <>
          We're thrilled that you're interested in joining us for BeachHacks! To register, simply fill out the registration form on our website.
          <br />
        </>
      ),
      id: 5,
      expand: false,
    },
    {
      Q: "What type of projects can I work on at BeachHacks?",
      P: (
        <>
          Project types can vary widely and can be in the areas such as web development, software development, hardware, game development, data science, artificial intelligence, virtual reality, internet of things, and many more. However, it's important to note that all projects must be started during the event and should not be pre-existing projects.
          <br />
        </>
      ),
      id: 6,
      expand: false,
    },
    {
      Q: "What are the rules for participating in BeachHacks?",
      P: (
        <>
          link to rules
          <br />
        </>
      ),
      id: 7,
      expand: false,
    },
    {
      Q: "What should I bring to BeachHacks?",
      P: (
        <>
          You should bring your own computer, chargers, necessary equipment, and any other materials you may need to work on your project. For hardware projects, we will have a selection of materials from our sponsor, Arduino!
          <br />
        </>
      ),
      id: 8,
      expand: false,
    },
    {
      Q: "How can I contact the BeachHacks team if I have additional questions?",
      P: (
        <>
          Contact our team through our social media channels, or email us at <a href="mailto:beachhacks@csulb.acm.org"><span>beachhacks@csulb.acm.org</span></a> We look forward to hearing from you!
          <br />
        </>
      ),
      id: 9,
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
