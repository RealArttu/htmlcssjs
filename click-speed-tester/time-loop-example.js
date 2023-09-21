var i = 10;                  //  set your counter to 1

function myLoop() {         //  create a loop function
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    console.log('hello');
    console.log(i);         //  your code here
    i--;                    //  increment the counter
    if (i > -1) {           //  if the counter < 10, call the loop function
      myLoop();             //  ..  again which will trigger another 
    }                       //  ..  setTimeout()
  }, 1000)
}

myLoop();                   //  start the loop