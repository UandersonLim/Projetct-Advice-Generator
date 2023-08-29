const generateAdviceButton = document.getElementById('button');

generateAdviceButton.addEventListener("click", ()=>{
    generateAdvice()
});

async function generateAdvice(){
    const response = await fetch('https://api.adviceslip.com/advice');
    const idAdvice = await response.json()
    const searchAdvice = `${idAdvice.slip.advice}`
    document.getElementById('showadvice').innerHTML = searchAdvice
}

generateAdvice()