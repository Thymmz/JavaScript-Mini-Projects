const input = document.getElementById("numOfWords");
const containter = document.querySelector(".container");

const generateWord = (n)=>{
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let text = ""

    for(let i=0; i<n; ++i){
        const randNum = (Math.random() * (letters.length - 1)).toFixed(0);
        text +=letters[randNum];
    }
    
    return text;
};

//console.log(generateWord(15));

let numOfWords;
const generatePara = () => {
    numOfWords = Number(input.value);    
    const para = document.createElement("p");    
    let data = ""    

    for (let i = 0; i < numOfWords; ++i) {
        const randWord = (Math.random() * 15).toFixed(0);
        data += generateWord(randWord);
        data += " "
    }

    para.innerText = data;    
    para.setAttribute("class", "myParas");
    containter.append(para);
};

