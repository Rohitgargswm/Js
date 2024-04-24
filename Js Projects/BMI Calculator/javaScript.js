function bmi_cal(){
    const height = prompt("Enter height");
    const weight = prompt("enter weight")
    const ShowResult = document.querySelector('#ShowResult');
    
    if(height === '' || height < 0 || isNaN(height))
    {
        ShowResult.innerHTML = `Please give a valid height ${height}`
    }
    else if(weight === '' || weight < 0 || isNaN(weight))
    {
        ShowResult.innerHTML = `Please give a valid weight ${weight}`
    }
    else
    {
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        ShowResult.innerHTML = `<span>${bmi}</span>`
        console.log(`output: ${bmi}`)
    }
}
document.getElementById("Rohit").addEventListener('submit' , bmi_cal());


/*
form.addEventListener('submit' , function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const ShowResult = document.querySelector('#ShowResult');
    
    if(height === '' || height < 0 || isNaN(height))
    {
        ShowResult.innerHTML = `Please give a valid height ${height}`
    }
    else if(weight === '' || weight < 0 || isNaN(weight))
    {
        ShowResult.innerHTML = `Please give a valid weight ${weight}`
    }
    else
    {
        const bmi = ((weight / (height*height)/10000)).toFixed(2);
        ShowResult.innerHTML = `<span>${bmi}</span>`
        console.log(`output: ${bmi}`)
    }

});
*/