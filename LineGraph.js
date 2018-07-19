// Read from csv -- filter
//

<script src="https://d3js.org/d3.v5.min.js"></script>

d3.csv("/Users/mounikapolisetti/Downloads/PovStats_csv/NumberOfPoor.csv", function(data) {
    console.log(data[0]);
});