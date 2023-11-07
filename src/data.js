const questions = [
  {
      questionText: 'Which HTML tag is used for creating a hyperlink?',
      answerOptions: [
          { answerText: '<link>', isCorrect: false, mark: 0 },
          { answerText: '<a>', isCorrect: true, mark: 5 },
          { answerText: '<url>', isCorrect: false, mark: 0 },
          { answerText: '<hyperlink>', isCorrect: false, mark: 0 },
      ],
  },
  {
      questionText: 'What does CSS stand for?',
      answerOptions: [
          { answerText: 'Creative Style Sheets', isCorrect: false, mark: 0 },
          { answerText: 'Colorful Style Sheets', isCorrect: false, mark: 0 },
          { answerText: 'Computer Style Sheets', isCorrect: false, mark: 0 },
          { answerText: 'Cascading Style Sheets', isCorrect: true, mark: 5 },
      ],
  },
  {
      questionText: 'What is the correct way to declare a JavaScript variable?',
      answerOptions: [
          { answerText: 'variable x;', isCorrect: false, mark: 0 },
          { answerText: 'x = 5;', isCorrect: false, mark: 0 },
          { answerText: 'var x = 5;', isCorrect: true, mark: 5 },
          { answerText: 'x := 5;', isCorrect: false, mark: 0 },
      ],
  },
  {
      questionText: 'In React.js, what is a state?',
      answerOptions: [
          { answerText: 'A variable that cannot be changed', isCorrect: false, mark: 0 },
          { answerText: 'A variable that holds dynamic data', isCorrect: true, mark: 5 },
          { answerText: 'A function that updates the DOM', isCorrect: false, mark: 0 },
          { answerText: 'A constant value', isCorrect: false, mark: 0 },
      ],
  },
  {
      questionText: 'Which CSS property is used for changing the text color of an element?',
      answerOptions: [
          { answerText: 'color', isCorrect: true, mark: 5 },
          { answerText: 'text-color', isCorrect: false, mark: 0 },
          { answerText: 'font-color', isCorrect: false, mark: 0 },
          { answerText: 'text-style', isCorrect: false, mark: 0 },
      ],
  },
  {
      questionText: 'In JavaScript, what is a callback function?',
      answerOptions: [
          { answerText: 'A function that is called automatically', isCorrect: false, mark: 0 },
          { answerText: 'A function that is passed as an argument to another function and is executed after some operation has been completed', isCorrect: true, mark: 5 },
          { answerText: 'A function that returns another function', isCorrect: false, mark: 0 },
          { answerText: 'A function that calls itself', isCorrect: false, mark: 0 },
      ],
  },
  {
      questionText: 'Which React.js method is used for rendering components?',
      answerOptions: [
          { answerText: 'render()', isCorrect: true, mark: 5 },
          { answerText: 'display()', isCorrect: false, mark: 0 },
          { answerText: 'show()', isCorrect: false, mark: 0 },
          { answerText: 'component()', isCorrect: false, mark: 0 },
      ],
  },
];

export default questions;
