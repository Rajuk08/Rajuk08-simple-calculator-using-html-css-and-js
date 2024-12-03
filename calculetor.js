let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

// Add event listener for keyboard input
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        string = eval(string);
        input.value = string;
    } else if (e.key === 'Backspace') {
        string = string.substring(0, string.length - 1);
        input.value = string;
    } else if (e.key === 'Escape') {
        string = "";
        input.value = string;
    } else if (!isNaN(e.key) || "+-*/.".includes(e.key)) {
        string += e.key;
        input.value = string;
    } else {
        e.preventDefault(); // Prevent other keys from being entered
    }
});

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
});

