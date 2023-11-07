const questions = [
    {
      questionText: 'What is the capital of Japan?',
      answerOptions: [
        { answerText: 'Tokyo', isCorrect: true, mark: 5 },
        { answerText: 'Beijing', isCorrect: false, mark: 0 },
        { answerText: 'Seoul', isCorrect: false, mark: 0 },
        { answerText: 'Bangkok', isCorrect: false, mark: 0 },
      ],
    },
    {
      questionText: 'Which element does "O" represent on the periodic table?',
      answerOptions: [
        { answerText: 'Oxygen', isCorrect: true, mark: 5 },
        { answerText: 'Gold', isCorrect: false, mark: 0 },
        { answerText: 'Silver', isCorrect: false, mark: 0 },
        { answerText: 'Carbon', isCorrect: false, mark: 0 },
      ],
    },
    {
      questionText: 'Who painted the Mona Lisa?',
      answerOptions: [
        { answerText: 'Leonardo da Vinci', isCorrect: true, mark:5 },
        { answerText: 'Pablo Picasso', isCorrect: false, mark: 0 },
        { answerText: 'Vincent van Gogh', isCorrect: false, mark: 0 },
        { answerText: 'Michelangelo', isCorrect: false, mark: 0 },
      ],
    },
    {
      questionText: 'What is the world\'s largest ocean?',
      answerOptions: [
        { answerText: 'Atlantic Ocean', isCorrect: false, mark: 0 },
        { answerText: 'Indian Ocean', isCorrect: false, mark: 0 },
        { answerText: 'Arctic Ocean', isCorrect: false, mark: 0 },
        { answerText: 'Pacific Ocean', isCorrect: true, mark: 5 },
      ],
    },
    {
      questionText: 'Which planet is known as the "Red Planet"?',
      answerOptions: [
        { answerText: 'Mars', isCorrect: true, mark: 5 },
        { answerText: 'Venus', isCorrect: false, mark: 0 },
        { answerText: 'Jupiter', isCorrect: false, mark: 0 },
        { answerText: 'Saturn', isCorrect: false, mark: 0 },
      ],
    },
    {
        questionText: 'What is the largest planet in our solar system?',
        answerOptions: [
          { answerText: 'Mars', isCorrect: false, mark: 0 },
          { answerText: 'Jupiter', isCorrect: true, mark: 5 },
          { answerText: 'Saturn', isCorrect: false, mark: 0 },
          { answerText: 'Venus', isCorrect: false, mark: 0 },
        ],
      },
      {
        questionText: 'What is the largest mammal in the world?',
        answerOptions: [
          { answerText: 'Elephant', isCorrect: false, mark: 0 },
          { answerText: 'Blue Whale', isCorrect: true, mark: 5 },
          { answerText: 'Giraffe', isCorrect: false, mark: 0 },
          { answerText: 'Lion', isCorrect: false, mark: 0 },
        ],
      },
      {
        questionText: 'Who wrote "Romeo and Juliet"?',
        answerOptions: [
          { answerText: 'William Shakespeare', isCorrect: true, mark: 5 },
          { answerText: 'Jane Austen', isCorrect: false, mark: 0 },
          { answerText: 'Charles Dickens', isCorrect: false, mark: 0 },
          { answerText: 'Emily Dickinson', isCorrect: false, mark: 0 },
        ],
      },
      {
        questionText: 'Which planet is known as the "Morning Star"?',
        answerOptions: [
          { answerText: 'Mars', isCorrect: false, mark: 0 },
          { answerText: 'Venus', isCorrect: true, mark: 5 },
          { answerText: 'Mercury', isCorrect: false, mark: 0 },
          { answerText: 'Saturn', isCorrect: false, mark: 0 },
        ],
      },
      {
        questionText: 'What is the main ingredient in guacamole?',
        answerOptions: [
          { answerText: 'Tomato', isCorrect: false, mark: 0 },
          { answerText: 'Avocado', isCorrect: true, mark: 5 },
          { answerText: 'Onion', isCorrect: false, mark: 0 },
          { answerText: 'Lime', isCorrect: false, mark: 0 },
        ],
      },
      {
        questionText: 'Who painted the famous artwork "Starry Night"?',
        answerOptions: [
          { answerText: 'Pablo Picasso', isCorrect: false, mark: 0 },
          { answerText: 'Vincent van Gogh', isCorrect: true, mark: 5 },
          { answerText: 'Leonardo da Vinci', isCorrect: false, mark: 0 },
          { answerText: 'Claude Monet', isCorrect: false, mark: 0 },
        ],
      },
      {
        questionText: 'What is the tallest mountain in the world?',
        answerOptions: [
          { answerText: 'Mount Kilimanjaro', isCorrect: false, mark: 0 },
          { answerText: 'Kangchenjunga', isCorrect: false, mark: 0 },
          { answerText: 'Mount Everest', isCorrect: true, mark:5 },
          { answerText: 'Denali', isCorrect: false, mark: 0 },
        ],
      },
      {
        questionText: 'Which famous scientist developed the theory of general relativity?',
        answerOptions: [
          { answerText: 'Isaac Newton', isCorrect: false, mark: 0 },
          { answerText: 'Marie Curie', isCorrect: false, mark: 0 },
          { answerText: 'Albert Einstein', isCorrect: true, mark: 5 },
          { answerText: 'Galileo Galilei', isCorrect: false, mark: 0 },
        ],
      },
      {
        questionText: 'What is the capital of France?',
        answerOptions: [
            { answerText: 'New York', isCorrect: false,mark:0 },
            { answerText: 'London', isCorrect: false,mark:0 },
            { answerText: 'Paris', isCorrect: true ,mark:5},
            { answerText: 'Dublin', isCorrect: false ,mark:0},
        ],
    },
    {
        questionText: 'Who is CEO of Tesla?',
        answerOptions: [
            { answerText: 'Jeff Bezos', isCorrect: false,mark:0 },
            { answerText: 'Elon Musk', isCorrect: true,mark:5 },
            { answerText: 'Bill Gates', isCorrect: false,mark:0 },
            { answerText: 'Tony Stark', isCorrect: false ,mark:0},
        ],
    },
    {
        questionText: 'The iPhone was created by which company?',
        answerOptions: [
            { answerText: 'Apple', isCorrect: true,mark:5 },
            { answerText: 'Intel', isCorrect: false,mark:0 },
            { answerText: 'Amazon', isCorrect: false,mark:0 },
            { answerText: 'Microsoft', isCorrect: false,mark:0 },
        ],
    },
    
  ];

  export default questions