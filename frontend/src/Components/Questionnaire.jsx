import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Questionnaire.css'; 

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

const questions = [
  "1.You regularly make new friends.",
  "2.You spend a lot of your free time exploring various random topics that pique your interest.",
  "3.Seeing other people cry can easily make you feel like you want to cry too.",
  "4.You often make a backup plan for a backup plan.",
  "5.You usually stay calm, even under a lot of pressure.",
  "6.At social events, you rarely try to introduce yourself to new people and mostly talk to the ones you already know.",
  "7.You prefer to completely finish one project before starting another.",
  "8.You are very sentimental.",
  "9.You like to use organizing tools like schedules and lists.",
  "10.Even a small mistake can cause you to doubt your overall abilities and knowledge.",
 "11.You feel comfortable just walking up to someone you find interesting and striking up a conversation.",
"12.You are not too interested in discussing various interpretations and analyses of creative works.",
"13.You are more inclined to follow your head than your heart.",
"14.You usually prefer just doing what you feel like at any given moment instead of planning a particular daily routine.",
"15.You rarely worry about whether you make a good impression on people you meet.",
"16.You enjoy participating in group activities.",
"17.You like books and movies that make you come up with your own interpretation of the ending.",
"18.Your happiness comes more from helping others accomplish things than your own accomplishments.",
"19.You are interested in so many things that you find it difficult to choose what to try next.",
"20.You are prone to worrying that things will take a turn for the worse.",
"21.You avoid leadership roles in group settings.",
"22.You are definitely not an artistic type of person.",
"23.You think the world would be a better place if people relied more on rationality and less on their feelings.",
"24.You prefer to do your chores before allowing yourself to relax.",
"25.You enjoy watching people argue.",
"26.You tend to avoid drawing attention to yourself.",
"27.Your mood can change very quickly.",
"28.You lose patience with people who are not as efficient as you.",
"29.You often end up doing things at the last possible moment.",
"30.You have always been fascinated by the question of what, if anything, happens after death.",
"31.You usually prefer to be around others rather than on your own.",
"32.You become bored or lose interest when the discussion gets highly theoretical.",
"33.You find it easy to empathize with a person whose experiences are very different from yours.",
"34.You usually postpone finalizing decisions for as long as possible.",
"35.You rarely second-guess the choices that you have made.",
"36.After a long and exhausting week, a lively social event is just what you need.",
"37.You enjoy going to art museums.",
"38.You often have a hard time understanding other people’s feelings.",
"39.You like to have a to-do list for each day.",
"40.You rarely feel insecure.",
"41.You avoid making phone calls.",
"42.You often spend a lot of time trying to understand views that are very different from your own.",
"43.In your social circle, you are often the one who contacts your friends and initiates activities.",
"44.If your plans are interrupted, your top priority is to get back on track as soon as possible.",
"45.You are still bothered by mistakes that you made a long time ago.",
"46.You rarely contemplate the reasons for human existence or the meaning of life.",
"47.Your emotions control you more than you control them.",
"48.You take great care not to make people look bad, even when it is completely their fault.",
"49.Your personal work style is closer to spontaneous bursts of energy than organized and consistent efforts.",
"50.When someone thinks highly of you, you wonder how long it will take them to feel disappointed in you.",
"51.You would love a job that requires you to work alone most of the time.",
"52.You believe that pondering abstract philosophical questions is a waste of time.",
"53.You feel more drawn to places with busy, bustling atmospheres than quiet, intimate places.",
"54.You know at first glance how someone is feeling.",
"55.You often feel overwhelmed.",
"56.You complete things methodically without skipping over any steps.",
"57.You are very intrigued by things labeled as controversial.",
"58.You would pass along a good opportunity if you thought someone else needed it more.",
"59.You struggle with deadlines.",
"60.You feel confident that things will work out for you."
];

const Questionnaire = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate(); // Create a navigate instance

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
        // Log the selected option and current question index for debugging
        console.log('Storing answer:', selectedOption, 'for question index:', currentQuestionIndex);
        
        setAnswers((prevAnswers) => ({ ...prevAnswers, [currentQuestionIndex]: selectedOption })); // Update the answers object correctly
        setSelectedOption(null);

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    } else {
        alert('Please select an option before moving to the next question.');
    }
};

 const handleSubmit = async () => {
    //  the final answer is captured before submission
    if (selectedOption !== null) {
        setAnswers((prevAnswers) => ({ ...prevAnswers, [currentQuestionIndex]: selectedOption }));
    }

    // Log the updated answers object to verify
    console.log('Answers object after capturing final question:', answers);

    // Ensure all questions are answered and convert the answers to an array
    const allAnswersArray = [];
    for (let i = 0; i < questions.length; i++) {
        if (answers[i] === undefined) {
            alert('Please answer all questions.');
            return;
        }
        allAnswersArray.push(answers[i]);
    }

    const questionnaireData = {
        Personality: allAnswersArray, // Backend expects 'Personality'
    };

    try {
        const response = await fetch('http://localhost:8080/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(questionnaireData),
        });

        const result = await response.json();
        console.log('Backend Prediction:', result.prediction); // Log prediction

        // Navigate only if result.prediction exists
        if (result.prediction) {
            navigate('/predict', { state: { prediction: result.prediction } });
        } else {
            console.error('No prediction found in the response');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};


  // Calculate progress
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="questionnaire-container">
      <ProgressBar progress={progress} />
      <div className="question-box">
        <h2>{questions[currentQuestionIndex]}</h2>
        <div className="options">
          <span className="option-label">Agree</span>
          <input
            type="radio"
            id="agree1"
            name="answer"
            value={1}
            checked={selectedOption === 1}
            onChange={() => handleOptionChange(1)}
            className="agree large-circle"
          />
          <input
            type="radio"
            id="agree2"
            name="answer"
            value={2}
            checked={selectedOption === 2}
            onChange={() => handleOptionChange(2)}
            className="agree medium-circle"
          />
          <input
            type="radio"
            id="agree3"
            name="answer"
            value={3}
            checked={selectedOption === 3}
            onChange={() => handleOptionChange(3)}
            className="agree small-circle"
          />
          <input
            type="radio"
            id="neutral"
            name="answer"
            value={0}
            checked={selectedOption === 0}
            onChange={() => handleOptionChange(0)}
            className="neutral"
          />
          <input
            type="radio"
            id="disagree1"
            name="answer"
            value={-1}
            checked={selectedOption === -1}
            onChange={() => handleOptionChange(-1)}
            className="disagree small-circle"
          />
          <input
            type="radio"
            id="disagree2"
            name="answer"
            value={-2}
            checked={selectedOption === -2}
            onChange={() => handleOptionChange(-2)}
            className="disagree medium-circle"
          />
          <input
            type="radio"
            id="disagree3"
            name="answer"
            value={-3}
            checked={selectedOption === -3}
            onChange={() => handleOptionChange(-3)}
            className="disagree large-circle"
          />
          <span className="option-label">Disagree</span>
        </div>
        {currentQuestionIndex < questions.length - 1 ? (
          <button onClick={handleNextQuestion} className="next-btn">
            <span className="next">Next</span>
          </button>
        ) : (
          <button onClick={handleSubmit} className="submit-btn">
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Questionnaire;
