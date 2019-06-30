$(document).ready(function () {

    var topics = ["Godzilla", "Superman", "Batman", "Super Mario"];
    $("#submit").on("click", function () {
        var gifVal = $("#submit-value").val().trim();
        topics.push(gifVal);
        console.log(JSON.stringify(topics))
        // topicsFunc();
        $("#submit-value").empty();
        var newGifButton = $("<button>");
        newGifButton.attr("data-gif", gifVal);
        newGifButton.attr("id", "gif-button");
        newGifButton.attr("type", "button");
        newGifButton.addClass("btn btn-primary mr-2 mb-2");
        newGifButton.text(gifVal);
        $("#button-area").append(newGifButton);

    });
    for (var i = 0; i < topics.length; i++) {
        // var topicsFunc = function () {
        var gifButton = $("<button>");
        gifButton.attr("data-gif", topic[i]);
        gifButton.attr("id", "gif-button");
        gifButton.attr("type", "button");
        gifButton.addClass("btn btn-primary mr-2 mb-2");
        gifButton.text(topics[i]);
        $("#button-area").append(gifButton);
    };

    $("#gif-button").on("click", function (){
        
    })





});