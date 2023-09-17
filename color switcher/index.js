document.querySelectorAll(".box").forEach((box) => {
            let main = document.querySelector(".main");
            box.addEventListener("click",() => {
                document.body.style.backgroundColor = box.dataset.color;
            })
});