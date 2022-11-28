import "./About.css"
import Questions from './Questions'
import {useState} from 'react'

const About = () => {
  const [questions, setQuestions] = useState([
    {
      Q: 'Question',
      P: '',
      id: 1,
      expand: false,
    }, 

    {
      Q: 'Question',
      P:'',
      id: 2,
      expand: false,
    },

    {
      Q: 'Question',
      P: '',
      id: 3,
      expand: false,
    },

    {
      Q: 'Question',
      P: '',
      id: 4,
      expand: false,
    }
  ])

  const toggleQuestion = (id) => {
    setQuestions(questions.map((question) => question.id === id ? {...question, expand: !question.expand} : question));
    console.log(id);
  }
  return (
    <section className="faq-container" id="faq">
      {/* FAQ's */}
      <div className="Header">
          <h1>FAQ's</h1>
      </div>

      {/* Dropdown bars */}
      {questions.length > 0 ? (
        <Questions questions={questions} onToggle={toggleQuestion}/>
      ) : (
        'None'
      )}
      

    </section>
  )
}

export default About
