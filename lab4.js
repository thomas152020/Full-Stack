
const randomNumber = Math.floor(Math.random() * 100);

const button = document.getElementById("checkButton");
const result = document.getElementById("result");
const body = document.body;

button.addEventListener("click", function() {
  const userGuess = parseInt(document.getElementById("userGuess").value);

  if (isNaN(userGuess)) {
    result.textContent = "Por favor, digite um número válido!";
    return;
  }

  if (userGuess === randomNumber) {
    result.textContent = " Parabéns! Você acertou!";
    body.style.setProperty("background-color", "lightgreen");
  } else if (userGuess < randomNumber) {
    result.textContent = "O número é MAIOR. Tente novamente!";
    body.style.setProperty("background-color", "red");
  } else {
    result.textContent = "O número é MENOR. Tente novamente!";
    body.style.setProperty("background-color", "red");
  }
});
