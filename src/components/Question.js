import React, { useEffect, useRef, useState } from 'react'
import { flushSync } from 'react-dom'

const Question = ({ question, totalQuestions, currentQuestion, setAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const timer = useRef(null);
  const progressBar = useRef(null);

  function gotoNextQuestion() {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    flushSync(() => {
      setAnswer(selectedOption);
    });
    setSelectedOption(null);
  }

  useEffect(() => {
    progressBar.current.classList.remove("active");
    setTimeout(() => {
      progressBar.current.classList.add("active");
    }, 0);
    timer.current = setTimeout(gotoNextQuestion, 10 * 1000);

    // Clear the timer on component unmount
    return () => {
      clearTimeout(timer.current);
    };
  }, [Question]);

  return (
    <div className='questions'>
      <div className='progressbar' ref={progressBar}></div>
      <div className='questioncount'>
        <p>{currentQuestion}</p>
        of
        <p>{totalQuestions}</p>
      </div>

      <div className='main'>
        <div className='title'>Question : {Question.title} </div>
      </div>
      <div className='options'>
        {Question.options.map((option, index) => (
          <div
            className={index === selectedOption ? 'option active' : 'option'}
            key={index}
            onClick={() => setSelectedOption(index)}
          >
            {option}
          </div>
        ))}
      </div>
      <div className='control'>
        <button onClick={gotoNextQuestion}>Next</button>
      </div>
    </div>
  );
};

export default Question;
