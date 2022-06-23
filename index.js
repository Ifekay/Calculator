

let numb1 = parseFloat(prompt(" Enter First Number"));
let operator = prompt("Enter an operator sign \r\n  E.g +, -, /, *, %, **");
let numb2 = parseFloat(prompt(` Enter Second Number  \r\n \r\n  ${numb1}  ${operator} Second Number`));

if (isNaN(numb1) || isNaN(numb2)){
    alert(" Enter valid numbers")
}else if (operator == "+"){
    alert(` Result of (${numb1} + ${numb2}) is :  \r\n ${numb1 + numb2} `)
} else if (operator == "-"){
    alert(` Result of (${numb1} - ${numb2}) is :  \r\n ${numb1 - numb2} `)
}else if (operator == "/"){
    alert(` Result of (${numb1} / ${numb2}) is :  \r\n ${numb1 / numb2} `)
} else if (operator == "*"){
    alert(` Result of (${numb1} * ${numb2}) is :  \r\n ${numb1 * numb2} `)
} else if (operator == "%"){
    alert(` Result of (${numb1} % ${numb2}) is :  \r\n ${numb1 % numb2} `)
} else if (operator == "**" || operator == "^"){
    alert(` Result of (${numb1} ** ${numb2}) is :  \r\n ${numb1 ** numb2} `)
} else alert(`${operator}: is not a supported operator`) 

alert("Thank You For Coming");





// function math(){
//     switch(operator){
//         case "+" : 
//             document.write( ` Result of (${numb1} + ${numb2}) is : ${numb1 + numb2} `)
//             // alert(` Result of (${numb1} + ${numb2}) is : ${numb1 + numb2} ` );  
//      break;
//         case "-" : 
//             alert(` Result of (${numb1}  ${numb2}) is : ${numb1 - numb2} ` ) ;  
//     break;
//         case "*" : 
//             alert(` Result of (${numb1} * ${numb2}) is : ${numb1 * numb2} ` );
//     break;    
//         case "/" : 
//             alert(` Result of (${numb1} / ${numb2}) is : ${numb1 / numb2} ` );
//     break;
//     case "%" : 
//             alert(` Result of (${numb1} % ${numb2}) is : ${numb1 % numb2} ` );
//     break;
//         case  "**" :
//             alert(` Result of (${numb1} ** ${numb2}) is : ${numb1 ** numb2} `)
//     break;
//         case  "^" :
//         alert(` Result of (${numb1} ^ ${numb2}) is : ${numb1 ** numb2} `)
//     break;
//         default: alert(`${operator}: is not an operator`); 
//     }
// }
// math()
