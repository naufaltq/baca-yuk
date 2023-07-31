import { Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "./quiz.css";

const Quiz = () => {
  const questions = [
    {
      questionText: "Apa penyebab ikan buntal terjebak diantara bebatuan laut?",
      answerOptions: [
        { answerText: "Air laut sedang surut", isCorrect: true },
        { answerText: "Melompat terlalu tinggi", isCorrect: false },
        { answerText: "Air laut sedang pasang", isCorrect: false },
        { answerText: "Karena sedang mengejar kawannya", isCorrect: false },
      ],
    },
    {
      questionText: "Siapa nama dua orang yang berada pada cerita petualangan menakjubkan?",
      answerOptions: [
        { answerText: "Ilham & Kurniawan", isCorrect: false },
        { answerText: "Opal & Lapo", isCorrect: false },
        { answerText: "Sugiono & Supono", isCorrect: false },
        { answerText: "Tito & Rika", isCorrect: true },
      ],
    },
    {
      questionText: "Apa yang diinginkan ibunya Rasya kepada Rasya?",
      answerOptions: [
        { answerText: "Tidur", isCorrect: false },
        { answerText: "Berenang", isCorrect: true },
        { answerText: "Belajar Membaca", isCorrect: false },
        { answerText: "Mencopet", isCorrect: false },
      ],
    },
    {
      questionText: "Kemana hilangnya boneka milik Norah?",
      answerOptions: [
        { answerText: "Di sumur", isCorrect: false },
        { answerText: "Dimaling orang", isCorrect: false },
        { answerText: "Dicuci ibunya", isCorrect: true },
        { answerText: "Terbakar", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 25) ;
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  useEffect(() => {
    document.title = 'Quiz - Baca Yuk'
  }, [])

  return (
    <Container minH='85vh' maxW='100vh' mt={24} centerContent>
      <div className="app">
        {showScore ? (
          <div className="score-section">
            Nilai kamu adalah {score} dari {questions.length * 25}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">{questions[currentQuestion].questionText}</div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                <button type='button' className="btn" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)} key={index}>
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default Quiz;
