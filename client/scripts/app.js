$(document).ready(function(){

    $('body').append("<button id = 'clickyButton'>See all my wonderful Talents!</button>");

    $('body').on("click", "#clickyButton", function(){
        $("#clickyButton").hide();
        $( "#content" ).slideDown( "slow" );

    });
    $('body').on("click", "#content", function(){
        $( "#content" ).slideUp( "slow" );
        $("#clickyButton").show();
    });
});