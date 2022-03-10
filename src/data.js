'use strict';

/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  questionsToShow: 10,
  // the questions in the quiz
  questions: [
    {
      text: 'What are the different ways to declare a JS variable?',
      answers: {
        a: 'constant, let, variable',
        b: 'var, const, let, function',
        c: 'var, let, const',
        d: 'let, function, const',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/variables',
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    {
      text: 'What does `typeof` do?',
      answers: {
        a: 'changes the type of a primitive value',
        b: 'returns a string describing the type of a value',
        c: 'determines if a value is primitive',
        d: 'can tell the difference between arrays and objects',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },


    {
      text: 'What color jersey does the overall leader of the Tour de France wear?',
      answers: {
        a: 'Yellow',
        b: 'Purple',
        c: 'Green',
        d: 'Pink',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: '',
          href: '',
        },
        {
          text: '',
          href:
            '',
        },
      ],
    },
    {
      text: 'What spirit is made from fermented molasses?',
      answers: {
        a: 'Gin',
        b: 'Rum',
        c: 'Raki',
        d: 'Vodka',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: '',
          href: '',
        },
        {
          text: '',
          href:
            '',
        },
      ],
    },
    {
      text: 'How old are the four main characters in the TV cartoon "South Park"?',
      answers: {
        a: 'Sixteen',
        b: 'Four',
        c: 'Twelve',
        d: 'Eight',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: '',
          href: '',
        },
        {
          text: '',
          href:
            '',
        },
      ],
    },
    {
      text: 'As of 2008, which is the largest-selling brand name drug in the world?',
      answers: {
        a: 'Lipitor',
        b: 'Valium',
        c: 'Viagra',
        d: 'Aspirin',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: '',
          href: '',
        },
        {
          text: '',
          href:
            '',
        },
      ],
    },
    {
      text: 'Which European country is also known as the Hellenic Republic?',
      answers: {
        a: 'Finland',
        b: 'Greece',
        c: 'Spain',
        d: 'Italy',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: '',
          href: '',
        },
        {
          text: '',
          href:
            '',
        },
      ],
    },
    {
      text: "Which 'Harry Potter' actress won an Oscar for the 1969 film 'The Prime Of Miss Jean Brodie'?",
      answers: {
        a: 'Emma Thompson',
        b: 'Kate Winslet',
        c: 'Maggie Smith',
        d: 'Judi Dench',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: '',
          href: '',
        },
        {
          text: '',
          href:
            '',
        },
      ],
    },
    {
      text: "1990s Patricia Cornwell novel in the Dr Kay Scarpetta series: \"From Potter's WHAT\"?",
      answers: {
        a: 'Field',
        b: 'Hand',
        c: 'Bar',
        d: 'Harry',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: '',
          href: '',
        },
        {
          text: '',
          href:
            '',
        },
      ],
    },
    {
      text: "'Check ignition and may God's love be with you' is a line from which song?",
      answers: {
        a: 'Mustang Sally',
        b: 'Little Red Corvette',
        c: 'Space Oddity',
        d: 'Rocket Man',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: '',
          href: '',
        },
        {
          text: '',
          href:
            '',
        },
      ],
    },
    {
      text: '"Lara Croft Tomb Raider: The Cradle Of Life" is banned in which of these countries?',
      answers: {
        a: 'New Zealand',
        b: 'China',
        c: 'Russia',
        d: 'Iraq',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: '',
          href: '',
        },
        {
          text: '',
          href:
            '',
        },
      ],
    },
    {
      text: "Which silver screen actress was nicknamed 'The girl with the million dollar legs'?",
      answers: {
        a: 'Jean Harlow',
        b: 'Hedy Lamarr',
        c: 'Betty Grable',
        d: 'Greta Garbo',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: '',
          href: '',
        },
        {
          text: '',
          href:
            '',
        },
      ],
    },
    {
      text: 'Matt Robinson married WHICH British celebrity in 2009?',
      answers: {
        a: 'Lily Allen',
        b: 'JK Rowling',
        c: 'Natasha Bedingfield',
        d: 'Heather Mills',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: '',
          href: '',
        },
        {
          text: '',
          href:
            '',
        },
      ],
    },
    {
      text: 'Pharology is the study of WHAT?',
      answers: {
        a: 'Distance',
        b: 'Pharohs',
        c: 'Lighthouses',
        d: 'Knives',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: '',
          href: '',
        },
        {
          text: '',
          href:
            '',
        },
      ],
    },
    {
      text: 'The capital city of which of these countries comes LAST alphabetically?',
      answers: {
        a: 'Iraq',
        b: 'China',
        c: 'Thailand',
        d: 'Greece',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: '',
          href: '',
        },
        {
          text: '',
          href:
            '',
        },
      ],
    },
    {
      text: "Which word can be a 'ship's tilt' or an 'inventory'?",
      answers: {
        a: 'List',
        b: 'Catalogue',
        c: 'Aft',
        d: 'Index',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: '',
          href: '',
        },
        {
          text: '',
          href:
            '',
        },
      ],
    }, 
    {
      text: "'Peloponnese' relates to which country's culture?",
      answers: {
        a: 'Icelandic',
        b: 'Greek',
        c: 'Channel Islands',
        d: 'Spanish',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: '',
          href: '',
        },
        {
          text: '',
          href:
            '',
        },
      ],
    }, 
  ],
};


//This method will shuffle our quizData questions
export const shuffleQuestions = () => {
  //Find random index for temp array and pop the found question.
  let questionsTemp = [...quizData.questions];

  quizData.questions.forEach((q, idx) => {
    let randIndex = Math.floor(Math.random() * questionsTemp.length);
    
    quizData.questions[idx] = questionsTemp[randIndex];
    questionsTemp.splice(randIndex, 1);
  });

}

