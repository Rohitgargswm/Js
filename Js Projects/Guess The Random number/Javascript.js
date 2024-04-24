const randomNumber = Math.floor(Math.random()*100 + 1);       //Math.Floor for rounding off.

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const LowOrHigh = document.querySelector('.LowOrHigh');
const StartOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []        // We will create a array in which we will store already used values. 
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click' , function(e){    //By submiting input
        e.preventDefault();                             // will hold value
        const guess = parseInt(userInput.value);      // we'll be getting the value 
        console.log(guess);
        validataGuess(guess)                        //validateGuess fun. exectues for guess value
    })
}


 
function validataGuess(guess){      //Used to validate the input given bby the user
    if (isNaN(guess)){
        alert('Please enter a valid number')        
    }
    else if(guess < 0){
        alert('Enter a number greater than 0')
    }
    else if(guess > 100){
        alert('Enter a number lesser than 100')
    }
    else{
        prevGuess.push(guess);        // We'll push guess into the array of previous guess

        if(numGuess === 11){          // if it was the last attempt then 
            displayGuess(guess);
            displayMessage(`Your game is ended and the number was ${randomNumber}`)
            endGame();
        }
        else{                       //if it is a valide no. and also user have some guesses left
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}


function checkGuess(guess){      //Used to check the input given by the user is correct or not.
    if(guess === randomNumber){
        displayMessage('You guessed the number right')
    }
    else if(guess > randomNumber){
        displayMessage('Number is TOOO High');
    }
    else if(guess < randomNumber){
        displayMessage('Number is TOOO Low');
    }
}


function displayGuess(guess){      //Used to display the previous guesses and then to empty the slot
    userInput.value = ''
    guessSlot.innerHTML += ` ${guess} , `;
    numGuess ++ ;
    remaining.innerHTML = `${10 - numGuess}`
}

function displayMessage(message){      //Used to show message to the user 
    LowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id= "newGame" > NEW GAME </h2>`;
    StartOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    
}





