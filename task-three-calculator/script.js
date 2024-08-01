function clearDisplay() {
    document.getElementById("display").innerText = "";
}

function deleteLast() {
    const display = document.getElementById("display");
    display.innerText = display.innerText.slice(0, -1);
}

function appendToDisplay(value) {
    document.getElementById("display").innerText += value;
}

function calculate() {
    const display = document.getElementById("display");
    try {
        display.innerText = eval(display.innerText);
    } catch (e) {
        display.innerText = "Error";
    }
}


function toggleMode() {
    const body = document.body;
    body.classList.toggle("light-mode");
    const modeButton = document.querySelector(".toggle-mode");
    if (body.classList.contains("light-mode")) {
        modeButton.innerText = "Dark Mode";
    } else {
        modeButton.innerText = "Light Mode";
    }
}