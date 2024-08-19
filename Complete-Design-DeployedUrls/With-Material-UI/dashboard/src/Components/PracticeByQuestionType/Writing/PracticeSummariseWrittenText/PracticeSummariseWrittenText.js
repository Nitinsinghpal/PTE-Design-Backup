import React, { useState } from 'react'
import './PracticeSummariseWrittenText.css'
function SummariseWrittenText() {
    let ques = [
        {
          questionId: 13,
          heading:
            "Read the passage below and summarize it using one sentence. Type your response in the box at the bottom of the screen. You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points in the passage.",
          summary:
            "For millions of years, Mediterranean sea turtles have been coming to the shore of southern Lebanon to lay their eggs. Every summer, their babies hatch and literally run for their lives on the strip of sand that separates their nests from the sea. An endangered species, they had been largely ignored in this part of Lebanon until two women set out to protect them. lineBreak  Mona Khalil was inspired by a walk on the beach during a visit to her homeland, when she first saw the turtles. Upon learning that they were close to disappearing from her country, Khalil decided to ome back and do something about them. lineBreak  The next year, 2000, she returned and teamed up with Habiba Fayed, who shares her passion for the environment. They opened a bed-and- breakfast in the Khalil family home to finance their efforts. Guests could simply vacation or, in the spirit of ecotourism, they could help the owners protect the turtles' nests and keep the beach clean. lineBreak  Female turtles travel to the exact spot where they were born to dig their nests in the sand, laying an average of 70 to 100 eggs. This is the moment when the women intervene. They protect the nests from predators by burying an iron grid in the sand above the eggs. The spaces on the grid are large enough to allow the baby turtles to emerge after a month and find their way to the sea... and to a chance at life.",
        },
        {
          questionId: 14,
          heading:
          "Read the passage below and summarize it using one sentence. Type your response in the box at the bottom of the screen. You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points in the passage.",
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

export default SummariseWrittenText