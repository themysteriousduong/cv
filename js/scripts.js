// const console = require("console");

// $( document ).ready(function() {
//     $(".body-container").fadeIn(1000);
//     console.log("READY");
// });

$(document).ready(function () {
    console.log("READY");
    var body = $('.body-container')
    body.hide().slideDown({duration:1000, queue:false});
    body.hide().fadeIn({duration:1000, queue:false});
});