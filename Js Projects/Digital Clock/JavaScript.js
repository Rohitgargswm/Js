const clock = document.getElementById('Clock');

// let date = new Date();

setInterval(function () 
{
    
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
 
} , 1000);






//console.log(date.toLocaleDateString());

// let samay = console.log(date.toLocaleDateString());

// clock.innerHTML = `${samay}`

// clock.innerHTML = console.log(date.toLocaleDateString());

//clock.innerHTML = date.toLocaleDateString();

/*
setInterval(function () {

    

   /* let date = new Date();
    clock.innerHTML = date.toLocaleDateString();
})
*/