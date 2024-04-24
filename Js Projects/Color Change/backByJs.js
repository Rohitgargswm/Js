
const butttons = document.querySelectorAll('.button')
const body = document.querySelector('body');

butttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function(eventt){
        console.log(eventt);
        console.log(eventt.target);

        switch (eventt.target) {
            case 'Aqua':
                body.style.backgroundColor = 'Aqua'; 
                break;
            case 'Grey':
                body.style.backgroundColor = 'Grey'; 
                break;
            case 'White':
                body.style.backgroundColor = 'White'; 
                break;

        
            default:
                body.style.backgroundColor = 'White'; 
                break;
        }

        // if (eventt.target === 'Aqua') {
        //     body.style.backgroundColor = eventt.target.id;            
        // }
        // if (eventt.target === 'Grey') {
        //     body.style.backgroundColor = eventt.target.id;            
        // }
        // if (eventt.target === 'White') {
        //     body.style.backgroundColor = eventt.target.id;            
        // }
    })
})