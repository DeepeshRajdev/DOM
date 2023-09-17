let btn = document.querySelector("#submit");
btn.addEventListener("click", (eventDetails) => {
    let result = document.createElement("h2");
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    if(height === "" || height < 0 || isNaN(height)){
        let display = document.createTextNode("INVALID HEIGHT");
        result.appendChild(display);
    }
    else if(weight === "" || weight < 0 || isNaN(weight)){
        let display = document.createTextNode("INVALID WEIGHT");
        result.appendChild(display);
    }
    else{
    let val = (weight * 100 * 100 / (height * height)).toFixed(2);
    let condition;
    if (val > 18.5 && val < 25) condition = "Fit";
    else if (val <= 18.5) condition = "Underweight";
    else condition = "Overweight";
    let display = document.createTextNode(`You are ${condition}. Your BMI is ${val}`);
    result.appendChild(display);
    }
    result.style.color = "rgb(188, 135, 163)";
    result.style.padding="12px";
    result.style.fontFamily = "sans-serif"
    document.body.appendChild(result);
    document.querySelector("#height").value="";
    document.querySelector("#weight").value="";
    
});
