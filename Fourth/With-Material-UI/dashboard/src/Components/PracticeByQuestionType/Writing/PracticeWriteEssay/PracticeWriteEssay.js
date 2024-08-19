import React, { useState } from 'react'
import './PracticeWriteEssay.css'
function PracticeWriteEssay() {
    let ques = [
        {
          questionId: 13,
          heading:
            "You will have 20 minutes to plan, write and revise an essay about the topic below. Your response will be judged on how well you develop a position, organize your ideas, present supporting details, and control the elements of standard written English. You should write 200-300 words.",
          summary:
            "Tobacco, mainly in the form of cigarettes, is one of the most widely-used drugs in the world. Over a billion adults legally smoke tobacco every day. The long term health costs are high-for smokers themselves, and for the wider community in terms of health care costs and lost productivity. lineBreak  Do governments have a legitimate role to legislate to protect citizens from the harmful effects of their own decisions to smoke, or are such decisions up to the individual?",
        },
        {
          questionId: 14,
          heading:
          "You will have 20 minutes to plan, write and revise an essay about the topic below. Your response will be judged on how well you develop a position, organize your ideas, present supporting details, and control the elements of standard written English. You should write 200-300 words.",
          summary:
            "So far in our discussion of chemical equations we have assumed that these reactions only go in one direction, the forward direction, from left to right as we read it in the equation. That's why our arrowhead points from left to right reactants react together to make products. However, this is not exactly how things occur in reality. In fact, practically every chemical reaction is reversible, meaning the products can also react together to reform the reactants that they were made of. So instead of writing that single arrow facing from right to top, a more appropriate symbol would be a double arrow, one going from left to right and one going from right to left. Reactants are continually continuously reacting to form produce. But at the same time as those products are formed, they remake the reactants. They're both going simultaneously, forming each other. This is what we would call a state of equality.",
        },
      ];
      const [questions, setQuestions] = useState(ques);
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [summary, setSummary] = useState("");

      const handleChange = (event) => {
        setSummary(event.target.value);
      };

      const nextQuestion = () => {
        setSummary("")
        setCurrentQuestion(currentQuestion + 1);
      }
      function submitTest(params) {
        
      }
      function lineBreakInSummaryFunc(summary) {
        debugger
        // const myString = "Hello world lineBreak This is a test lineBreak Another line";
        const lines = summary.split(' lineBreak ');
        let paraToDisplay = []
        lines.map((line, index) => (
            paraToDisplay.push(
            <React.Fragment key={index}>
              {line}
              <br />
              <br />
            </React.Fragment>)
          ))
          return paraToDisplay;
      }
  return (
    <div className="summariseWrittenText-main">
      <div className="summariseWrittenText-main-content">
        {currentQuestion < questions.length ? (
          <div className="summariseWrittenText-main-content-questions">
            <h2>Question {currentQuestion + 1}</h2>
            {questions[currentQuestion].heading !== "" ? (
              <div className="summariseWrittenText-main-content-QuestionsDiv">
                <p className="summariseWrittenText-main-content-QuestionsDiv-P">
                  {questions[currentQuestion].heading}
                </p>
              </div>
            ) : (
              <></>
            )}
            {questions[currentQuestion].summary !== "" ? (
              <div className="summariseWrittenText-main-content-summary">
                <p>{lineBreakInSummaryFunc(questions[currentQuestion].summary)}</p>
              </div>
            ) : (
              <></>
            )}  
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
            <div className="summariseWrittenText-main-content-next">
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

export default PracticeWriteEssay