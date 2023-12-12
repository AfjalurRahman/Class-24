let data = document.querySelector("input");
let btn = document.querySelector("button");
let finalResult = document.querySelector("h2");

btn.addEventListener("click", function (){
    let result = data.value;
    if(result >=80 && result <= 100) {
        finalResult.innerHTML = "A+";
        finalResult.style.color = "gold";
    }   else if(result >=70 && result <80){
        finalResult.innerHTML = "A";
        finalResult.style.color = "green";
    }   else if(result >=60 && result<70){
        finalResult.innerHTML = "A-";
        finalResult.style.color = "teal";
    }   else if (result >=50 && result <60) {
        finalResult.innerHTML = "B";
        finalResult.style.color = "blue";
    }   else if (result >=40 && result<50) {
        finalResult.innerHTML = "C";
        finalResult.style.color = "brown";
    }   else if (result >=33 && result <40) {
        finalResult.innerHTML = "D";
        finalResult.style.color = "orange";
    }   else if (result >100 || result <0) {
        finalResult.innerHTML = "Invalid Input";
        finalResult.style.color = "red";
    }   else {
        finalResult.innerHTML = "Fail";
        finalResult.style.color = "red";
    }
});


let age = document.querySelector(".a")
let area = document.querySelector(".b")
let edu = document.querySelector(".c")
let sub_btn = document.querySelector(".d")
let findings = document.querySelector("h4")

sub_btn.addEventListener("click", function(){
    let result_1 = age.value;
    let result_2 = area.value;
    let result_3 = edu.value;
    if (result_1 >= 25) {
        if (result_2 == "Dhaka") {
            if (result_3 == "BSC") {
                findings.innerHTML = "Match Found";
                findings.style.color = "green";
            }
            else {
                findings.innerHTML = "Edu Must be BSC"
            }
        }
        else {
            findings.innerHTML = "Area Must be Dhaka"
            findings.style.color = "red"
        }
    }
    else{
        findings.innerHTML = "Age Must Be 25 or more";
        findings.style.color = "red";
    }
})



// let y = document.querySelector(".e")
// let get_btn = document.querySelector(".f")
// let table = document.querySelector("h1")

// get_btn.addEventListener("click", function (){
//     let m_result = y.value;
//     for(i=1; i <=10; i++)
//     if (m_result >= 0) {
//         table.innerHTML = y + " X " + i + " = " + y*i
//     }
    
// })
