
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
      .style("height", (d) => d + 'px')
*/

