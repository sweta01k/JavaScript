function calculation(event) {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var operation = document.getElementById('operation').value;
    var result;
    // console.log(operation);
    switch (operation)
    {
        case "Addition":
            // console.log(result);
            result = parseInt(num1) + parseInt(num2);
            break;
        case "Subtraction":
            result = num1 - num2;
            break;
        case "Multiplication":
            result = num1 * num2;
            break;
        case "Divition":
            result = num1 / num2;
            break;
        case "Module":
            result = num1 % num2;
            break;
        default:
            document.write("INVALID INPUT");
}
if(num1 != "" && num2 != ""){
// console.log(result);
document.getElementById('result').innerText = "Result : " + result;
}
}
