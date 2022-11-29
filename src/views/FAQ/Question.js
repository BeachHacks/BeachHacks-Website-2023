const Question = ({question, onToggle}) => {
  return (
    <div className="question" onClick={() => onToggle(question.id)}>
        <h4>
            {question.Q} 
        </h4>
        {question.expand ? (
        <p>
            {question.P}
        </p>
        ) : ( '' )}
    </div>
  )
}

export default Question