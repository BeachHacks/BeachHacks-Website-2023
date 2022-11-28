const Question = ({question, onToggle}) => {
  return (
    <div className="" onClick={() => onToggle(question.id)}>
        <h4>
            {question.Q} 
        </h4>
        <p>
            {question.P}
        </p>
    </div>
  )
}

export default Question