var openDivId = "sokoglam";

function toggleDiv(divId) {
    if(!(openDivId == divId)) {
        
       $("#"+openDivId).hide();
       $("#"+openDivId + "2").hide();
    }
   var test = $("#"+ divId + "2").is(':visible'); 
   if(!test) {
       $("#footer").show();
   } else {
       $("#footer").hide();
   }
   $("#"+divId).toggle(300);
   $("#"+divId +"2").toggle(300);
    openDivId = divId;
}

function offDisplay(divId) {
   $("#"+divId).hide();
   $("#"+divId + "2").hide();
}


$('.return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 450                       // Scroll to top of body
    }, 500);
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}

/*

$('.right2 img').click(function() {      // When arrow is clicked
    var src = $(this).attr('src');
    var x = $(document).scrollLeft(), y = $(document).scrollTop();
    
    document.getElementById('boxPhoto').src = src;
    
    $('#boxPhoto').height('auto');
    $('#boxPhoto').width('auto');
//    var h = $('#boxPhoto').height();
//    var w = $('#boxPhoto').width();
    var h = document.getElementById('boxPhoto').naturalHeight;
    var w = document.getElementById('boxPhoto').naturalWidth;
    //alert(h + ' ' + w);
    if(h > w) {
        var ratio = h/w;
        //alert(ratio);
        //$('#boxPhoto').height('90%');
        document.getElementById('boxPhoto').style.height = '630px';
        var newh = $('#boxPhoto').height();
        $('#boxPhoto').width(newh/ratio);
        //alert($('#boxPhoto').height());
        
    } else {
        $('#boxPhoto').width('500px');
    }
    
    
    $('.photoBox').fadeIn(300);
    $('.photoBox').focus();
    
    var newHeight = $('.right2').height();
    $('#stickyWrapper').height(newHeight);
    window.scrollTo(x, y);
});


$('.photoBox').on('blur',function(){
    $(this).fadeOut(300);
});


$('#close').click(function() {
    $('.photoBox').fadeOut(300);
    
});


*/