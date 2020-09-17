$(document).ready(function() {
    $.ajax({
        url: "https://us-central1-covid-miniproject-22326.cloudfunctions.net/app/api/surveys/"
    }).then(function(data) {
        console.log("here");
        // $('#n-cases').append()
        $('#tablebody').html("");
        for (item in data) {
            if (typeof data[item].name == 'undefined') {
                _name = "N/A";
                console.log("no name");
            }
            if (data[item].symptoms.has_positive_contact) {
                _pos = "Yes";
            } else {
                _pos = "No";
            }
            let count = 0;
            for (symptom in data[item].symptoms) {
                if (data[item].symptoms[symptom]) {
                    count++;
                }
            }
            let _dateobj = new Date(data[item].timestamp);
            let _date = _dateobj.toISOString().split('T')[0];
            temp = "<tr><td>"+ _name +"</td><td>"+ data[item].user_id +"</td><td>"+ _dateobj +"</td><td>"+ _pos +"</td><td>"+ count +"</td></tr>";
            console.log(temp);
            $('#tablebody').append(temp);
        }

    })
})