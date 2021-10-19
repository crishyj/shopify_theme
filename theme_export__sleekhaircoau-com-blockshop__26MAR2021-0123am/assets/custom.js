
jQuery(function(){

  jQuery("#contactFormName")
    .on("focus", function(){
          $('.input-span1').css('transform', 'none');
    })
    .on("blur", function(){
         $('.input-span1').css('transform', 'scaleX(0)');
    });
  
  jQuery("#contactFormEmail")
    .on("focus", function(){
          $('.input-span2').css('transform', 'none');
    })
    .on("blur", function(){
         $('.input-span2').css('transform', 'scaleX(0)');
    });
    
  jQuery("#contactFormTelephone")
    .on("focus", function(){
          $('.input-span3').css('transform', 'none');
    })
    .on("blur", function(){
         $('.input-span3').css('transform', 'scaleX(0)');
    });
    
  jQuery("#contactFormMessage")
    .on("focus", function(){
          $('.input-span4').css('transform', 'none');
    })
    .on("blur", function(){
         $('.input-span4').css('transform', 'scaleX(0)');
    });
  
  $('.product--sale').html('');
  



   
  
});

