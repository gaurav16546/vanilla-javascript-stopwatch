const stopwatch = () => {
  const hour = document.querySelector("#hour");
  const minute = document.querySelector("#minute");
  const second = document.querySelector("#second");
  const start = document.querySelector("#start");
  const stop = document.querySelector("#stop");
  const reset = document.querySelector("#reset");
  let secondInitial = 00;
  let minuteInitial = 00;
  let hourInitial = 00;
  function timeSec() {
    secondInitial++;
    second.textContent = secondInitial;
    if (secondInitial > 58) {
      secondInitial = 0;
      timeMin();
    }
  }

  function timeMin() {
    minuteInitial++;
    minute.textContent = minuteInitial;
    if (minuteInitial >= 59) {
      minuteInitial = 0;
      timeHour();
    }
  }
  function timeHour() {
    hourInitial++;
    hour.textContent = hourInitial;
  }

  start.addEventListener("click", () => {
    start.textContent = "Start";
    const set = setInterval(timeSec, 1000);
    stop.addEventListener("click", () => {
      start.textContent = "Resume";
      clearInterval(set);
    });
  });

  reset.addEventListener("click", () => {
    secondInitial = 0;
    minuteInitial = 0;
    hourInitial = 0;
    second.textContent = secondInitial;
    minute.textContent = minuteInitial;
    hour.textContent = hourInitial;
  });
};
stopwatch();
