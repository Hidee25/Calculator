function clearNum() {
    x = document.getElementById('numBox');
    x.value = '';
}

function addNum(args){
    x = document.getElementById('numBox');
    if(x.value.length == 15){
        console.log('max number input');
        return;
    }
    x.value += args;
    if(x.value === '36364+') alert("You input a secret number");
}

function evalNum(){
    x = document.getElementById('numBox');
    evaluated_x = eval(x.value);
    console.log(evaluated_x);
    x.value = evaluated_x;
}

function percentageNum(){
    x = document.getElementById('numBox');
    x.value += '*100'
    evaluated_x = eval(x.value);
    x.value = evaluated_x;
}