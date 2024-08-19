import React, { useEffect, useState } from "react";
import "./PracticeRepeatSentence.css";
import SpeechToText from "../../../CommonComponents/SpeechToText/SpeechToText";
import TextToSpeech from "../../../CommonComponents/TextToSpeech/TextToSpeech";
import { useDispatch, useSelector } from "react-redux";
import { resetCountDown } from "../../../CommonComponents/Countdown/countDownSlice";
import { stopRecording } from "../../../CommonComponents/Recording/recordingSlice";
function PracticeRepeatSentence() {
  let que = [
    {
      questionId: 1,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "Hello I am Speaking",
    },
    {
      questionId: 2,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "Hello I am Speaking",
    },
    {
      questionId: 3,
      heading:
        "Second Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
      text: "Hello I am Speaking",
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState(que);
  const [answers, setAnswers] = useState([]);
  const [audioEnds, setAudioEnds] = useState(false);
  const audioPlayer = useSelector((state) => state.audioPlayer);
  const recording = useSelector((state) => state.recording);

  const dispatch = useDispatch();

  useEffect(() => {
    setAudioEnds(false);
  }, [currentQuestion]);

  function onAudioEnds(params) {
    setAudioEnds(true);
  }
  const nextQuestion = (questionId) => {
    dispatch(resetCountDown({ reset: `listening${questionId}` }));
    dispatch(stopRecording(false));
    setAnswers([...answers, { questionId, answer: recording.transcript }]);
    setCurrentQuestion(currentQuestion + 1);
  };
  function submitTest(params) {
    console.log("Answers",answers)
  }
  return (
    <div className="practiceRepeatSentence-main">
      <div className="practiceRepeatSentence-main-content">
        {currentQuestion < questions.length ? (
          <div className="practiceRepeatSentence-main-content-questions">
            <div className="practiceRepeatSentence-main-content-question">
              <h2 className="practiceRepeatSentence-main-content-question-no">
                Question {currentQuestion + 1}
              </h2>
              <p className="practiceRepeatSentence-main-content-question-heading">
                {questions[currentQuestion].heading}
              </p>
              <TextToSpeech text={questions[currentQuestion].text} onAudioEnds={onAudioEnds} />
              {audioEnds ? <SpeechToText /> : <></>}
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

    // <div>
    //   {/* <AudioPlayer src={audio} reset={audioPlayer.reset} onEnd={onAudioEnds} questionId={questionId}/> */}
    //   <TextToSpeech text={text} />
    //   {audioEnds ? <SpeechToText /> : <></>}
    // </div>
  );
}

export default PracticeRepeatSentence;
