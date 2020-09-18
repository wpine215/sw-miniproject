// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

$(document).ready(function() {
  $.ajax({
      url: "http://api.covidtracking.com/v1/us/current.json"
  }).then(function(data) {
    var ctx = document.getElementById("myPieChart");
    var myPieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ["Pending", "Positive", "Negative"],
        datasets: [{
          data: [data[0].pending, data[0].positive, data[0].negative],
          backgroundColor: ['#007bff', '#dc3545', '#28a745'],
        }],
      },
    });
    $('#n-rec').prepend(data[0].recovered);
  })
})