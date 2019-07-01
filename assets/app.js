$(document).ready(function () {

    var topics = ["Godzilla", "Superman", "Batman", "Super Mario"];
    var buttonGenerator = function () {
        $("#button-area").empty();
        for (var i = 0; i < topics.length; i++) {
            var gifButton = $("<button>");
            gifButton.attr("data-gif", topics[i]);
            gifButton.attr("id", "gif-button");
            gifButton.attr("type", "button");
            gifButton.addClass("btn btn-primary mr-2 mb-2");
            gifButton.text(topics[i]);
            $("#button-area").append(gifButton);
            $(gifButton).on("click", function () {
                var gifValue = $(this).attr("data-gif");
                console.log(gifValue);
                var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=dAl8qLXL4ry8XzGCVzDgdRq1cV4Nm7jT&q=" + gifValue + "&limit=10&offset=0";
                // console.log(queryURL)
                $.ajax({
                    url: queryURL,
                    method: "GET"
                }).then(function (response) {
                    console.log(response);
                    var results = response.data;

                    for (var i = 0; i < results.length; i++) {
                        var gifDiv = $("<div class=row></div>");

                        var rating = $("<h3>").text("Rating: " + results[i].rating);

                        var gifImage = $("<img>");

                        gifImage.attr("src", results[i].images.fixed_height.url);

                        gifDiv.append(rating);
                        gifDiv.append(gifImage);
                        $("#gif-area").prepend(gifDiv);


                    }
                })
            })
        };
    }

    buttonGenerator();





    var currentVal;

    $("#submit").on("click", function () {
        currentVal = "";
        currentVal = $("#submit-value").val().trim();
        topics.push(currentVal);
        buttonGenerator();


    });









});