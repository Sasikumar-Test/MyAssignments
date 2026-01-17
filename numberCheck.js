function checkNumber(number){
    let result
    if(number>0)
    {
        result = "It is a positive number"
    }
    else if (number<0)
    {
       result = "It is a Negative number" 
    }
    else
    {
        result = "Neutral"
    }
    console.log(result)
    }
checkNumber(-0.1)