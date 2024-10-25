const letters = "abcdefghijklmnopqrstuvwxyz";
const h1 = document.querySelector("h1");

// Convert encoded <br> tags in data-value to actual line breaks
const dataValue = h1.dataset.value.replace(/&#60;br&#62;/g, '<br>');
let interval = null;

function type() {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        h1.innerHTML = dataValue
            .split("")
            .map((char, index) => {
                if (index < iteration || char === "<" || char === "b" || char === "r" || char === ">") {
                    return dataValue[index];
                }

                return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

        if (iteration >= dataValue.length) { 
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 15);
}

if (h1) {
    type();
}