var ColumnChart = function() {
  var container = document.querySelector("#column-chart");

  var chart = new Highcharts.Chart({
      chart: {
        type: "column",
        renderTo: container
      },
      title: {
        text: "Our Favourite Programming Languages"
      },
      series: [
        {
          name: "Cohort 7",
          data: [8, 12, 3, 1],
          color: "tomato"
        },
        {
          name: "Cohort 8",
          data: [9, 10, 1, 0],
          color: "DodgerBlue"
        }
      ],
      xAxis: {
        categories: ["JavaScript", "Java", "Ruby", "Algol"]
      }
  });
}