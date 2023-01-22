import "./FAQ.css"

const Question = ({question, onToggle}) => {
  return (
    <div className='question' onClick={() => onToggle(question.id)}>
      <div className='quesiton-box'>
        <h2>
            {question.Q} 
        </h2>
        <i class={question.expand ? "fa-solid fa-chevron-down" : "fa-solid fa-chevron-up"}></i>
        {/* <span className={`chevron ${question.expand ? 'top' : 'bottom'}`}></span> */}
      </div>
        {question.expand ? (
        <div className="answer-box">
          <h3>
            {question.P}
          </h3>
        </div>
        
        ) : ( '' )}
    </div>
  )
}

export default Question