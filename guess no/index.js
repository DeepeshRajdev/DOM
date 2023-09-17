let ans = 1 + Math.floor(Math.random() * 100);
let turns = 5;
let form = document.querySelector("form");
let cnt = 20;
let timer = setInterval(() => {
    document.querySelector(".timer").innerHTML = --cnt;
    if (cnt === 0) {
        let result = document.querySelector(".result");
        let btn = document.querySelector(".submit");
        result.style.display = "block";
        result.innerHTML = "Time Over";
        btn.innerHTML = "Play Again";
        btn.onclick = () => {
            window.location = window.location.href;
        }
        clearInterval(timer);
    }
}, 1000);
form.addEventListener("submit", (event) => {

    event.preventDefault();
    if (cnt > 0) {
        let result = document.querySelector(".result");
        let attempt = document.querySelector(".attempts");
        let btn = document.querySelector(".submit");
        result.style.display = "block";
        document.querySelector(".prv").style.display = "block";
        // if (turns > 0) {
        let guess = parseInt(document.querySelector("#guess").value);
        if (guess === ans && cnt > 0) {
            result.innerHTML = "Yay! You Won";
            btn.innerHTML = "Play Again";
            clearInterval(timer);
            btn.onclick = () => {
                window.location = window.location.href;
            }
        }
        else {
            if (turns === 1 || cnt <= 0) {
                result.innerHTML = "Game Over";
                btn.innerHTML = "Play Again";
                clearInterval(timer);
                btn.onclick = () => {
                    window.location = window.location.href;
                }
            }
            else if (guess < ans) {
                result.innerHTML = "Try Higher";
                document.querySelector("#guess").value = "";
            }
            else {
                result.innerHTML = "Try Lower";
                document.querySelector("#guess").value = "";
            }
        }
        attempt.appendChild(document.createTextNode(guess + "  "));
        // }
        // else {
        //     result.innerHTML = "Game Over";
        //     btn.innerHTML = "Play Again";
        //     btn.onclick = () => {
        //         window.location = window.location.href;
        //     }
        // }
        turns--;
        if (turns >= 0) document.querySelector(".turnsLeft").textContent = turns;
        // result.style.transform = "translateY(-5px)";
    }
});

