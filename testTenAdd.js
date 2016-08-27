#!/usr/bin/env node

/* Code test */
/* to run */
/* K:\imagex\codetest-a4ac4be6\code>node tenAdd.js 191 */
/**
  * @exports
  *
*/
var testcode= require('./tenAdd.js');

var enterNumber  = process.argv[3];
var enterFunction  = process.argv[2];
// unit test

startTest();

/**
  * @function
  * @param
  *
*/
function testSumArray()
{
    console.log('testSumArray');
    testcode.tenAdds(enterNumber);
}

/**
  * @function
  * @param
  *
*/
function testAddArray()
{
    console.log('testAddArray');
    testcode.tenAdds();
}

/**
  * @function
  * @param
  *
*/
function startTest()
{
    console.log('start test ' + process.argv[2]);
    switch(process.argv[2])
    {
        case '0':
            testSumArray();
            break;
        case '1':
            testAddArray();
            break

    }
}
