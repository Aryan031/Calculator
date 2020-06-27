const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('button');
let screenValue = '';
//var beep = new Audio('beep.wav');

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
            //beep.play();
            //setTimeout(() => {
                screenValue = e.target.innerText;
                screen.value += screenValue;
            //}, 0);
        }
    })
}
