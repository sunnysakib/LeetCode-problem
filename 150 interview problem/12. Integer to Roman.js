/**
 * @param {number} num
 * @return {string}
 https://leetcode.com/problems/integer-to-roman/description/?envType=study-plan-v2&envId=top-interview-150
 */
var intToRoman = function(num) {
    let str = "";
    while(num>=1000){
        str +="M";
        num -= 1000;
    }
    if(num>=900){
        str += "CM";
        num -= 900;
    }
    if(num >= 500){
        str +="D";
        num -= 500;
    }
    if(num >= 400){
        str +="CD";
        num -= 400;
    }
    while(num>=100){
        str += "C";
        num -= 100;
    }
    if(num >= 90){
        str +="XC";
        num -= 90;
    }
    if(num >= 50){
        str +="L";
        num -= 50;
    }
    if(num >= 40){
        str +="XL";
        num -= 40;
    }
     while(num>=10){
        str += "X";
        num -= 10;
    }
    if(num === 9){
        str +="IX";
        num -= 9;
    }
    if(num >= 5){
        str +="V";
        num -= 5;
    }
    if(num === 4){
        str +="IV";
        num -= 4;
    }
    while(num>=1){
        str += "I";
        num -= 1;
    }
    return str;
    
};
