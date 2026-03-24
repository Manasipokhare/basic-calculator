const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.innerText === "C") {
      display.value = "";
    } else if (btn.innerText === "=") {
      try {
        // Prevent division by zero
        if (display.value.includes("/0")) {
          display.value = "Error";
        } else {
          display.value = eval(display.value); // Evaluate expression
        }
      } catch {
        display.value = "Error";
      }
    } else {
      display.value += btn.innerText;
    }
  });
});

// Keyboard input support
document.addEventListener("keydown", (event) => {
  if (!isNaN(event.key) || "+-*/.".includes(event.key)) {
    display.value += event.key;
  } else if (event.key === "Enter") {
    try {
      if (display.value.includes("/0")) {
        display.value = "Error";
      } else {
        display.value = eval(display.value);
      }
    } catch {
      display.value = "Error";
    }
  } else if (event.key === "Escape") {
    display.value = "";
  }
});
