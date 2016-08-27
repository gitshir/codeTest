#!/usr/bin/env node

/* Code test */
/* to run */
/* K:\imagex\codetest-a4ac4be6\code>node tenAdd.js 191 */

var enterNumber  = process.argv[2];
var numberArray = "";
//console.log(enterNumber);
scanNumbers (enterNumber);

module.exports = {
    tenAdd : function ()
    {
        parseNumber(123);
    }
}

function convertNum(str)
{
    return parseInt(str, 10);
}

var tenArray = [];
function scanNumbers(enterNumber)
{
    for (i=10; i < enterNumber ; i++)
    {
        parseNumber(i.toString());
    }
}


function parseNumber(num)
{
    numberArray = ("" + num).split("");
    var tenNumber = "";
    for (var i=0; i < numberArray.length; i++)
    {
        for(var n=1; n <=  numberArray.length; n++)
        {
            if(i+1 <= numberArray.length)
            {
                var result = sumArray(numberArray,  n);
//                console.log(i + "   "+ convertNum(numberArray[i]) + "   "+ convertNum(numberArray[i+1]) + "  " + result + "  " + numberArray.length);
                if(result == 1)
                {
                    break;
                }
                if(result == 0)
                {
                    tenNumber = numberArray[n] + numberArray[n+1];
                    var ten = [];
                    if((i==0) && (n==1))
                    {
                        if(numberArray.length - n == 1)
                            console.log(numberArray[i] + numberArray[i+1]);
//                            console.log(i + "   "+ n  + "  "  + numberArray.length + "  "  + tenNumber + "  "  + numberArray);

                    }

                }
                if(result == -1)
                {
                    n ++;
                    if(n <= numberArray.length)
                    {
                        var result = sumArray(numberArray,  n);
                        if(result == 0)
                        {
                            var seq = true;

                            tenNumber = numberArray[n] + numberArray[n+1] + numberArray[n+2 ];
                            if(i==0)
                            {
//                                console.log(i + "   "+ n + "   "+ convertNum(numberArray[i+1]) + "  " + result + "  " + numberArray.length);
                                if(numberArray.length - n == 1)
                                    console.log(numberArray[i] + numberArray[i+1] + numberArray[i+2 ]);
// /                                console.log(i + "   "+ n  + "  "  + numberArray.length + "  "  + tenNumber + "  "  + numberArray);
                            }

                        }
                    }
                }
            }
        }
    }
}

function addArray(numberArray,  n)
{
    var num = 0;
    for(var j =0; j <= n; j++)
    {
        num += convertNum(numberArray[j]);
    }
    return num;
}

function sumArray(numberArray, i, n)
{
//    console.log(numberArray + "  " + i + "  "+ n);
    var num = addArray(numberArray, i   )

    if(num == 10)
        return 0;
    if( num > 10)
        return 1;
    if(num < 10)
        return -1;
}
