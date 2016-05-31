# Quizzimodo
#### A community-driven quizzing platform where users can create a quiz, invite other users, and take oublic quizzes or ones created by friends. A great tool for teachers or a good way to test your friends, Quizzimodo is the most fun you will ever have taking a quiz.

## Developer Documentation

### Contributors: 
- Lukas Stuart-Fry
- Doug Cole
- Forrest Akin
- Nathaniel Schwab

### Tools Used:
- Angular
- Angular Material
- Angular UI-Router
- Node
- Express
- Bookshelf
- SQLite

### To start contributing to Quizzimodo codebase:

1. Fork the repo
2. Clone the fork locally
3. Run npm install in the root to install dependencies
4. cd into public directory and run bower install for client dependencies
5. cd back to the root directory and run nodemon app.js
6. Visit http://localhost:8008/#/ on your browser and signup 


## Front-end

### Client application information

Below, you’ll find the directory structure of the front-end. All Angular controllers can be found within the controllers directory. All routing can be found in the config directory.

```
public
├── assets
│   └── images/gifs
│ 
│──config
│   └──config.js
│ 
├── controllers
│   ├── auth.js
│   ├── quiz.js
│   ├── quizzes.js
│   ├── results.js
│   ├── take.js
│   └── user.js
│
├── services
│    └──services.js
│
├── views
│   ├── answers.html
│   ├── landing.html
│   ├── main.html
│   ├── makeQuiz.html
│   ├── menu.html
│   ├── nav.html
│   ├── question.html
│   ├── results.html
│   ├── selectQuiz.html
│   ├── signin.html
│   ├── signout.html
│   ├── signup.html
│   ├── takeQuiz.html
│   └── user.html
│
├── index.html
└── styles.css
```


- Inside the config directory, in config.js is where all routing is defined. Each html view is matched with a corresponding controller

- Some views share a controller and some views are nested as defined in config.js

- In index.html there is a nav view and and un-named view. This un-named view is where all the changing content is rendered


## General

- auth.js: calls signin/signout functions inside of services.js and authenticates users
- quiz.js: displays and collects data when making a quiz
- quizzes.js: displays available quizzes and loads chosen quiz in take view
- results.js: loads submitted quiz and displays results for submitted quiz
- take.js: loads chosen quiz and displays questions with answers
- user.js: displays user information on profile page





