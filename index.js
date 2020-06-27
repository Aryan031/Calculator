const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('button');
let screenValue = '';

for(button of buttons){
    button.addEventListener('click', (e)=>{
        // console.log(e.target.innerText);
        if(e.target.innerText == 'C'){
            screen.value = '';
        }
        else if(e.target.innerText == '←'){
            screen.value = screen.value.substr(0, screen.value.length - 1);
        }
        else if(e.target.innerText == '='){
            screen.value = eval(screen.value);
        }
        else{
            screenValue = e.target.innerText;
            screen.value += screenValue;
        }
    })
}
