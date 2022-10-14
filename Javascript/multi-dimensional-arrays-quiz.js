// 1. Create a multidimensional array to hold quiz questions and answers
const octoQuiz = [
    ['How many brains does an octopus have?', '10'],
    ['How many hearts does an octopus have?', '3'],
    ['Octopi have no bones. T or F?', 'T']
    
]

// 2. Store the number of questions answered correctly
let correctAnswers = 0;

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
for (let i = 0; i < octoQuiz.length; i ++) {

    let quizAnswer = prompt(octoQuiz[i][0]);
    if (quizAnswer === octoQuiz[i][1]) {
        correctAnswers++
}
}

// 4. Display the number of correct answers to the user

document.querySelector('main').innerHTML = `You got <strong>${correctAnswers}</strong> correct.`;