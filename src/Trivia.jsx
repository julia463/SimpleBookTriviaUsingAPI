import React from "react";



const Trivia = () => {
  const [trivia, setTrivia] = React.useState([]);

  React.useEffect(() => {
    //Get the questions from the API
    fetch("https://opentdb.com/api.php?amount=10&category=10&difficulty=easy")
      .then((res) => res.json())
      .then((json) => {
        setTrivia(json.results);
      });
  }, []);

  return (
    <div className="trivia">
      <h1>Book Trivia</h1>
      <p>
        Here are 10 easy book trivia questions fetched from Open Trivia Database
        API(https://opentdb.com/api.php?amount=10&category=10&difficulty=easy)!
        Good luck!!
      </p>
      <ol>
        {/*Map the results*/}
        {trivia.map((result) => (
          <div>
            {/*List the question */}
            <li>{result.question}</li>
            {/*Create an unordered list for the answers */}
            <ul>
              {/*List the correct answer */}
              <li>{result.correct_answer}</li>
              {/*Map the result's incorrect answers array */}
              {result.incorrect_answers.map((wrong) => (
                <div>
                  {/*List each wrong answer */}
                  <li>{wrong}</li>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </ol>
      <button>Submit</button>
      <p>Your Score:</p>
      <p>
        Guess what? I was too lazy to randomize the answers- the correct answers
        are all the first options!
      </p>
    </div>
  );
};
export default Trivia;
