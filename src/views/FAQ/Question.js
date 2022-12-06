import "./About.css"

const Question = ({question, onToggle}) => {
  return (
    <div className='question' onClick={() => onToggle(question.id)}>
      <div className='quesiton-box'>
        <h4>
            {question.Q} 
        </h4>
        <span className={`chevron ${question.expand ? 'top' : 'bottom'}`}></span>
      </div>
        {question.expand ? (
        <p>
            {question.P}
        </p>
        ) : ( '' )}
      
    </div>
  )
}

export default Question