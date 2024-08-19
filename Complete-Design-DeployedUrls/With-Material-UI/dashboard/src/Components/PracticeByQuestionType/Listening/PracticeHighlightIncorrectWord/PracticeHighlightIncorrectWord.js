import React, { useEffect, useRef, useState } from "react";
import TextToSpeech from "../../../CommonComponents/TextToSpeech/TextToSpeech";
import TextAreaWithWordCount from "../../../CommonComponents/TextAreaWithWordCount/TextAreaWithWordCount";
import { useDispatch } from "react-redux";
import { resetCountDown } from "../../../CommonComponents/Countdown/countDownSlice";
import "./PracticeHighlightIncorrectWord.css";
import PlaceInputInString from "../../../CommonComponents/Listening/PlaceInputInString";
import HighLightInCorrectWord from "../../../CommonComponents/HighLightInCorrectWord/HighLightInCorrectWord";
// import PlaceInputInString from "../../../CommonComponents/PlaceInputInString/PlaceInputInString";
function PracticeHighlightIncorrectWord() {
  let ques = [
    {
      questionId: 13,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      text: "An English paragraph for reading is a concise piece of text composed of one or more sentences that convey a specific idea, information, or story.",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius justo eget justo maximus ullamcorper.",
    },
    {
      questionId: 14,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      text: "An English paragraph for reading is a concise piece of text composed of one or more sentences that convey a specific idea, information, or story.",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius justo eget justo maximus ullamcorper.",
    },
  ];
  const [questions, setQuestions] = useState(ques);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState({ answer: "" });

  const [summary, setSummary] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [answers, setAnswers] = useState([]);
  const practiceHighlightIncorrectWordRef = useRef(null); //ref

  const dispatch = useDispatch();

  useEffect(() => {}, [currentQuestion]);

  function nextQuestion(questionId) {
    debugger;
    // console.log("selectedOptions", selectedOptions);
    dispatch(
      resetCountDown({ reset: `PracticeSelectMissingWord${questionId}` })
    );
    if (practiceHighlightIncorrectWordRef.current) {
      if (
        "dataFromHighLightInCorrectWord" in
        practiceHighlightIncorrectWordRef.current
      ) {
        debugger;
        let dataFromHighLightInCorrectWord =
          practiceHighlightIncorrectWordRef.current.dataFromHighLightInCorrectWord();
        setAnswers([
          ...answers,
          { questionId, answer: dataFromHighLightInCorrectWord },
        ]);
      }
    }
    setCurrentQuestion(currentQuestion + 1);
  }
  const handleOptionSelect = (answer, questionId) => {
    setSelectedOption({ questionId, answer });
  };
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
                <HighLightInCorrectWord
                  questionId={questions[currentQuestion].questionId}
                  summary={questions[currentQuestion].summary}
                  ref={practiceHighlightIncorrectWordRef}
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

export default PracticeHighlightIncorrectWord;
