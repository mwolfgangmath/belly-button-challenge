const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Get the data directly from the URL
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
       //access first subject ID
       let og_sample = ids[0];

       //initial analysis and plots for the first subject
       store_meta_data(og_sample);
       subject_hbar_chart(og_sample);
       //bubbleChart(og_sample);
      });    
};
init();
//Create a horizontal bar chart to display the top 10 OTUs found in that individual.

//Retreive and display the individual subject's metadata: demographic information.   
function store_meta_data(subject) {
    d3.json(url).then((data) => {
        let meta_data = data.metadata;
        let value = meta_data.filter(result => result.id == subject);
        console.log(value);
        let value_data = value[0];
        //DEBUG: metadata is logging to console, but not displaying to the dashboard.
        d3.select("#sample-metadata").html("");
        Object.entries(value_data).forEach(([key,value]) => {
            console.log(key,value);
            d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
        });
    });
};

function subject_hbar_chart(subject){
d3.json(url).then((data) => {
    let value = data.samples.filter(result => result.id == subject);
    let value_data = value[0];
    // Create an array of category labels
    let labels = value_data.otu_labels.slice(0,10).reverse();

//slice the TopTen, then reverse order for horizontal bar chart
    let trace1 = {
        x: value_data.sample_values.slice(0,10).reverse(),
        y: value_data.otu_ids.slice(0,10).reverse(),
        text: labels,
        type: "bar",
        orientation: "h"
    };
    
    let traceData = [trace1];

    let layout = {
        title: `Top Ten OTU's for subject #${subject}`
        };
    Plotly.newPlot("bar", traceData, layout)
    });
};

  // Render the plot to the div tag with id "plot"

//Create a bubble chart that displays each sample.
    //Use otu_ids for the x values.
    //Use sample_values for the y values.
    //Use sample_values for the marker size.
    //Use otu_ids for the marker colors.
    //Use otu_labels for the text values.




//Update all the plots when a new sample is selected.  



//Deploy your app to a free static page hosting service, such as GitHub Pages. 
//Submit the links to your deployment and your GitHub repo. 

