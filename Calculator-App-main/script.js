let input = document.querySelector(".inputData");
let btns = document.querySelectorAll(".content");


btns.forEach(btn => {
    btn.addEventListener("click", () => {
        let mybtninput = btn.innerText;
        // console.log(mybtninput);

        // C = clear all
        if (mybtninput === "C" || btn.classList.contains("clear")) {
            input.value = "";
            return;
        }

        // AC = remove last character
        else if (mybtninput === "AC" || btn.classList.contains("clearAC")) {
            input.value = input.value.slice(0, -1);
            return;
        }

        // = -> calculate result
        else if (mybtninput === "=") {
            // Calculate the expression
            try {
                input.value = eval(input.value); // eval evaluates string as math
            } catch {
                input.value = "Error";
            }
        }
        
        // Add other buttons
        else{
            input.value += mybtninput;
        }

    })
});