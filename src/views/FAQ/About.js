import "./About.css"
import Questions from './Questions'
import {useState} from 'react'

const About = () => {
  const [questions, setQuestions] = useState([
    {
      Q: 'Question',
      P: 'Stuff',
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
  }
  return (
    <section className="faq-container" id="faq">
      {/* FAQ's */}
      <div className="header">
          <h1>FAQ's</h1>
      </div>

      {/* Dropdown bars */}
      <div className="question">
      {questions.length > 0 ? (
        <Questions questions={questions} onToggle={toggleQuestion}/>
      ) : (
        'None'
      )}
      </div>
      
      

    </section>
  )
}

export default About
