// This is your JS Entry point... You can add as many as JS files you want if you think it is better!

import axios from 'axios';

var resultElement = document.getElementById('answer-str');
var formula = document.getElementById('todoCalci');

function alphanumeric(data)
{
    var input = data.split("");
    var number = [];
    var operation = [];
    var count = 0;
    var result = true;
    
    number[count] = "";
    
    for (var i = 0; i < input.length; i++)
    {
        if (isNaN(parseInt(input[i])) && result == false)
        {
            operation[count] = input[i];
            count++;
            number[count] = "";
            result = true;
        }
        else
        {
            number[count] += input[i];
            result = false;
        }
    }

    var num1 = parseFloat(number[0]);  
    for (var j = 0; j < operation.length; j++)
    {
        var num2 = parseFloat(number[j+1]);
        switch (operation[j]) 
        { 
            case "+":
                num1 = num1 + num2;
                break;
            case "-":
                num1 = num1 - num2;
                break;
            case "*":
                num1 = num1 * num2;
                break;
            case "/":
                num1 = num1 / num2;
                break;
        }
    }    
    return num1;
}

document.getElementById("btn-check").onclick = function()
{
    var formulaValue = formula.value;
    axios.post("http://localhost:8081/", {formula : formulaValue}).then((response) =>
    {
        var sym = formulaValue.search("/0");

        if(sym == -1)
        {
            resultElement.innerHTML = "Valid input";
        }
        else
        {
            resultElement.innerHTML = "Math error";
        }
    }).catch((error) =>
    {
        resultElement.innerHTML = "Syntax error";
    })
}

document.getElementById("btn-eval").onclick = function()
{
    var formulaValue = formula.value;
    axios.post("http://localhost:8081/", {formula : formulaValue}).then((response) =>
    {
        var sym = formulaValue.search("/0");
        var ans = alphanumeric(formulaValue);

        if(sym == -1)
        {
            resultElement.innerHTML = ans;
        }
        else
        {
            resultElement.innerHTML = "Math error";
        }
    }).catch((error) =>
    {
        resultElement.innerHTML = "Syntax error";
    })
}
