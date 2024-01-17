// login-ariya
let loginAriya = document.getElementById('login');
loginAriya.addEventListener('click', function () {
    const login = document.getElementById('login-from');
    login.style.display = "none"
    const addPament = document.getElementById('add-pament');
    addPament.style.display = 'block'
})

//Deposit balance 

let DepositValu = document.getElementById('DepositValu');
DepositValu.addEventListener('click', function () {
    let depositNumber = numberInput('Depositamount');


    idUpdet('caruntValu', depositNumber)

    idUpdet('caruntBalance', depositNumber)

    document.getElementById('Depositamount').value = "";
})
//withdrow 
let withdrow = document.getElementById('withdrow');
withdrow.addEventListener('click', function () {
    let withdrowBalanc = numberInput('withdrowAmount')


    idUpdet('withdrowBalanc', withdrowBalanc);
    idUpdet('caruntBalance',-1* withdrowBalanc)

    document.getElementById('withdrowAmount').value = "";
})
// 
function numberInput(id) {
    let amount = document.getElementById(id).value;
    let result = parseFloat(amount);
    return result;
}
//
function idUpdet(id, addNumber) {
    const caruntValu = document.getElementById(id).innerText;
    const caruntAmount = parseFloat(caruntValu);
    const totaleAmount = addNumber + caruntAmount;
    document.getElementById(id).innerText = totaleAmount;
}