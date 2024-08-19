import React, { useEffect, useState } from "react";
import "./PracticeWriteFromDictation.css";
import TextToSpeech from "../../../CommonComponents/TextToSpeech/TextToSpeech";
import TextAreaWithWordCount from "../../../CommonComponents/TextAreaWithWordCount/TextAreaWithWordCount";
import { useDispatch } from "react-redux";
import { resetCountDown } from "../../../CommonComponents/Countdown/countDownSlice";
function PracticeWriteFromDictation() {
  let ques = [
    {
      questionId: 13,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",

      text: "An English paragraph for reading is a concise piece of text composed of one or more sentences that convey a specific idea, information, or story.",
    },
    {
      questionId: 14,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",

      text: "An English paragraph for reading is a concise piece of text composed of one or more sentences that convey a specific idea, information, or story.",
    },
  ];
  const [questions, setQuestions] = useState(ques);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [summary, setSummary] = useState("");
  const [answers, setAnswers] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setSummary("");
  }, [currentQuestion]);

  const handleChange = (event) => {
    setSummary(event.target.value);
  };

  function nextQuestion(questionId) {
    debugger;
    // console.log("selectedOptions", selectedOptions);
    dispatch(
      resetCountDown({ reset: `PracticeWriteFromDictation${questionId}` })
    );
    setAnswers([...answers, { questionId, answer: summary }]);

    setCurrentQuestion(currentQuestion + 1);
  }



  function submitTest(params) {
    console.log("Answers", answers);
  }
  return (
    <div className="listening-main">
      <div className="listening-Main-Content">
        {currentQuestion < questions.length ? (
          <div className="listening-Main-Content-Questions">
            <h2>Question {currentQuestion + 1}</h2>
            {questions[currentQuestion].heading !== "" ? (
              <div className="listening-Main-Content-QuestionsDiv">
                <p className="listening-Main-Content-QuestionsDiv-P">
                  {questions[currentQuestion].heading}
                </p>
                {/* <br/> */}
               
                <div className="listening-Main-Content-QuestionsDiv-Audio-Div">
                  <div className="listening-Main-Content-QuestionsDiv-Audio-Div-Content">
                    <TextToSpeech text={"Hello i am speaking"} />
                  </div>
                </div>
                <div className="listening-Main-Content-QuestionsDiv-Options">
                  <div className="listening-Main-Content-QuestionsDiv-Options-Content">
                    <p className="listening-Main-Content-QuestionsDiv-Options-P">
                      {/* <TextAreaWithWordCount
                        questionId={questions[currentQuestion].questionId}

                      /> */}
                      <div className="summariseWrittenText-main-content-textArea-Div">
                        <textarea
                          value={summary}
                          onChange={handleChange}
                          placeholder="Write your summary here..."
                          rows={5}
                          cols={40}
                        />
                        <br />
                      </div>
                    </p>
                    <button
                      onClick={() =>
                        nextQuestion(questions[currentQuestion].questionId)
                      }
                    >
                      Next Question
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <button onClick={submitTest}>Submit Test</button>
        )}
      </div>
    </div>
  );
}

export default PracticeWriteFromDictation;
