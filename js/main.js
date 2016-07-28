$(document).ready(function(){	
    function resize(){
       if( typeof( window.innerWidth ) == 'number' ) {
            myWidth = window.innerWidth;
            myHeight = window.innerHeight;
        } else if( document.documentElement && ( document.documentElement.clientWidth || 
        document.documentElement.clientHeight ) ) {
            myWidth = document.documentElement.clientWidth;
            myHeight = document.documentElement.clientHeight;
        } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
            myWidth = document.body.clientWidth;
            myHeight = document.body.clientHeight;
        }
    }
    $(window).resize(resize);
    resize();

    $.fn.placeholder = function() {
        if(typeof document.createElement("input").placeholder == 'undefined') {
            $('[placeholder]').focus(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                    input.removeClass('placeholder');
                }
            }).blur(function() {
                var input = $(this);
                if (input.val() == '' || input.val() == input.attr('placeholder')) {
                    input.addClass('placeholder');
                    input.val(input.attr('placeholder'));
                }
            }).blur().parents('form').submit(function() {
                $(this).find('[placeholder]').each(function() {
                    var input = $(this);
                    if (input.val() == input.attr('placeholder')) {
                        input.val('');
                    }
                });
            });
        }
    }
    $.fn.placeholder();
    
	// var myPlace = new google.maps.LatLng(55.754407, 37.625151);
 //    var myOptions = {
 //        zoom: 16,
 //        center: myPlace,
 //        mapTypeId: google.maps.MapTypeId.ROADMAP,
 //        disableDefaultUI: true,
 //        scrollwheel: false,
 //        zoomControl: true
 //    }
 //    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); 

 //    var marker = new google.maps.Marker({
	//     position: myPlace,
	//     map: map,
	//     title: "Ярмарка вакансий и стажировок"
	// });

    //  var options = {
    //     $AutoPlay: true,                                
    //     $SlideDuration: 500,                            

    //     $BulletNavigatorOptions: {                      
    //         $Class: $JssorBulletNavigator$,             
    //         $ChanceToShow: 2,                           
    //         $AutoCenter: 1,                            
    //         $Steps: 1,                                  
    //         $Lanes: 1,                                  
    //         $SpacingX: 10,                              
    //         $SpacingY: 10,                              
    //         $Orientation: 1                             
    //     }
    // };

    // var jssor_slider1 = new $JssorSlider$("slider1_container", options);

    $("#menu").hide();
     $('#menu_but').click(function(){
        $('#menu').fadeIn();
        $('#menu_but').hide();
     });
     $('.b-menu-list li a').click(function() {
        $('#menu').fadeOut();
        $('#menu_but').fadeIn();
     });
     $('#close_menu').click(function(){
        $('#menu').fadeOut();
        $('#menu_but').fadeIn();
     });

    $('.b-how_works-video-open div.video').click(function() {
      $(this).hide();
      var video_src = $(this).parent('.b-how_works-video-open').find('iframe').attr('data-src') + '?rel=0&autoplay=1';
      $(this).parent('.b-how_works-video-open').find('iframe').attr('src', video_src).fadeIn();
    });


    $('.tab_content').hide();
    $('.calc_tab_content:first').show();
    $('.calc_tabs li:first').addClass('active');

    $('.calc_tabs li').hover(
    function(event) {
          
        $('.calc_tabs li').removeClass('active');
        $(this).addClass('active');
        $('.calc_tab_content').hide();

        var select_tab = $(this).find('a').attr("data-tab");
        $(select_tab).fadeIn();
    },
    function() {
        $('.calc_tabs li').removeClass('active');
        $(this).addClass('active');
    });

     


});