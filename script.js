const bulb = document.getElementById("bulb");
const statusText = document.getElementById("status");

bulb.addEventListener("click", () => {
    
    bulb.classList.toggle("on");

    if (bulb.classList.contains("on")) {
        statusText.textContent = "Bulb is ON";
    } else {
        statusText.textContent = "Bulb is OFF";
    }
});