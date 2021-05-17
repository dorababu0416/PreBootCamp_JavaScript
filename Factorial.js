const readline = require('readline');

const inp = readline.createInterface({

  input: process.stdin

});

const userInput = [];

inp.on("line", (data) => {

 userInput.push(data);

});

inp.on("close", () => {

var input = userInput[0];

var ou2=1;
  for(i=input;i!==0;i--)
    ou2=ou2*i;
  
  console.log(ou2);

});
