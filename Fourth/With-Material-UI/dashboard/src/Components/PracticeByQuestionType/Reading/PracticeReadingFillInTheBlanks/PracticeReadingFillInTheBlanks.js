import React, { useRef, useState } from 'react'
import PlaceInputInString from '../../../CommonComponents/PlaceInputInString/PlaceInputInString';

function PracticeReadingFillInTheBlanks() {
  let ques = [
    {
      QuestionID: 7,
      heading: "In the text below some words are missing. Drag words from the box below to the appropriate place in the text. To undo an answer choice, drag the word back to the box below the text.",
      Paragraph: "",
      Question: "",
      Option: "Considering their lingering reputation as man-killers, it's hardly surprising that hackles are raised any time someone brings up the idea of 'blank' wolves to the Scottish Highlands. Debate on this topic has been raging for years; 'blank' would like to see the Highland environment returned to its natural state. Opponents 'blank' the animals' 'blank' for killing livestock.",
      Options: [
        { id: 1, value: "proponents" },
        { id: 2, value: "activists" },
        { id: 3, value: "reacquainting" },
        { id: 4, value: "propensity" },
        { id: 5, value: "reintroducing" },
        { id: 6, value: "cite" },
        { id: 7, value: "accuse" }
      ],
      
      selection: "fillUps"
    },
    {
      QuestionID: 8,
      heading: "In the text below some words are missing. Drag words from the box below to the appropriate place in the text. To undo an answer choice, drag the word back to the box below the text.",
      Paragraph: "",
      Question: "",
      Option: "A charge often leveled against organic agriculture is that it is more philosophy than science. There's some truth to this indictment, if that is what it is, though why organic farmers should feel 'blank' about it is itself a mystery, a relic, perhaps, of our fetishism of science as the only 'blank' tool with which to approach nature. The philosophy of 'blank' natural processes precedes the science of understanding them.",
      Options: [
        { id: 1, value: "supportive" },
        { id: 2, value: "mimicking" },
        { id: 3, value: "logic" },
        { id: 4, value: "repeating" },
        { id: 5, value: "credible" },
        { id: 6, value: "defensive" }
      ],
      
      selection: "fillUps"
    },
  ];
  const [questions, setQuestions] = useState(ques);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const practiceReadingFillInTheBlanksRef = useRef(null); //ref

  function nextQuestion(questionId) {
    if (practiceReadingFillInTheBlanksRef.current) {
    if ("dataFromPlaceInputInString" in practiceReadingFillInTheBlanksRef.current) {
      // Component A is in dragAndDropRef.current
      console.log("current function is dataFromPlaceInputInString");
      let dataFromPlaceInputInString =
      practiceReadingFillInTheBlanksRef.current.dataFromPlaceInputInString();
      setAnswers([
        ...answers,
        { questionId, answer: dataFromPlaceInputInString },
      ]);
      console.log(dataFromPlaceInputInString);
    }
  }
    setCurrentQuestion(currentQuestion + 1);
  }
  function submitTest(params) {
    console.log("answers", answers);
  }
  return (
    <div className="practiceReadAloud-main">
      <div className="practiceReadAloud-main-content">
        {currentQuestion < questions.length ? (
          <div className="practiceReadAloud-main-content-questions">
            <div className="practiceReadAloud-main-content-question">
              <h2 className="practiceReadAloud-main-content-question-no">
                Question {currentQuestion + 1}
              </h2>
              <p className="practiceReadAloud-main-content-question-heading">
                {questions[currentQuestion].heading}
              </p>
             
              <PlaceInputInString question={questions[currentQuestion]} ref={practiceReadingFillInTheBlanksRef} />
            </div>
            <div>
              <button
                onClick={() =>
                  nextQuestion(questions[currentQuestion].questionId)
                }
              >
                Next Question
              </button>
            </div>
          </div>
        ) : (
          <button onClick={submitTest}>Submit Test</button>
        )}
      </div>
    </div>
  )
}

export default PracticeReadingFillInTheBlanks