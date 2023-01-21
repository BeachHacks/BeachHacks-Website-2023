import "./FAQ.css"

const Question = ({question, onToggle}) => {
  return (
    <div className='question' onClick={() => onToggle(question.id)}>
      <div className='quesiton-box'>
        <h2>
            {question.Q} 
        </h2>
        <span className={`chevron ${question.expand ? 'top' : 'bottom'}`}></span>
      </div>
        {question.expand ? (
        <h3>
            {question.P}
        </h3>
        ) : ( '' )}
      
    </div>
  )
}

export default Question