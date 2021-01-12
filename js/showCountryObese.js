$(document).ready(function () {

    $("#idCountry").change(function () {
        var id = $("#idCountry").val();
        $.ajax({
            type: "GET",
            url: "https://c273-p09.azurewebsites.net/getCountryDetails.php",
            cache: false,
            data: "id=" + id,
            dataType: "JSON",
            success: function (response) {
                var message = "<tr><th>Population</th><th>Obese</th></tr>";
                console.log("success");
                for (i = 0; i < response.length; i++) {
                    message += "<td>" + response[i].population + "</td>"
                            + "<td>" + response[i].obese + "</td>";
                }
                $("#obeseTable").html(message);
            },
            error: function (obj, textStatus, errorThrown) {
                console.log("Error " + textStatus + ": " + errorThrown);
            }
        });
    });


});
