function toggleDiv(divId) {
   var test = $("#"+ divId + "2").is(':visible'); 
   if(!test) {
       $("#footer").show();
   } else {
       $("#footer").hide();
   }
   $("#"+divId).toggle(300);
   $("#"+divId +"2").toggle(300);
}

function offDisplay(divId) {
   $("#"+divId).hide();
   $("#"+divId + "2").hide();
}


$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 450                       // Scroll to top of body
    }, 500);
});