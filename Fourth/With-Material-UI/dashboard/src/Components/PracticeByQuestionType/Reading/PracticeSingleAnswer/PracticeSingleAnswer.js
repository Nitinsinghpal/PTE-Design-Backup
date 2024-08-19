import React, { useEffect, useState } from "react";
import TextToSpeech from "../../../CommonComponents/TextToSpeech/TextToSpeech";
import TextAreaWithWordCount from "../../../CommonComponents/TextAreaWithWordCount/TextAreaWithWordCount";
import { useDispatch } from "react-redux";
import { resetCountDown } from "../../../CommonComponents/Countdown/countDownSlice";
import "./PracticeSingleAnswer.css";
function PracticeSingleAnswer() {
  let ques = [
    {
      questionId: 13,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2:
        "Which of the following most accurately summarizes the opinion of the author in the text?",
      para: "In many ways Britten's most ambitious effort is the War Requiem of 1961, a flawed but still impressive work for chorus, soloists, and orchestra. It weaves together the traditional Latin Mass for the Dead with antiwar poems by Wilfrid Owen, a young officer killed in World War I. The point of War Requiem is how the words of the liturgical text are reinterpreted and often rendered hollow by the realities of death in war. In this work we see Britten's prodigal inconsistencies on display. For all its problems, the War Requiem will probably survive as one of our time's most impassioned indictments of war and its heroic myth.",
      options: [
      "Motivation is worth more than intelligence in leaming.",
      "Language can be effectively learnt through play.",
      "There is no single best method for learning.",
      "Teachers should regularly change their methods."
    ],
    },
    {
      questionId: 14,
      heading:
      "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What is the lecture mainly about?",
      para: "An English paragraph for reading is a concise piece of text composed of one or more sentences that convey a specific idea, information, or story.",
      options: [
      "He finds the weaving together of the Latin Mass and antiwar poems to be quite effective.",
      "He is critical of Britten's inconsistencies as observed in the War Requiem.",
      "He admires the War Requiem of Britten but finds it far from perfect.",
      "He questions whether Britten's work will endure."
    ],
    },
  ];
  const [questions, setQuestions] = useState(ques);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState({ answer: "" });

  const [summary, setSummary] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [answers, setAnswers] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {

  }, [currentQuestion]);



  function nextQuestion(questionId) {
    debugger;
    // console.log("selectedOptions", selectedOptions);
    dispatch(
      resetCountDown({ reset: `PracticeSingleAnswer${questionId}` })
    );
    if (selectedOption.answer !== "") {
      setAnswers([...answers, selectedOption]);
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
              <p className="practiceSingleAnswer-main-content-question-p">{questions[currentQuestion].para}</p>
              <p className="practiceSingleAnswer-main-content-question-subHeading">
                {questions[currentQuestion].heading2}
              </p>
              {questions[currentQuestion].options.map((option, index) => (
                <li key={index} className="optionsLi">
                  <label>
                    <input
                      type="radio"
                      name="options"
                      value={option}
                      checked={option === selectedOption.answer}
                      onChange={() =>
                        handleOptionSelect(
                          option,
                          questions[currentQuestion].questionId
                        )
                      }
                    />
                    {option}
                  </label>
                </li>
              ))}
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

export default PracticeSingleAnswer;
