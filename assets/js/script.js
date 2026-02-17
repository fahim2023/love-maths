document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.querySelectorAll("button");
  for (let button of buttons) {
    button.addEventListener("click", function () {
      if (this.getAttribute("data-type") === "submit") {
        checkAnswer();
      } else {
        let gameType = this.getAttribute("data-type");
        runGame(gameType);
      }
    });
  }
  runGame("addition");
});

function runGame(gameType) {
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;
  if (gameType == "addition") {
    displayAdditionQuestion(num1, num2);
  } else if (gameType === "subtract") {
    displaySubtractQuestion(num1, num2);
  } else if (gameType === "multiply") {
    displayMultiplyQuestion(num1, num2);
  } else if (gameType === "division") {
    displayDivisionQuestion(num1, num2);
  } else {
    alert(`Unknown game type: ${gameType}`);
    throw `Unknown game type; ${gameType}. Aborting`;
  }
}
function checkAnswer() {
  let userAnswer = parseInt(document.getElementById("answer-box").value);
  let calculatedAnswer = calculateCorrectAnswer();
  let isCorrect = userAnswer === calculatedAnswer[0];

  if (isCorrect) {
    alert("you got it right");
    incrementScore();
  } else {
    alert(
      ` aww you answered ${userAnswer}, the actual answer is ${calculatedAnswer[0]}`,
      incrementWrongAnswer(),
    );
  }
  document.getElementById("answer-box").value = "";

  runGame(calculatedAnswer[1]);
}
function calculateCorrectAnswer() {
  let operand1 = parseInt(document.getElementById("operand1").textContent);
  let operand2 = parseInt(document.getElementById("operand2").textContent);
  let operator = document.getElementById("operator").textContent;
  if (operator === "+") {
    return [operand1 + operand2, "addition"];
  } else if (operator === "-") {
    return [operand1 - operand2, "subtract"];
  } else if (operator === "x") {
    return [operand1 * operand2, "multiply"];
  } else if (operator === "/") {
    return [operand1 / operand2, "division"];
  } else {
    alert(`unimplemented operator ${operator}`);
    throw `unimplemented operator ${operator} aborting`;
  }
}
function incrementScore() {
  let score = parseInt(document.getElementById("score").textContent);
  document.getElementById("score").textContent = ++score;
  console.log(score);
}
function incrementWrongAnswer() {
  let incorrectScore = parseInt(
    document.getElementById("incorrectScore").textContent,
  );
  document.getElementById("incorrectScore").textContent = ++incorrectScore;
}
function displayAdditionQuestion(operand1, operand2) {
  document.getElementById("operand1").textContent = operand1;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "+";
}
function displaySubtractQuestion(operand1, operand2) {
  document.getElementById("operand1").textContent = operand1;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "-";
}
function displayMultiplyQuestion(operand1, operand2) {
  document.getElementById("operand1").textContent = operand1;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "x";
}
function displayDivisionQuestion(operand1, operand2) {
  document.getElementById("operand1").textContent = operand1;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "/";
}
