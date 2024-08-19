import React, { useEffect, useRef, useState } from "react";
import TextToSpeech from "../../../CommonComponents/TextToSpeech/TextToSpeech";
import TextAreaWithWordCount from "../../../CommonComponents/TextAreaWithWordCount/TextAreaWithWordCount";
import { useDispatch } from "react-redux";
import { resetCountDown } from "../../../CommonComponents/Countdown/countDownSlice";
import "./PracticeFillInTheBlanks.css";
import PlaceInputInString from "../../../CommonComponents/Listening/PlaceInputInString";
// import PlaceInputInString from "../../../CommonComponents/PlaceInputInString/PlaceInputInString";
function PracticeFillInTheBlanks() {
  let ques = [
    {
      questionId: 13,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      text: "An English paragraph for reading is a concise piece of text composed of one or more sentences that convey a specific idea, information, or story.",
      para:"Considering their lingering reputation as man-killers, it's hardly surprising that hackles are raised any time someone brings up the idea of 'blank' wolves to the Scottish Highlands. Debate on this topic has been raging for years; 'blank' would like to see the Highland environment returned to its natural state. Opponents 'blank' the animals' 'blank' for killing livestock."
    },
    {
      questionId: 14,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      text: "An English paragraph for reading is a concise piece of text composed of one or more sentences that convey a specific idea, information, or story.",
      para:"A charge often leveled against organic agriculture is that it is more philosophy than science. There's some truth to this indictment, if that is what it is, though why organic farmers should feel 'blank' about it is itself a mystery, a relic, perhaps, of our fetishism of science as the only 'blank' tool with which to approach nature. The philosophy of 'blank' natural processes precedes the science of understanding them."
    },
  ];
  const [questions, setQuestions] = useState(ques);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState({ answer: "" });

  const [summary, setSummary] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [answers, setAnswers] = useState([]);
  const practiceFillInTheBlanksRef = useRef(null); //ref

  const dispatch = useDispatch();

  useEffect(() => {}, [currentQuestion]);

  function nextQuestion(questionId) {
    debugger;
    // console.log("selectedOptions", selectedOptions);
    dispatch(
      resetCountDown({ reset: `PracticeFillInTheBlanks${questionId}` })
    );
    if (practiceFillInTheBlanksRef.current) {
    if ("dataFromPlaceInputInStrings" in practiceFillInTheBlanksRef.current) {
        let dataFromPlaceInputInStrings =
        practiceFillInTheBlanksRef.current.dataFromPlaceInputInStrings();
        setAnswers([
          ...answers,
          { questionId, answer: dataFromPlaceInputInStrings },
        ]);
      }
    }

    setCurrentQuestion(currentQuestion + 1);
  }

  function submitTest(params) {
    console.log("Answers", answers);
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
              <TextToSpeech text={"Hello I am Speaking from Single Answer"} />
              <p className="practiceReadAloud-main-content-question-para">
              <PlaceInputInString
                questionId={questions[currentQuestion].questionId}
                text={questions[currentQuestion].para}
                ref={practiceFillInTheBlanksRef}
              />
              </p>
              
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
  );
}

export default PracticeFillInTheBlanks;
