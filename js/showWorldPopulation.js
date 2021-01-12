//include("dbFunctions.php");
//
//$statistics = array();
//$query = "SELECT * FROM statistics";
//
//
//$result = mysqli_query($link, $query);
//
//while ($row = mysqli_fetch_assoc($result)) {
//    $statistics[] = $row;
//}



$(document).ready(function () {

    $.ajax({
        type: "GET",
        url: "http://localhost/C273/C273/P09/CloudNine/getStatistics.php",
        cache: false,
        dataType: "JSON",
        success: function (response) {
            for (i = 0; i < response.length; i++) {
                response[i].country + response[i].population;
            }
//            $("#barChart").html(response);
//            var country = response;
        },
        error: function (obj, textStatus, errorThrown) {
            console.log("Error " + textStatus + ": " + errorThrown);
        }
    });

    var data = [10, 20, 30, 40, 50];
    var labels = ["Singapore", "Malaysia", "Thailand", "Vietnam", "Myanmar"];
    var barChart = new Chart($("#barChart"), {
        type: 'horizontalBar',
        data: {
            datasets: [{
                    data: data,
                    backgroundColor: "lightblue",
                    label: 'Population'
                }],
            labels: labels
        },
        options: {
            responsive: true
        }
    });


});
