const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Promise Pending
function log_data(data){
    console.log("Belly Button Diversity Data: ", data);
}
let navel_data = d3.json(url);
log_data(navel_data)

navel_data.then(log_data);
// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
});

function optionChanged(subject_id){
    console.log("Option Changed: ", subject_id);
}


function init(){
    //populate the dropdown
    let drop_down = d3.select("#selDataset");
    d3.json(url).then(data => {
       let ids = data.names;
       ids.forEach(id => drop_down.append("option").attr("value",id).text(id))
       optionChanged(ids[0]);
      });
    


    //call optionChanged with first subject ID
}
init();
// //Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
//     //Use sample_values as the values for the bar chart.
//     //Use otu_ids as the labels for the bar chart.
//     //Use otu_labels as the hovertext for the chart.
//     // Display the default plot
// let 
// //or
// let indiv_sample = Object.values(samples.id);
// //Refer to Day 2 Activity #10
// //be sure to sort and sliceTopTen (0,10), then reverse order for horizontal bar chart



// // Create an array of category labels
// // let labels = Object.keys(data.otu_ids);

// function init() {
    
//     let sorted_samples = navel_data.sort((a, b) => b.values - a.values);
//         sliced_samples = sorted_samples.slice(0,10);
//         reversed_samples = sliced_samples.reverse();

//     let trace1 = {
//         x: reversed_samples.map(object => object.otu_labels),
//         y: reversed_samples.map(object => object.otu_ids),
//         text: reversed_samples.map(object => object.otu_labels),
//         name: "ID",
//         type: "bar",
//         orientation: "h"
//     };
    
//     let traceData = [trace1];

//     let layout = {
//         title: "Belly Diversity results",
//         margin: {
//         l: 100,
//         r: 100,
//         t: 100,
//         b: 100
//         }
//     };
// }
//   init()
//   // Render the plot to the div tag with id "plot"
//   // Note that we use `traceData` here, not `data`
//   Plotly.newPlot("plot", traceData, layout);


// //Create a bubble chart that displays each sample.
//     //Use otu_ids for the x values.
//     //Use sample_values for the y values.
//     //Use sample_values for the marker size.
//     //Use otu_ids for the marker colors.
//     //Use otu_labels for the text values.




// //Display the sample metadata, i.e., an individual's demographic information.   



// //Display each key-value pair from the metadata JSON object somewhere on the page.



// //Update all the plots when a new sample is selected.  
// //Create any layout that you would like for your dashboard.



// //Deploy your app to a free static page hosting service, such as GitHub Pages. 
// //Submit the links to your deployment and your GitHub repo. 

// ////////////////////////from activity Day 3 #10 ///////////////////////////////////////////////
// // Create an array of each country's numbers
// // let australia = Object.values(data.australia);
// // let brazil = Object.values(data.brazil);
// // let uk = Object.values(data.uk);
// // let mexico = Object.values(data.mexico);
// // let singapore = Object.values(data.singapore);
// // let southAfrica = Object.values(data.southAfrica);

// // // Create an array of category labels
// // let labels = Object.keys(data.australia);

// // // Display the default plot
// // function init() {
// //   let data = [{
// //     values: australia,
// //     labels: labels,
// //     type: "pie"
// //   }];

// //   let layout = {
// //     height: 600,
// //     width: 800
// //   };

// //   Plotly.newPlot("pie", data, layout);
// // }

// // // On change to the DOM, call getData()
// // d3.selectAll("#selDataset").on("change", getData);

// // // Function called by DOM changes
// // function getData() {
// //   let dropdownMenu = d3.select("#selDataset");
// //   // Assign the value of the dropdown menu option to a letiable
// //   let dataset = dropdownMenu.property("value");
// //   // Initialize an empty array for the country's data
// //   let data = [];

// //   if (dataset == 'australia') {
// //       data = australia;
// //   }
// //   else if (dataset == 'brazil') {
// //       data = brazil;
// //   }
// //   else if (dataset == 'uk') {
// //       data = uk;
// //   }
// //   else if (dataset == 'mexico') {
// //     data = mexico;
// //   }
// //   else if (dataset == 'singapore') {
// //       data = singapore;
// //   }
// //   else if (dataset == 'southAfrica') {
// //     data = southAfrica;
// //   }
// // // Call function to update the chart
// //   updatePlotly(data);
// // }

// // // Update the restyled plot's values
// // function updatePlotly(newdata) {
// //   Plotly.restyle("pie", "values", [newdata]);
// // }

// // init();
