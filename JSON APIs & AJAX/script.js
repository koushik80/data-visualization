
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

/*
// Access the JSON Data from an API

// Challenge 5: For the cat with the id of 2, print to the console the second value in the codeNames array. You should use bracket and dot notation on the object (which is saved in the variable json) to access the value.

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      const req = new XMLHttpRequest();
      req.open("GET",'/json/cats.json', true);
      req.send();
      req.onload=function(){
        const json = JSON.parse(req.responseText);
        document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
        // Add your code below this line
           console.log(json[2].codeNames[1]);
        // Add your code above this line
      };
    };
  });
*/

/*
// Convert JSON Data to HTML

// Challenge 6: Add a forEach method to loop over the JSON data and create the HTML elements to display it.

// Note: For this challenge, you need to add new HTML elements to the page, so you cannot rely on textContent. Instead, you need to use innerHTML, which can make a site vulnerable to cross-site scripting attacks.

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      const req = new XMLHttpRequest();
      req.open("GET",'/json/cats.json',true);
      req.send();
      req.onload = function(){
        const json = JSON.parse(req.responseText);
        let html = "";
        // Add your code below this line
        json.forEach(function(val) {
          const keys = Object.keys(val);
          html += "<div class = 'cat'>";
          keys.forEach(function(key) {
            html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
          });
          html += "</div><br>";
        });
        // Add your code above this line
        document.getElementsByClassName('message')[0].innerHTML = html;
      };
    };
  });
*/

/*
// Render Images from Data Sources
// Challenge 7: Add code to use the imageLink and altText properties in an img tag.


document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      const req=new XMLHttpRequest();
      req.open("GET",'/json/cats.json',true);
      req.send();
      req.onload = function(){
        const json = JSON.parse(req.responseText);
        let html = "";
        json.forEach(function(val) {
          html += "<div class = 'cat'>";
          // Add your code below this line
          html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>";
          // Add your code above this line
          html += "</div><br>";
        });
        document.getElementsByClassName('message')[0].innerHTML=html;
      };
     };
  });
  */

  /*
  // Pre-filter JSON to Get the Data You Need

  // Challenge 8: Add code to filter the json data to remove the cat with the id value of 1.

  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      const req = new XMLHttpRequest();
      req.open("GET",'/json/cats.json', true);
      req.send();
      req.onload=function(){
        let json = JSON.parse(req.responseText);
        let html = "";
        // Add your code below this line

        json = json.filter(function(val) {
  return (val.id !== 1);
});
        // Add your code above this line
         json.forEach(function(val) {
           html += "<div class = 'cat'>"

           html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>"

           html += "</div>"
         });
         document.getElementsByClassName('message')[0].innerHTML = html;
       };
     };
  });
  */

  /*
// Get Geolocation Data to Find A User's GPS Coordinates

// Challenge 9: Add the example code inside the script tags to check a user's current location and insert it into the HTML.

if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position) {
    document.getElementById('data').innerHTML="latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
  });
}
*/