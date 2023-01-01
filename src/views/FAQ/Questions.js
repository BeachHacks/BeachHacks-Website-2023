import Question from './Question'
const Questions = ({questions, onToggle}) => {
  return (
    <>
        {questions.map((question) => (
            <Question key={question.id} 
            question={question}
            onToggle={onToggle} />
        ))}
    </>
  )
}

export default Questions