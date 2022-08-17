
//import d3 from 'd3-webpack-loader';


/*
// Add Document Elements with D3
// Challlenge 1: Use the select method to select the body tag in the document. Then append an h1 tag to it, and add the text Data Visualization with D3 into the h1 element.

const x = d3.select('body')
            .append('h1')
            .text('Data Visualization with D3');

*/

/*
// Select a Group of Elements with D3
// Challlenge 2: Select all of the li tags in the document, and change their text to the string list item by chaining the .text() method.

const list = d3.selectAll('li')
               .text('list item')

*/

/*
//Work with Data in D3
// Challlenge 3: Select the body node, then select all h2 elements. Have D3 create and append an h2 tag for each item in the dataset array. The text in the h2 should say New Title. Your code should use the data() and enter() methods.

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text("New Title")

*/

/*
//Work with Dynamic Data in D3

// Challlenge 4: Change the text() method so that each h2 element displays the corresponding value from the dataset array with a single space and the string USD. For example, the first heading should be 12 USD.

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => `${d} USD`)
      //.text((d) => d + ' USD')

*/

/*
// Add Inline Styling to Elements

// Challlenge 5: Add the style() method to the code in the editor to make all the displayed text have a font-family of verdana.


const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => `${d} USD`)
      //.text((d) => d + ' USD')
      .style("font-family","verdana")

*/

/*
//Change Styles Based on Data

// Challlenge 6: Add the style() method to the code in the editor to set the color of the h2 elements conditionally. Write the callback function so if the data value is less than 20, it returns red, otherwise it returns green.

//Note: You can use if-else logic, or the ternary operator.

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => `${d} USD`)
      //.text((d) => d + ' USD')
      .style("color", (d) => {
        return (d < 20 ? 'red' : 'green')
      })

      */

/*
// Add Classes with D3

// Challlenge 7: Add the attr() method to the code in the editor and put a class of bar on the div elements.

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class","bar")
*/

/*
// Update the Height of an Element Dynamically

// Challlenge 8: Add the style() method to the code in the editor to set the height property for each element. Use a callback function to return the value of the data point with the string px added to it.

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      //.style("height", (d) => `${d}px`)
      .style("height", (d) => (d + 'px'))
*/

/*
// Change the Presentation of a Bar Chart

// Challlenge 9: First, add a margin of 2px to the bar class in the style tag. Next, change the callback function in the style() method so it returns a value 10 times the original data value (plus the px).

//Note: Multiplying each data point by the same constant only alters the scale. It's like zooming in, and it doesn't change the meaning of the underlying data.

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      .style("height", (d) => `${d * 10}px`)
      //.style("height", (d) => (d * 10 + "px"))

*/

/*
// Learn About SVG in D3

// Challlenge 10: Add an svg node to the body using append(). Give it a width attribute set to the provided w constant and a height attribute set to the provided h constant using the attr() or style() methods for each. You'll see it in the output because there's a background-color of pink applied to it in the style tag.

// Note: When using attr() width and height attributes do not have units. This is the building block of scaling - the element will always have a 5:1 width to height ratio, no matter what the zoom level is.

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

const svg = d3.select("body")
      .append("svg")
      .attr("width", w) //or .style("width",w)
      .attr("height", h) // or .style("height",h)

*/

/*
// Display Shapes with SVG

// // Challlenge 11: Add a rect shape to the svg using append(), and give it a width attribute of 25 and height attribute of 100. Also, give the rect x and y attributes each set to 0.

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h)
                  .append("rect")
                  .attr("width", 25)
                  .attr("height", 100)
                  .attr("x", 0)
                  .attr("y", 0)

*/


/*
// Create a Bar for Each Data Point in the Set

// Challlenge 12: Use the data(), enter(), and append() methods to create and append a rect for each item in dataset. The bars should display all on top of each other; this will be fixed in the next challenge.

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", 0)
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
*/

/*
// Dynamically Set the Coordinates for Each Bar

// Challlenge 13: Change the x attribute callback function so it returns the index times 30.

// Note: Each bar has a width of 25, so increasing each x value by 30 adds some space between the bars. Any value greater than 25 would work in this example.

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => {
             return i * 30
      })
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
*/

/*
// Dynamically Change the Height of Each Bar

// Challlenge 14: Change the callback function for the height attribute to return the data value times 3.

// Note: Remember that multiplying all data points by the same constant scales the data (like zooming in). It helps to see the differences between bar values in this example.

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

svg.selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 30)
      .attr("y", 0)
      .attr("width", 25)
      .attr("height", (d, i) => d * 3)
*/

/*

// Invert SVG Elements

// Challlenge 15: Change the callback function for the y attribute to set the bars right-side-up. Remember that the height of the bar is 3 times the data value d.

// Note: In general, the relationship is y = h - m * d, where m is the constant that scales the data points.

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
          .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d);
*/

/*
// Change the Color of an SVG Element

// Challlenge 16: Add an attr() method to set the fill of all the bars to the color navy.

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy")
*/

/*
// Add Labels to D3 Elements

// Challlenge 17: The code in the editor already binds the data to each new text element. First, append text nodes to the svg. Next, add attributes for the x and y coordinates. They should be calculated the same way as the rect ones, except the y value for the text should make the label sit 3 units higher than the bar. Finally, use the D3 text() method to set the label equal to the data point value.

// Note: For the label to sit higher than the bar, decide if the y value for the text should be 3 greater or 3 less than the y value for the bar.

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3)
       .text((d, i) => d)
*/

/*
// Style D3 Labels

// Challlenge 18: Set the font-size of the text elements to 25px, and the color of the text to red.

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3)
       .style("font-size", "25px")
       .attr("fill", "red")
*/
