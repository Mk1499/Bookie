import $ from 'jquery';

$(document).ready(function(){
    $(".viewBtns button").click(function(){
        $("button").removeClass("activeBtn");
        $(this).addClass("activeBtn");
    })
})