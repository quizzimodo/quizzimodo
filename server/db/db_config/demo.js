var bcrypt = require('bcrypt-nodejs');

var password = bcrypt.hashSync('quizzimodo', bcrypt.genSaltSync(10));

var DemoData = [
  {
    table: 'user',
    records: [
      {username: 'forrest-akin', password: password, name: 'forrest akin', email: 'forrest.akin@gmail.com', bio: 'Hello, world!'},
      {username: 'idugcoal', password: password, name: 'doug cole', email: 'idugcoal@gmail.com', bio: 'Hello, world!'},
      {username: 'lstuartfry', password: password, name: 'lukas stuart-fry', email: 'lstuartfry@gmail.com', bio: 'Hello, world!'},
      {username: 'natesMI', password: password, name: 'nathaniel schwab', email: 'schwab.nathaniel@gmail.com', bio: 'Hello, world!'}
    ]
  },
  {
    table: 'topic',
    records: [
      {topic: 'Math'},
      {topic: 'Science & Engineering'},
      {topic: 'Computer Science'},
      {topic: 'Arts & Humanities'},
      {topic: 'Economics & Finance'}
    ]
  },
  {
    table: 'subtopic',
    records: [
      {topic_id: 1, subtopic: 'Arithmetic'},
      {topic_id: 1, subtopic: 'Algebra'},
      {topic_id: 1, subtopic: 'Geometry'},
      {topic_id: 1, subtopic: 'Trigonometry'},
      {topic_id: 1, subtopic: 'Probability & Statistics'},
      {topic_id: 1, subtopic: 'Calculus'},
      {topic_id: 1, subtopic: 'Differential Equations'},
      {topic_id: 1, subtopic: 'Linear Algebra'},
      {topic_id: 2, subtopic: 'Physics'},
      {topic_id: 2, subtopic: 'Chemistry'},
      {topic_id: 2, subtopic: 'Biology'},
      {topic_id: 2, subtopic: 'Health & Medicine'},
      {topic_id: 2, subtopic: 'Electrical Engineering'},
      {topic_id: 3, subtopic: 'Web Programming & Designing'},
      {topic_id: 3, subtopic: 'Algorithms & Data Structures'},
      {topic_id: 3, subtopic: 'Artificial Intelligence'},
      {topic_id: 3, subtopic: 'Communication & Security'},
      {topic_id: 3, subtopic: 'Databases'},
      {topic_id: 3, subtopic: 'Software Engineering'},
      {topic_id: 4, subtopic: 'Art History'},
      {topic_id: 4, subtopic: 'Grammar'},
      {topic_id: 4, subtopic: 'Music'},
      {topic_id: 4, subtopic: 'US History'},
      {topic_id: 4, subtopic: 'World History'},
      {topic_id: 5, subtopic: 'Microeconomics'},
      {topic_id: 5, subtopic: 'Macroeconomics'},
      {topic_id: 5, subtopic: 'Finance & Capital Markets'},
      {topic_id: 5, subtopic: 'Entrepreneurship'}
    ]
  },
  {
    table: 'quiz',
    records: [
      {subtopic_id: 14, quiz: 'Javascript Closures', public: true, created_by: 1},
      {subtopic_id: 14, quiz: 'MKS-LA Time Complexity', public: true, created_by: 1}
    ]
  },
  {
    table: 'question',
    records: [
      {
        quiz_id: 1, 
        question: `Does Javascript have lexical or dynamic scope?`
      },
      {
        quiz_id: 1, 
        question: `Is the following an example of closure? Why or why not?

  function incrementNum() {
      var count = 0;

      return function() {
        count += 1;
        return count;
      };
  }


  var increment = incrementNum();
  increment();
  increment();`
      },
      {
        quiz_id: 1, 
        question: `Is the following an example of closure? Why or why not?

  var count = 10

  function incrementNum () {
    count += 1
  }

  incrementNum();`
      },
      {
        quiz_id: 1, 
        question: `Is the following an example of closure? Why or why not?

  function bindFn (fn, context) {
    return function () {
      return fn.apply(context, arguments);
    };
  }`
      },
      {
        quiz_id: 1, 
        question: `What does bar(2) return?

  function add(x) {
    return function(y) {
      return x + y;
    }
  }

  var foo = add(1);
  var bar = add(3);

  foo(3);
  // what does this return?
  bar(2);`
      },
      {
        quiz_id: 1, 
        question: `What does foo(6) return in the following example?

  function add(x) {
     function sum (y) {
        return x + y;
    }
    return sum;
  }

  var foo = add(1);
  foo(3);
  // what does this function call return?
  foo(6);`
      },
      {
        quiz_id: 1, 
        question: `What is the value of count?

  function incrementNum() {
      var count = 2;

      return function {
          count += 1;
      }
  }

  var increment = incrementNum();
  increment();
  increment();`
      },
      {
        quiz_id: 1, 
        question: `What will be logged to the console?

  for (var i=0; i<=3; i++) {
      setTimeout( function timer(){
          console.log( i );
      }, i*1000 );
  }`
      },
      {
        quiz_id: 2, 
        question: `What is the Big O time complexity of the following function?

function sumArray(arr) {
  var sum = 0; 
  for(var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
    return sum;
}`
      },
      {
        quiz_id: 2, 
        question: `What is the time complexity (Big O) of the following function?

function unique (numbers) {
  var results = []

  for (var i=0; i < numbers.length; i++) {
    var num = numbers[i];
    if (numbers.indexOf(num) < 0) {
      results.push(num);
    }
  }
  return results;
}`
      },
      {
        quiz_id: 2, 
        question: `What is the Big O time complexity of the following function?

  function calculatePairs(a,b) {
    for(var i = 0; i < a.length; i++) {
      for(var j = 0; j < b.length; j++) {
        for(var k = 0; k < 200; k++) {
          console.log(a,b);
        }
      }
    }
  }`
      },
      {
        quiz_id: 2, 
        question: `What is the Big O time complexity of logging the value of each node in a binary tree?`
      },
      {
        quiz_id: 2, 
        question: `What is the average Big O time complexity of finding a value in a binary search tree?`
      },
      {
        quiz_id: 2, 
        question: `What is the Big O time complexity of the following function?


function sumInts(a,b) {
  return a + b;
}`
      },
      {
        quiz_id: 2, 
        question: `What would be the Big O time complexity of trying to break a password by calculating every combination of letters given the length of the password?`
      },
      {
        quiz_id: 2, 
        question: `What is the Big O time complexity of finding the two largest nums in an array by comparing every number in the array to every other number?`
      }
    ]
  },
  {
    table: 'answer_option',
    records: [
      {question_id: 1, answer: `Lexical scope because variable binding are based on where variables and blocks of scope are authored at writetime`, correct: true},
      {question_id: 1, answer: `Dynamic scope because variable binding are based on where variables and blocks of scope are authored at writetime`, correct: false},
      {question_id: 1, answer: `Lexical scope because variable binding are based on where variables and blocks of scope are authored at runtime`, correct: false},
      {question_id: 1, answer: `Dynamic scope because variable binding are based on where variables and blocks of scope are authored at runtime`, correct: false},
      {question_id: 2, answer: `Yes, because the anonymous function is accessing a variable declared in a different scope`, correct: false},
      {question_id: 2, answer: `Yes, because the anonymous function has access to incrementNum's variables even after incrementNum returns`, correct: true},
      {question_id: 2, answer: `No, because the anonymous function is being invoked in the same lexical scope it was defined in`, correct: false},
      {question_id: 2, answer: `No, because the anonymous function is updating a variable outside of its own scope`, correct: false},
      {question_id: 3, answer: `Yes, because incrementNum has a closure over the variable count`, correct: false},
      {question_id: 3, answer: `Yes, because incrementNum is updating a variable and can be invoked more than once`, correct: false},
      {question_id: 3, answer: `No, because incrementNum is being invoked in the same lexical scope it was defined in`, correct: true},
      {question_id: 3, answer: `No, because incrementNum is updating a variable, but not returning anything`, correct: false},
      {question_id: 4, answer: `Yes, because the anonymous function is defined inside of bindFn`, correct: false},
      {question_id: 4, answer: `Yes, because the anonymous function has access to bindFn’s arguments even after bindFn returns`, correct: true},
      {question_id: 4, answer: `No, because the anonymous function returns another function`, correct: false},
      {question_id: 4, answer: `No, because the anonymous function does not access any variables defined in bindFn's scope`, correct: false},
      {question_id: 5, answer: `1`, correct: false},
      {question_id: 5, answer: `3`, correct: false},
      {question_id: 5, answer: `5`, correct: true},
      {question_id: 5, answer: `8`, correct: false},
      {question_id: 6, answer: `1`, correct: false},
      {question_id: 6, answer: `3`, correct: false},
      {question_id: 6, answer: `4`, correct: false},
      {question_id: 6, answer: `7`, correct: true},
      {question_id: 7, answer: `1`, correct: false},
      {question_id: 7, answer: `2`, correct: false},
      {question_id: 7, answer: `3`, correct: false},
      {question_id: 7, answer: `4`, correct: true},
      {question_id: 8, answer: `0,1,2,3`, correct: false},
      {question_id: 8, answer: `3,3,3,3`, correct: false},
      {question_id: 8, answer: `4,4,4,4`, correct: true},
      {question_id: 8, answer: `1,2,3,4`, correct: false},
      {question_id: 9, answer: `O(1) Constant`, correct: false},
      {question_id: 9, answer: `O(n) Linear`, correct: true},
      {question_id: 9, answer: `O(n^2) Quadratic`, correct: false},
      {question_id: 9, answer: `O(log n) Logarithmic`, correct: false},
      {question_id: 9, answer: `O(C^n) Exponential`, correct: false},
      {question_id: 10, answer: `O(1) Constant`, correct: false},
      {question_id: 10, answer: `O(log n) - Logarithmic`, correct: false},
      {question_id: 10, answer: `O(n) - Linear`, correct: false},
      {question_id: 10, answer: `O(n^2) - Quadratic`, correct: true},
      {question_id: 11, answer: `O(n)`, correct: false},
      {question_id: 11, answer: `O(n^2)`, correct: false},
      {question_id: 11, answer: `O(ab)`, correct: true},
      {question_id: 11, answer: `O(ab+k)`, correct: false},
      {question_id: 11, answer: `O(abk)`, correct: false},
      {question_id: 12, answer: `O(1) - Constant`, correct: false},
      {question_id: 12, answer: `O(n) - Linear`, correct: true},
      {question_id: 12, answer: `O(log n) - Logarithmic`, correct: false},
      {question_id: 12, answer: `O(n^2) - Quadratic`, correct: false},
      {question_id: 12, answer: `O(!n) - Exponential`, correct: false},
      {question_id: 13, answer: `O(1) - Constant`, correct: false},
      {question_id: 13, answer: `O(n) - Linear`, correct: false},
      {question_id: 13, answer: `O(log n) - Logarithmic`, correct: true},
      {question_id: 13, answer: `O(n^2) - Quadratic`, correct: false},
      {question_id: 13, answer: `O(!n) - Exponential`, correct: false},
      {question_id: 14, answer: `O(1) - Constant`, correct: true},
      {question_id: 14, answer: `O(n) - Linear`, correct: false},
      {question_id: 14, answer: `O(log n) - Logarithmic`, correct: false},
      {question_id: 14, answer: `O(n^2) - Quadratic`, correct: false},
      {question_id: 14, answer: `O(!n) - Exponential`, correct: false},
      {question_id: 15, answer: `O(1) - Constant`, correct: false},
      {question_id: 15, answer: `O(n) - Linear`, correct: false},
      {question_id: 15, answer: `O(log n) - Logarithmic`, correct: false},
      {question_id: 15, answer: `O(n^2) - Quadratic`, correct: false},
      {question_id: 15, answer: `O(!n) - Exponential`, correct: true},
      {question_id: 16, answer: `O(1) - Constant`, correct: false},
      {question_id: 16, answer: `O(n) - Linear`, correct: false},
      {question_id: 16, answer: `O(log n) - Logarithmic`, correct: false},
      {question_id: 16, answer: `O(n^2) - Quadratic`, correct: true},
      {question_id: 16, answer: `O(!n) - Exponential`, correct: false}
    ]
  },
  {
    table: 'attempt',
    records: [
      {quiz_id: 1, user_id: 1, pass_count: 4, fail_count: 4, result: 0.5}
    ]
  },
  {
    table: 'user_answer',
    records: [
      {attempt_id: 1, answer_option_id: 1},
      {attempt_id: 1, answer_option_id: 6},
      {attempt_id: 1, answer_option_id: 11},
      {attempt_id: 1, answer_option_id: 14},
      {attempt_id: 1, answer_option_id: 17},
      {attempt_id: 1, answer_option_id: 21},
      {attempt_id: 1, answer_option_id: 25},
      {attempt_id: 1, answer_option_id: 29}
    ]
  }
];

module.exports = DemoData;