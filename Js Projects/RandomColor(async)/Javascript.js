const randomColor = function() {
    hex = '123456789ABCDEF';
    let color = '#';

    for(let i = 0 ; i<6 ; i++){
        color += hex[Math.floor(Math.random() *16 )]
    }
    return color;
};


// console.log(randomColor());

let intervalId;       // We have declared intervalId out so it can go as global scope's variable

const startChangingColor = function(){

    intervalId = setInterval(changeBgColor ,1000);

    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }

}

const stopChangingColor = function(){
    clearInterval(intervalId)
}


document.querySelector('#start').addEventListener('click',startChangingColor);

document.querySelector('#stop').addEventListener('click',stopChangingColor);








