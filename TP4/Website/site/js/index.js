// This is your JS Entry point... You can add as many as JS files you want if you think it is better!

import axios from 'axios';
function alphanumeric()
{
    var resultElement = document.getElementById('answer-str');
    var formula = document.getElementById('todoCalci').value;
    
    //console.log(formula);
    var data = formula;
    var symbol = /^[\d]+[\*\-\/\+][\d]+$/;
    var result = symbol.test(data);
    var div = "/";
    var sym = inputtxt.search(div);
    var number = [];
    var operation = [];
    var count = 0;
    var result= true;
    var index = 0;
    var ans = 0;
    number[count] = "";
    var input = data.split("");
    var op = "";



    axios.post('http://localhost:8081/', {
    method: "post",
    data:{
        formula: v1        
        }
    })
    .then((response) =>
    {
    if(len!=0)
    {

        if(result === true){
        for (i=1;i<len;i++){
            if (sym[i]===div && sym[i+1]===zer)
            {
                console.log(response.status+""+response.statustxt);
                resultElement.innerHTML = 'math error';
                return;
            }
        }
        resultElement.innerHTML = 'Valid Input';
    }
        else{
            resultElement.innerHTML = 'Syntax error';
        }

    }
    
    else{
        resultElement.innerHTML = 'Syntax error';
    }

    console.log(result);
    
    })
    .catch((error) =>
    {
        resultElement.innerHTML = response.error;
    })
    
    


    for(var i = 0; i < input.length; i++)
    {
        if(input[i]!=0 && result == false)
        {
            operation[index] = input[i];
            index++;
           
        }

        else
        {
            op = input[i];
            console.log(op);
            number[index] += input[i];
           
        }
    }


document.getElementById('btn-eval').onclick = function()
{
    var num1 = parseFloat(number[0]);
    axios.post('http://localhost:8081/', {
    method: "post",
    data:{
        formula: v1        
        }
    })
    .then((response) =>
    {
        for(var j = 0; j < operation.length; j++)
        {
            var num2 = parseFloat(number[j+1]);

            switch (op)
            {
                case "+":
                    ans = num1 + num2;
                    break;

                case "-":
                    ans = num1 - num2;
                    break;

                case "*":
                    ans = num1 * num2;
                    break;

                case "/":
                    ans = num1 / num2;
                    break;
            }
        }
        console.log("valid expression");
        console.log(ans);
    })
    .catch((error) =>
    {
        resultElement.innerHTML = response.error;
    })

}
}
