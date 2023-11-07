import React, { useEffect, useState } from 'react'
import questions from '../data';


function Quiz() {


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [restart, setRestart] = useState(0);
  const [mark, setMark] = useState(0)
  const [outOf, setOutOf] = useState(questions.reduce((acc, question) => acc + question.answerOptions.find(option => option.isCorrect).mark, 0));
  const [start, setStart] = useState(false)

  const handleAnswerOptionClick = (isCorrect, marks) => {
    if (isCorrect) {
      setScore(score + 1);
      setMark(marks + mark)

    }
    console.log(marks)


    const nextQuestion = currentQuestion + 1;


    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);

    }
  }

  const handleRestartClick = () => {
   
    setCurrentQuestion(0)
    setRestart(restart + 1);
    setShowScore(false)
    setScore(0)
    setMark(0)
    setStart(false)
  };
  const starFunction = () => {
    if (start) {
      setStart(false)
    } else {
      setStart(true)
    }
  }



  return (
    <div className='d-flex justify-content-center align-items-center w-100 vh-100' style={{ backgroundColor: '#401d7d', color: 'white' }}>
      {start ? (<div style={{ width: '1000px',  }}>
        {showScore ? (
          <div className='border p-5 shadow d' style={{ width: '1000px',  backgroundColor: '#3c4043', color: 'white', borderRadius: '20px' }}>

            <div className=' fw-bolder d-flex align-items-center justify-content-center ' style={{ fontSize: "30px" }}><p>RESULT</p></div>
            <div className=' fw-bolder d-flex align-items-center justify-content-center mt-1' style={{ fontSize: "30px" }}>Total Questions : {questions.length}</div>
            <div className=' fw-bolder d-flex align-items-center justify-content-center mt-1' style={{ fontSize: "30px" }}>Score</div>



            <div className=' fw-bolder d-flex align-items-center justify-content-center mt-1' style={{ fontSize: "30px" }}>{mark}/{outOf}</div>

            <div className=' d-flex flex-column justify-content-center align-items-center fw-bolder fs-5 '>
              <span style={{color:'green'}} >Correct Answer : {score}  </span> <span style={{color:'red'}}>Wrong Answer : {questions.length - score}</span>

            </div>
            <div className="  align-items-center justify-content-center d-flex mt-3">
              <button className="btn btn-lg  btn-outline-light " onClick={(handleRestartClick)} type="button">Restart</button>
            </div>


          </div>
        ) : (
          <>
            <div className=' shadow p-5 ' style={{ backgroundColor: '#3c4043', border: 'solid 2px', borderRadius: '20px', color: '' }}>
              <div >
                <div >
                  <span style={{ fontWeight: '100px', fontSize: '50px' }}>Question {currentQuestion + 1}/{questions.length}</span>
                </div>
                <div style={{ fontWeight: '100px', fontSize: '30px' }} className='mt-2  fw-bolder'>{questions[currentQuestion].questionText}</div>
              </div>
              <div className=' justify-content-center  ' style={{  fontWeight: '300px' }}>
                {




                  questions[currentQuestion].answerOptions.map((answerOption,index) => (
                   
                      <div className="d-grid gap-2 mt-3">
                        <button className="btn btn-lg  btn-outline-light" onClick={() => handleAnswerOptionClick(answerOption.isCorrect, answerOption.mark)} type="button"><span className='float-start'>{index+1}{")"}</span>{answerOption.answerText}</button>
                      </div>
                        
                   
                  ))}
              </div>
    
            </div>
          </>
        )}
      </div>) : (<>
        <div className='border p-5 shadow d-flex flex-column align-items-center justify-content-center' style={{ width: '600px', height: '400px', backgroundColor: '#3c4043', color: 'white', borderRadius: '20px' }}>
          <div style={{fontSize:'60px'}}><p>Quiz App</p></div>
          <button style={{ width: '200px' }} className='btn btn-lg btn-outline-light' onClick={starFunction} >Start</button>
        </div>

      </>)}

    </div>
  )
}

export default Quiz