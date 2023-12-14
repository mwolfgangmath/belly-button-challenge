const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Get the data directly from the URL and log to the console to view


// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log("Belly Button Diversity Data: ", data);
});

//Initiate dashboard at start up.
function init() {
    //populate the dropdown
    let drop_down = d3.select("#selDataset"); 
    d3.json(url).then(data => {
       let ids = data.names;
       console.log(ids);
       ids.forEach((id) => drop_down.append("option").attr("value",id).text(id));
       //access first subject ID
       let og_sample = ids[0];
       console.log(og_sample);
       
       //initial analysis and plots for the first subject
       store_meta_data(og_sample);
       subject_hbar_chart(og_sample);
       subject_bubble_chart(og_sample);
    });    
};

//Retreive and display the individual subject's metadata: demographic information.   
function store_meta_data(subject) {
    d3.json(url).then((data) => {
        let meta_data = data.metadata;
        let value = meta_data.filter(result => result.id == subject);
        console.log(value);
        let value_data = value[0];
        d3.select("#sample-metadata").html("");
        Object.entries(value_data).forEach(([key,value]) => {
            console.log(key,value);
            d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
        });
    });
};

//Create a horizontal bar chart to display the top 10 OTUs found in that individual.
function subject_hbar_chart(subject){
    d3.json(url).then((data) => {
        let value = data.samples.filter(result => result.id == subject);
        let value_data = value[0];
        
        let sample_values = value_data.sample_values.slice(0,10).reverse();
        let otu_ids = value_data.otu_ids.slice(0,10).reverse().map((id) => `OTU ${id}`);
        let otu_labels = value_data.otu_labels.slice(0,10).reverse();

        console.log(otu_ids, otu_labels, sample_values)

    let trace1 = {
        x: sample_values,
        y: otu_ids,
        labels: otu_labels,
        type: "bar",
        orientation: "h",
    };
    let traceData = [trace1];

    let layout = {
        title: `Top Ten OTU's for subject #${subject}`
        //height: 500,
        //width:600,
        };
        
    Plotly.newPlot("bar", traceData, layout)
    });
};

//Create a bubble chart that displays each sample.
function subject_bubble_chart(subject){
    d3.json(url).then((data) => {
        let value = data.samples.filter(result => result.id == subject);
        let value_data = value[0];
        
        let sample_values = value_data.sample_values;
        let otu_ids = value_data.otu_ids;
        let otu_labels = value_data.otu_labels;

    let trace2 = {
        x: otu_ids,
        y: sample_values,
        labels: otu_labels,
        mode: "markers",
        marker:{
            size: sample_values,
            color: otu_ids,
            colorscale: "Earth"
        }
    };
    let traceData = [trace2];
    let layout = {
        title: `Bacteria/Sample for Subject #${subject}`,
        hovermode: "closest",
        xaxis: {title:"OTU ID"},
        };
        
    Plotly.newPlot("bubble", traceData, layout)
    });
};

//Update all the plots when a new sample is selected.  
function optionChanged(subject_id) {
    console.log("Subject #:", subject_id);
    //call all functions to refresh dashboard
    store_meta_data(subject_id);
    subject_hbar_chart(subject_id);
    subject_bubble_chart(subject_id);
};

//Let's do it!
init();


//Deploy your app to a free static page hosting service, such as GitHub Pages. 
//Submit the links to your deployment and your GitHub repo. 