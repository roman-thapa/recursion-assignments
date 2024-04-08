const input = document.querySelector('input')
const button = document.querySelector('button')
const display =  document.querySelector('p')

button.addEventListener('click', () => {
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
    if (num <= 0) return [];
    if (num === 1) return [0];
    if (num === 2) return [0, 1];
  
    const prevSequence = fibsRev(num - 1);
    const length = prevSequence.length;
    
    if (length < 2) {
      return prevSequence.concat(length === 0 ? 0 : 1);
    }
  
    const nextNumber = prevSequence[length - 1] + prevSequence[length - 2];
    
    return [...prevSequence, nextNumber];
  }
  