import React, { useState } from "react";
import "./PracticeReadAloud.css";
import { useDispatch, useSelector } from "react-redux";
import { stopRecording } from "../../../CommonComponents/Recording/recordingSlice";
import { resetCountDown } from "../../../CommonComponents/Countdown/countDownSlice";
import SpeechToText from "../../../CommonComponents/SpeechToText/SpeechToText";

function PracticeReadAloud() {
  let que = [
    {
      questionId: 1,
      heading:
        "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
      paragraph:
        "Once most animals reach adulthood, they stop growing. In contrast, even plants that are thousands of years old continue to grow new needles, add new wood, and produce cones and new flowers, almost as if parts of their bodies remained 'forever young'. The secrets of plant growth are regions of tissue that can produce cells that later develop into specialized tissues.",
    },
    {
        questionId: 2,
        heading:
          "Second Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
        paragraph:
          "Once most animals reach adulthood, they stop growing. In contrast, even plants that are thousands of years old continue to grow new needles, add new wood, and produce cones and new flowers, almost as if parts of their bodies remained 'forever young'. The secrets of plant growth are regions of tissue that can produce cells that later develop into specialized tissues.",
      },
      {
        questionId: 3,
        heading:
          "Second Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
        paragraph:
          "Once most animals reach adulthood, they stop growing. In contrast, even plants that are thousands of years old continue to grow new needles, add new wood, and produce cones and new flowers, almost as if parts of their bodies remained 'forever young'. The secrets of plant growth are regions of tissue that can produce cells that later develop into specialized tissues.",
      },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState(que);
  const [answers, setAnswers] = useState([]);

  const dispatch = useDispatch();
  const recording = useSelector((state) => state.recording);
  
  const nextQuestion = (questionId) => {
    setAnswers([...answers, { questionId, answer: recording.transcript }]);
    dispatch(resetCountDown({ reset: `speaking${questionId}` }));
    dispatch(stopRecording(false));
    setCurrentQuestion(currentQuestion + 1);
  };

  function submitTest(params) {}
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
              <SpeechToText />
              <p className="practiceReadAloud-main-content-question-para">
                {questions[currentQuestion].paragraph}
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

export default PracticeReadAloud;
