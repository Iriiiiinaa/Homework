document.addEventListener('DOMContentLoaded', function () {
    let but = 0;
    const button = document.getElementById("button");
    const display = document.getElementById("ttt");
    const message = document.getElementById("butt");

    button.addEventListener('click', function () {
      but++;
      display.textContent = but;

      if (but >= 15) {
        button.disabled = true;
        message.style.display = "block";
      }
    });

    let count = 10;
    const displayy = document.getElementById("time");
    const resetButton = document.getElementById("bbb");
    let interval;

    function startTimer() {
      interval = setInterval(function () {
        count--;
        displayy.textContent = count;

        if (count <= 0) {
          clearInterval(interval);
          displayy.textContent = "Время вышло!";
        }
      }, 1000);
    }

    resetButton.addEventListener('click', function () {
      clearInterval(interval);
      count = 10;
      displayy.textContent = count;
      startTimer();
    });

    startTimer();

    let countt = 0;
    let intervall;
    const displayyy = document.getElementById("timerDisplay");
    const startButton = document.getElementById("startButton");
    const stopButton = document.getElementById("stopButton");
    const resettButton = document.getElementById("resetButton");

    startButton.addEventListener('click', function () {
      if (!intervall) {
        intervall = setInterval(function () {
          countt++;
          displayyy.textContent = count;
        }, 1000);
      }
    });

    stopButton.addEventListener('click', function () {
      clearInterval(intervall);
      intervall = null;
    });

    resettButton.addEventListener('click', function () {
      clearInterval(intervall);
      intervall = null;
      countt = 0;
      displayyy.textContent = count;
    });


})