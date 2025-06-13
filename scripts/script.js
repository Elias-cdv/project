document.addEventListener("DOMContentLoaded", () => {
  // Cálculo de fuerza
  const forceForm = document.getElementById("forceForm");
  if (forceForm) {
    forceForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const mass = parseFloat(document.getElementById("mass").value);
      const acceleration = parseFloat(document.getElementById("acceleration").value);
      if (!isNaN(mass) && !isNaN(acceleration)) {
        const force = mass * acceleration;
        localStorage.setItem("lastForceCalc", force);
        document.getElementById("result").textContent = `Force = ${force} N`;
      } else {
        document.getElementById("result").textContent = "Please enter valid numbers.";
      }
    });
  }

  // Cálculo de energía cinética
  const energyForm = document.getElementById("energyForm");
  if (energyForm) {
    energyForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const mass = parseFloat(document.getElementById("massKE").value);
      const velocity = parseFloat(document.getElementById("velocityKE").value);
      if (!isNaN(mass) && !isNaN(velocity)) {
        const KE = 0.5 * mass * velocity * velocity;
        document.getElementById("energyResult").textContent = `Kinetic Energy = ${KE} J`;
      } else {
        document.getElementById("energyResult").textContent = "Please enter valid numbers.";
      }
    });
  }

  // Cálculo de trabajo
  const workForm = document.getElementById("workForm");
  if (workForm) {
    workForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const force = parseFloat(document.getElementById("forceWork").value);
      const distance = parseFloat(document.getElementById("distanceWork").value);
      if (!isNaN(force) && !isNaN(distance)) {
        const work = force * distance;
        document.getElementById("workResult").textContent = `Work = ${work} J`;
      } else {
        document.getElementById("workResult").textContent = "Please enter valid numbers.";
      }
    });
  }
});
function checkAnswer(option) {
  const feedback = document.getElementById("trivia-feedback");
  if (option === 'B') {
    feedback.textContent = "Correct! Newton is the unit of force.";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "Incorrect. Try again!";
    feedback.style.color = "red";
  }
}
function checkQuiz() {
  const result = document.getElementById("quizResult");
  const answer = document.getElementById("quizSelect").value;
  if (answer === "right") {
    result.textContent = "✅ Correct!";
    result.style.color = "green";
  } else if (answer === "wrong") {
    result.textContent = "❌ That's not it. Try again.";
    result.style.color = "red";
  } else {
    result.textContent = "Please select an answer.";
    result.style.color = "orange";
  }
}


