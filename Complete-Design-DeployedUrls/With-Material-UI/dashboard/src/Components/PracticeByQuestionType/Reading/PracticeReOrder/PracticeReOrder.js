import React, { useEffect, useRef, useState } from "react";
import TextToSpeech from "../../../CommonComponents/TextToSpeech/TextToSpeech";
import TextAreaWithWordCount from "../../../CommonComponents/TextAreaWithWordCount/TextAreaWithWordCount";
import { useDispatch } from "react-redux";
import { resetCountDown } from "../../../CommonComponents/Countdown/countDownSlice";
import "./PracticeReOrder.css";
import DragAndDrop from "../../../CommonComponents/DragAndDrop/DragAndDrop";
function PracticeReOrder() {
  let ques = [
    {
      QuestionID: 5,
      heading:
        "The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxes from the left panel to the right panel.",
      Paragraph: "",
      Question: "",
      Options: [
        "But in Scotland three banks are still allowed to issue banknotes.",
        "When this bank was founded in 1695, Scots coinage was in short supply and of uncertain value, compared with English, Dutch, Flemish or French coin.",
        "To face growth of trade it was deemed necessary to remedy this lack of an adequate currency.",
        "The first Scottish bank to do this was the Bank of Scotland.",
        "In most countries it is only the government, through their central banks, who are permitted to issue currency.",
      ],
      selection: "dragAndDrop",
    },
    {
      QuestionID: 6,
      heading:
        "The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxes from the left panel to the right panel.",
      Paragraph: "",
      Question: "",
      Options: [
        "These markets had become rapidly dominated by powerful enterprises who were able to act in their own interests, against the interests of both workers and consumers.",
        "Mill was able to see an expanded role for the State in such legislation to protect us against powerful interests.",
        "He was able to argue that the State was the only organ that was genuinely capable of responding to social needs and social interests, unlike markets.",
        "There had already been some legislation to prevent such abuses - such as various Factory Acts to prevent the exploitation of child workers.",
        "Markets may be good at encouraging innovation and following trends, but they were no good at ensuring social equality.",
      ],
      selection: "dragAndDrop",
    },
  ];
  const [questions, setQuestions] = useState(ques);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const practiceReOrderRef = useRef(null); //ref

  const dispatch = useDispatch();

  useEffect(() => {}, [currentQuestion]);

  function nextQuestion(questionId) {
    debugger;

    if ("dataFromDragAndDropComp" in practiceReOrderRef.current) {
        console.log("current function is dataFromDragAndDropComp");
        let dataFromDragAndDrop =
        practiceReOrderRef.current.dataFromDragAndDropComp(); // Call child function via ref
        console.log(dataFromDragAndDrop);
        setAnswers([...answers, { questionId, answer: dataFromDragAndDrop }]);
      }

    setCurrentQuestion(currentQuestion + 1);
  }


  function submitTest(params) {
    console.log("Answers", answers);
  }
  function dragAndDropFunc(params) {
    let options = [];
    let optionWithSide = [];
    questions[currentQuestion].Options.map((option, index) => {
      optionWithSide.push({ id: index, option: option, side: "left" });
    });
    options.push(
      <DragAndDrop
        options={optionWithSide}
        // sendDataToReading={handleDragAndDropAnswers}
        ref={practiceReOrderRef} //ref
      />
    );
    return options
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
              {dragAndDropFunc()}
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

export default PracticeReOrder;
