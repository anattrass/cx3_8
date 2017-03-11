var ColumnChart = function(containerToAdd, seriesToAdd) {

  var chart = new Highcharts.Chart({
    chart: {
      type: "column",
      renderTo: containerToAdd
    },
    title: {
      text: "Age of Characters"
    },
    series: 
    seriesToAdd
    ,
    xAxis: {
      categories: ["Characters"]
    },
    yAxis: {
     title: {
      text: 'Age'
     },
     min: 0
   }
 });
}