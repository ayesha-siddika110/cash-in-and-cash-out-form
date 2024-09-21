

// s-1: add event listener
// s- 2 : catch the value of amount and pin
// s-3: when the password id correct the ammount has been added the available balance

document.getElementById('btn-addMOney').addEventListener('click', function (event){
    event.preventDefault();

    // catch the value of amount and pin
    const getamount = document.getElementById('input-amount').value;
    const getpin = document.getElementById('input-pin').value;

    if(getpin === '5'){
        const availableBalance = document.getElementById('available-balance').innerText;

        const availableBalanceToInteger = parseFloat(availableBalance)
        const getamountToInteger = parseFloat(getamount)
        const newAmount = getamountToInteger + availableBalanceToInteger;
        

        document.getElementById('available-balance').innerText = newAmount;

        // document.getElementById('input-amount').innerText = '' ;
        // document.getElementById('input-pin').innerText = '' ;
        
    }
    else{
        alert('Wrong pin number')
    }

})


