let output = document.querySelector('.output');
output.innerHTML = '';



let i = 10;

while (i>=0) {
    const para = document.createElement('p');   //creates a new paragraph every time the loop runs.
    if(i===10){ 
        para.textContent = "Countdown 10";
    }else if(i===0) {
        para.textContent = "Blast Off!";
    }else{
        para.textContent = i;
    }

    output.appendChild(para);   //appends the paragraph to the end of 'output' <div> every time the loop runs, before the initializer is decremented.
    i--;
}

// const para = document.createElement('p');
// para.textContent = ;
// output.appendChild(para);