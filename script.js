
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

/*
// Add a Hover Effect to a D3 Element

// Challlenge 19: You set the CSS class on the SVG elements with the attr() method. Then the :hover pseudo-class for your new class holds the style rules for any hover effects.
// Use the attr() method to add a class of bar to all the rect elements.This changes the fill color of the bar to brown when you mouse over it.

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
       .attr("class", "bar");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3);
*/

/*
// Add a Tooltip to a D3 Element

// Challlenge 20: Append a title element under each rect node. Then call the text() method with a callback function so the text displays the data value.

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
      .attr("fill", "navy")
      .attr("class", "bar")
      .append("title")
      .text((d) => d);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (d * 3 + 3))

*/

/*
// Create a Scatterplot with SVG Circles

// Challlenge 21: Use the data(), enter(), and append() methods to bind dataset to new circle elements that are appended to the SVG canvas.

// Note: The circles won't be visible because we haven't set their attributes yet. We'll do that in the next challenge.

const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];


const w = 500;
const h = 500;

const svg = d3.select("body")
              .append("svg")
              .attr("width", w)
              .attr("height", h);

svg.selectAll("circle")
   .data(dataset)
   .enter()
   .append("circle")

*/

/*
// Add Attributes to the Circle Elements

// Challlenge 22: Add cx, cy, and r attributes to the circle elements. The cx value should be the first number in the array for each item in dataset. The cy value should be based off the second number in the array, but make sure to show the chart right-side-up and not inverted. The r value should be 5 for all circles.

const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];


    const w = 500;
    const h = 500;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d) => d[0])
       .attr("cy", (d) => h - d[1])
       .attr("r", 5)
*/

/*

// Add Labels to Scatter Plot Circles

// Challlenge 23: The text nodes need x and y attributes to position it on the SVG canvas. In this challenge, the y value (which determines height) can use the same value that the circle uses for its cy attribute. The x value can be slightly larger than the cx value of the circle, so the label is visible. This will push the label to the right of the plotted point.
// Label each point on the scatter plot using the text elements.The text of the label should be the two values separated by a comma and a space.For example, the label for the first point is 34, 78. Set the x attribute so it's 5 units more than the value you used for the cx attribute on the circle. Set the y attribute the same way that's used for the cy value on the circle.


const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];


    const w = 500;
    const h = 500;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d, i) => d[0])
       .attr("cy", (d, i) => h - d[1])
       .attr("r", 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .attr("x", (d, i) => d[0] + 5)
       .attr("y", (d, i) => h - d[1])
       .text((d) => (d[0] + ', ' + d[1]))
*/

/*
// Create a Linear Scale with D3

// Challlenge 24: Change the scale variable to create a linear scale. Then set the output variable to the scale called with an input argument of 50.

const scale = d3.scaleLinear();
    const output = scale(50);

    d3.select("body")
      .append("h2")
      .text(output);
*/

/*
// Set a Domain and a Range on a Scale

// Challlenge 25: Create a scale and set its domain to [250, 500] and range to [10, 150].
// Note: You can chain the domain() and range() methods onto the scale variable.

const scale = d3.scaleLinear();
    scale.domain([250, 500]);
    scale.range([10, 150]);

const output = scale(50);
    d3.select("body")
      .append("h2")
      .text(output);
*/

/*
// Use the d3.max and d3.min Functions to Find Minimum and Maximum Values in a Dataset

// Challlenge 26: The positionData array holds sub arrays of x, y, and z coordinates. Use a D3 method to find the maximum value of the z coordinate (the third value) from the arrays and save it in the output variable.

const positionData = [[1, 7, -4],[6, 3, 8],[2, 9, 3]]

const output = d3.max(positionData, (d) => d[2]);

    d3.select("body")
      .append("h2")
      .text(output)

*/

/*
// Use Dynamic Scales

// Challlenge 27: Use the yScale variable to create a linear y-axis scale. The domain should start at zero and go to the maximum y value in the set. The range should use the SVG height (h) and include padding.

// Note: Remember to keep the plot right-side-up. When you set the range for the y coordinates, the higher value (height minus padding) is the first argument, and the lower value is the second argument.

const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];

    const w = 500;
    const h = 500;

    // Padding between the SVG canvas boundary and the plot
    const padding = 30;

    // Create an x and y scale

    const xScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, (d) => d[0])])
                    .range([padding, w - padding]);

    // Add your code below this line

    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, padding]);


    // Add your code above this line

    const output = yScale(411); // Returns 30
    d3.select("body")
      .append("h2")
      .text(output)
*/


/*
// Use a Pre-Defined Scale to Place Elements

// Challlenge 28: Use xScale and yScale to position both the circle and text shapes onto the SVG canvas. For the circles, apply the scales to set the cx and cy attributes. Give them a radius of 5 units, too.
// For the text elements, apply the scales to set the x and y attributes. The labels should be offset to the right of the dots. To do this, add 10 units to the x data value before passing it to the xScale.

const dataset = [
                  [ 34,     78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,   411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,    333 ],
                  [ 78,    320 ],
                  [ 21,   123 ]
                ];

    const w = 500;
    const h = 500;
    const padding = 60;

    const xScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[0])])
                     .range([padding, w - padding]);

    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, padding]);

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       // Add your code below this line

       .attr("cx", (d) => xScale(d[0]))
       .attr("cy", (d) => yScale(d[1]))
       .attr("r", 5);

       // Add your code above this line

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + ", "
 + d[1]))
       // Add your code below this line
       .attr("x", (d) => xScale(d[0] + 10))
       .attr("y", (d) => yScale(d[1]));
       // Add your code above this line
*/

/*
// Add Axes to a Visualization

// Challlenge 29: The scatter plot now has an x-axis. Create a y-axis in a variable named yAxis using the axisLeft() method. Then render the axis using a g element. Make sure to use a transform attribute to translate the axis by the amount of padding units right, and 0 units down. Remember to call() the axis.

const dataset = [
                  [ 34,     78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,   411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,    333 ],
                  [ 78,    320 ],
                  [ 21,   123 ]
                ];

    const w = 500;
    const h = 500;
    const padding = 60;

    const xScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[0])])
                     .range([padding, w - padding]);

    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, padding]);

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d) => xScale(d[0]))
       .attr("cy",(d) => yScale(d[1]))
       .attr("r", (d) => 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + "," + d[1]))
       .attr("x", (d) => xScale(d[0] + 10))
       .attr("y", (d) => yScale(d[1]))

    const xAxis = d3.axisBottom(xScale);
    // Add your code below this line
    const yAxis = d3.axisLeft(yScale);
    // Add your code above this line

    svg.append("g")
       .attr("transform", "translate(0," + (h - padding) + ")")
       .call(xAxis);

    // Add your code below this line

   svg.append("g")
       .attr("transform", "translate(" + padding + ",0)")
       .call(yAxis);

    // Add your code above this line

    */