#!/usr/bin/env node

/* Code test */
/* to run */
/* K:\imagex\codetest-a4ac4be6\code>node tenAdd.js 191 */

var serverConf= require('.\tenAdd.js');

var enterNumber  = process.argv[3];
var enterFunction  = process.argv[2];
// unit test

switch(process.argv[2])
{
    case 0:
        testSumArray();
        break;
    case 1:
        testAddArray();
        break

}

testSumArray()
{
    sumArray(['1','2','3'   ] , 1);
}


testAddArray()
{
    addArray(['1','2','3'] , 1 ,3);
}
