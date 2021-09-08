const button = document.getElementById("countButton");
button.addEventListener("click", contagem);  
function contagem(){
    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase();
    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    words = typedText.split(/\s/);
    const letterCounts = {};
    const letterword ={};
    for (let i = 0; i < typedText.length; i++) {
        let currentLetter = typedText[i];
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1; 
        } 
        else { 
            letterCounts[currentLetter]++; 
        }
    }
    for (let letter in letterCounts) { 
        const span = document.createElement("span"); 
        const textContent = `"${letter}": ${letterCounts[letter]}, `;
        span.innerText = textContent; 
        const letters = document.getElementById("lettersDiv");
        letters.appendChild(span); 
    }
    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i];
        if (letterword[currentWord] === undefined) {
            letterword[currentWord] = 1; 
        } 
        else { 
            letterword[currentWord]++; 
        }
    }
    for (let letter in letterword) { 
        const span = document.createElement("span"); 
        const textContent = `"${letter}": ${letterword[letter]}, `;
        span.innerText = textContent; 
        const letters = document.getElementById("wordsDiv");
        letters.appendChild(span); 
    }
}
