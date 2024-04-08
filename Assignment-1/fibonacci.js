const input = document.querySelector('input')
const button = document.querySelector('button')
const display =  document.querySelector('p')

button.addEventListener('click', () => {
    console.log(input.value)
    if (input.value === '') {
       alert("Enter a number")
    } else {
        display.innerText = 
        `Using Iteration: ${fibs(input.value)}
        Using Recursion: ${fibsRev(input.value)}`
    }
})

function fibs(num) {
    let fibsArr = []
    for (let i=0; i<num; i++) {
        if(i===0) {
            fibsArr.push(0)
        }else if(i===1) {
            fibsArr.push(1)
        } else {
            fibsArr.push(fibsArr[i-1] + fibsArr[i-2])
        }
    }
    return fibsArr
}

function fibsRev(num) {
    if (num === 1) return [0];
    if (num === 2) return [0, 1];
    if (num <= 0) return [];
    
    const prevSequence = fibsRev(num - 1);
    const nextNumber = prevSequence[prevSequence.length - 1] + prevSequence[prevSequence.length - 2];
    
    return [...prevSequence, nextNumber];
  }
  