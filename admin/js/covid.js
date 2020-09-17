$(document).ready(function() {
    $.ajax({
        url: "https://api.apify.com/v2/key-value-stores/moxA3Q0aZh5LosewB/records/LATEST?disableRedirect=true"
    }).then(function(data) {
        console.log("here");
        $('#n-cases').prepend(data.totalCases);
        $('#n-dead').prepend(data.totalDeaths);
    })
})