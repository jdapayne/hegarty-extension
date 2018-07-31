// Page type
// TO DO

// Extract some useful variables.
// Need to take in to account page type

// On video page
var clip_number = $(".Video__title").html().match(/\d+/)[0];
var preview_url = "https://hegartymaths.com/skills/"+clip_number+"/preview"

// Add preview button if possible
let quiz_btn = $(".Btn__assessment");
if (quiz_btn.length == 1) {

    // Make another button and style it
    quiz_btn.css("width", "48%");
    var preview_btn = quiz_btn.clone();
    preview_btn.html(function(idx,html) {
        html = html.replace("Do quiz","Preview");
        html = html.replace("Continue quiz","Preview");
        html = html.replace(/\s\s+/g,"");
        return html;
    });
    preview_btn.css("background-color", "#DDBB33");

    // Set click action to go to preview page
    preview_btn.click(function (event) {
        location = preview_url
    });

    preview_btn.insertAfter(quiz_btn);
}


