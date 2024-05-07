


const form = document.querySelector('form')

form.addEventListener('submit' , function(e){
    e.preventDefault()
    //if we don't use "parseInt" then that will pass the value in string type so, we have to convert the value in "Integer type"
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height) ){
        results.innerHTML = `Please giver a vaid height, this is not a valid input : ${height}`
    }
    if(weight === '' || weight < 0 || isNaN(weight) ){
        results.innerHTML = `Please giver a vaid weight, this is not a valid input : ${weight}`
    }
    else{
        //the formula is --> (weight / ((height*height) / 10000)) and 
        //we are using "tofixed" to get the value in maximum 2 decimal number
        const bmi = (weight / ((height*height) / 10000)).toFixed(2)
        results.innerHTML = `<span>Your BMI is = ${bmi}</span>`
    
    }
    

})











