import React, { useEffect, useState } from 'react'

const Quiz=({name,questions,score,setScore,setQuestions})=> {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [currQues, questions]);

  console.log(questions);



  return (
    <div>About</div>
  )
}

export default Quiz