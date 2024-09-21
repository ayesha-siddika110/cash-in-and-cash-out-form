document.getElementById('btn-CashOutMoney').addEventListener('click', function (event){
    event.preventDefault();

    // catch the value of amount and pin
    const getamount = document.getElementById('input-amount').value;
    const getpin = document.getElementById('input-pin').value;

    if(getpin === '5'){
        const availableBalance = document.getElementById('available-balance').innerText;

        const availableBalanceToInteger = parseFloat(availableBalance)
        const getamountToInteger = parseFloat(getamount)
        const newAmount =  availableBalanceToInteger - getamountToInteger;
        

        document.getElementById('available-balance').innerText = newAmount;

        // document.getElementById('input-amount').innerText = '' ;
        // document.getElementById('input-pin').innerText = '' ;
        
    }
    else{
        alert('Wrong pin number')
    }

})
