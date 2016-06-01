module.exports = {
  user: {
    id: {type: 'increments', nullable: false, primary: true},
    username: {type: 'string', nullable: false, maxlength: 200},
    password: {type: 'string', nullable: false, maxlength: 200},
    name: {type: 'string', nullable: false, maxlength: 200},
    email: {type: 'string', nullable: false, maxlength: 200},
    bio: {type: 'text', nullable: true},
    active: {type: 'boolean', nullable: false, defaultTo: true}
  },
  topic: {
    id: {type: 'increments', nullable: false, primary: true},
    topic: {type: 'string', nullable: false}
  },
  subtopic: {
    id: {type: 'increments', nullable: false, primary: true},
    topic_id: {type: 'integer', nullable: false, references: 'topic.id'},
    subtopic: {type: 'string', nullable: false}
  },
  quiz: {
    id: {type: 'increments', nullable: false, primary: true},
    subtopic_id: {type: 'integer', nullable: false, references: 'subtopic.id'},
    quiz: {type: 'string', nullable: false},
    details: {type: 'text', nullable: true},
    public: {type: 'boolean', nullable: false, defaultTo: false},
    start: {type: 'dateTime', nullable: true},
    end: {type: 'dateTime', nullable: true},
    created_by: {type: 'integer', nullable: false, references: 'user.id'},
    active: {type: 'boolean', nullable: false, defaultTo: true}
  },
  question: {
    id: {type: 'increments', nullable: false, primary: true},
    quiz_id: {type: 'integer', nullable: false, references: 'quiz.id'},
    question: {type: 'text', nullable: false}
  },
  answer_option: {
    id: {type: 'increments', nullable: false, primary: true},
    question_id: {type: 'integer', nullable: false, references: 'question.id'},
    answer: {type: 'text', nullable: false},
    correct: {type: 'boolean', nullable: false, defaultTo: false}
  },
  attempt: {
    id: {type: 'increments', nullable: false, primary: true},
    quiz_id: {type: 'integer', nullable: false, references: 'quiz.id'},
    user_id: {type: 'integer', nullable: false, references: 'user.id'},
    pass_count: {type: 'integer', nullable: false},
    fail_count: {type: 'integer', nullable: false},
    result: {type: 'float', nullable: false}
  },
  user_answer: {
    id: {type: 'increments', nullable: false, primary: true},
    attempt_id: {type: 'integer', nullable: false, references: 'attempt.id'},
    answer_option_id: {type: 'integer', nullable: false, references: 'answer_option.id'}
  },
  invitee: {
    id: {type: 'increments', nullable: false, primary: true},
    quiz_id: {type: 'integer', nullable: false, references: 'quiz.id'},
    user_id: {type: 'integer', nullable: false, references: 'user.id'}
  }
};
