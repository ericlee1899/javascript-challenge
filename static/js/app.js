// from data.js
var tableData = data;

// selecting filter button
var filterbutton = d3.select("#filter-btn");
// activating filter button
filterbutton.on("click",function () {
        // stops page from reloading
        d3.event.preventDefault();
        // gets the filter id
        var filterid = d3.select("#datetime");
        // get the filter value
        var filtervalue = filterid.property("value");
        // log the filter
        console.log("filter", filtervalue);
        // filtering the data
        var filterdata = tableData.filter(tableData => tableData.datetime === filtervalue);
        // log the filter data
        console.log("filter data", filterdata);
        // selecting table
        var table = d3.select("table");
        // appending data into table
        filterdata.forEach(function (fun) {
            var rows = table.append("tr");
            Object.entries(fun).forEach(function ([key, value]) {
                console.log(key, value);
                var cells = rows.append("td");
                cells.text(value);
            });
        });
    });