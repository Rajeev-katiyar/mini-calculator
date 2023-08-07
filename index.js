
function cal() {
    var firstNumber = parseInt(document.getElementById('first_number').value);
    var secondNumber = parseInt(document.getElementById('second_number').value);
    var opr = document.getElementById('opr').value;
    var res;

    if (opr === '+') {
        res = firstNumber + secondNumber;
    } else if (opr === '-') {
        res = firstNumber - secondNumber;
    } else if (opr === '*') {
        res = firstNumber * secondNumber;
    } else if (opr === '/') {
        res = firstNumber / secondNumber;
    }

    document.getElementById('res').value = res;
}
