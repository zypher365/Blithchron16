$(document).ready(function(){
    
    $('html, body').bind('DOMMouseScroll MouseScrollEvent MozMousePixelScroll wheel scroll', function() { 
          
        
        alert(x);
        
                                                                        });
    var temp=0;
    $(".st-content").scroll(function(){

        var x=$(".st-content").scrollTop();
        
        
        
        switch (true)
            {
                case ((x>100) && (temp==0)):
                {
                    $("#mymainbuttonchange").animate({marginLeft:"0"},350,"linear");
                    
                    temp=1;
                    break;
               
                }
                case ((x<=100) && (temp==1)):
                {
                    
                    $("#mymainbuttonchange").animate({marginLeft:"-150px"},350,"linear");
                    temp=0;
                }     
            }
        

      });

    $("#navclose").click(function(){

        $('#st-container').removeClass("st-menu-open");
    });
    
});
