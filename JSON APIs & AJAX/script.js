
/*
// Handle Click Events with JavaScript using the onclick property

// Challenge 1: Add a click event handler inside of the DOMContentLoaded function for the element with id of getMessage.

document.addEventListener('DOMContentLoaded', function(){
    // Add your code below this line
document.getElementById('getMessage').onclick = function () {}
    // Add your code above this line
  });
  */

/*
// Change Text with click Events

// Challenge 2: Add code inside the onclick event handler to change the text inside the message element to say Here is the message.

document.addEventListener('DOMContentLoaded', function(){
document.getElementById('getMessage').onclick = function(){
// Add your code below this line
document.getElementsByClassName('message')[0].textContent="Here is the message";

// Add your code above this line
    }
  });
*/

/*
//Get JSON with the JavaScript XMLHttpRequest Method

// Challenge 3: Update the code to create and send a GET request to the freeCodeCamp Cat Photo API. Then click the Get Message button. Your AJAX function will replace the The message will go here text with the raw JSON output from the API.

document.addEventListener('DOMContentLoaded', function(){

   document.getElementById('getMessage').onclick = function () {
      // Add your code below this line
      const req = new XMLHttpRequest();
      req.open("GET",'/json/cats.json',true);
      req.send();
      req.onload = function () {
        const json = JSON.parse(req.responseText);
        document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
};
      // Add your code above this line
    };
  });
*/

/*
// Get JSON with the JavaScript fetch method

// Challenge 4: Update the code to create and send a GET request to the freeCodeCamp Cat Photo API. But this time, using the fetch method instead of XMLHttpRequest.



document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('getMessage').onclick = () => {
      // Add your code below this line
    fetch('/json/cats.json')
	      .then(response => response.json())
        .then(data => {
          document.getElementById('message').innerHTML = JSON.stringify(data);
	})



      // Add your code above this line
    };
  });

*/