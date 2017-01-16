
 $(function() {
          
            $( '#ri-grid' ).gridrotator( {
              rows    : 4,
              columns   : 6,
              animType  : 'fadeInOut',
              animSpeed : 1000,
              interval  : 1500,
              step    : 'random',
              maxStep: 2,
              preventClick: true,
              w240    : {
                rows  : 6,
                columns : 1
              },
              w320    : {
                rows  : 6,
                columns : 1
              },
              w480    : {
                rows  : 6,
                columns : 2
              },
              w1024  :{
                rows: 6,
                columns: 3
              },
              w1200: {
                rows: 5,
                columns: 4
              },
              w1400: {
                rows: 5,
                columns: 4
              }
            } );

            t=$(window).height();
            $(".hero").height(t);
            $(window).resize(function(){
                var t=$(window).height();
                $(".hero").height(t);
            });

            var $nav = $('#myNav');
            var $navghost = $('#navbar-ghost');
            var $window = $(window);
            var $animation_elements = $('.appear1, .appear2, .appear3');

            $window.bind('scroll resize', function () {
              if ($window.scrollTop() > 1 * $window.height()) {
                  $nav.removeClass('navbar-top');
                  $nav.addClass('navbar-fixed-top');
                  $navghost.addClass('ghost-active');

              } else {
                  $nav.removeClass('navbar-fixed-top');
                  $nav.addClass('navbar-top');
                  $navghost.removeClass('ghost-active');
              }

              var window_height = $window.height();
              var window_top_position = $window.scrollTop();
              var window_bottom_position = (window_top_position + window_height);

              $.each($animation_elements, function() {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if ((element_bottom_position >= window_top_position) &&
                    (element_top_position <= window_bottom_position)) {
                  $element.addClass('in-view');
                } else {
                  $element.removeClass('in-view');
                }
              });

            });  

             // Add scrollspy to <body>
            $('body').scrollspy({target: ".navbar", offset: 50});   

            // Add smooth scrolling on all links inside the navbar
            $("#myNav a").on('click', function(event) {
              // Make sure this.hash has a value before overriding default behavior
              if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;
                console.log(hash);
                if (hash == "#home") {
                    $('html, body').animate({
                    scrollTop: 0
                  }, 600, function(){
                    window.location.hash = '#';
                  });
                  return;
                }

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                  scrollTop: $(hash).offset().top - 15
                }, 600, function(){
             
                  // Add hash (#) to URL when done scrolling (default click behavior)
                  window.location.hash = hash;
                });
              }  // End if
            });

            $('#ourstory').parallax("40%", 0.3);
            $('#rsvp').parallax("50%", 0.3);

          

            $("#count-down").TimeCircles(
               {   
                 circle_bg_color: "#AE529A",
                 use_background: true,
                 bg_width: 1,
                 fg_width: 0.03,
                 time: {
                      Days: { color: "#fefeee" },
                      Hours: { color: "#fefeee" },
                      Minutes: { color: "#fefeee" },
                      Seconds: { color: "#fefeee" }
                  }
               }
            );

          });



        
        
        
        
        //START GOGOLE MAPS
//map
var map;
var boston = new google.maps.LatLng(42.360170, -71.058581);

var MY_MAPTYPE_ID = 'custom_style';

function initialize() {


    //start snazzy options
    var featureOpts = 
    [
    {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "stylers": [
            {
                "hue": "#00aaff"
            },
            {
                "saturation": -100
            },
            {
                "gamma": 2.15
            },
            {
                "lightness": 12
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 24
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 57
            }
        ]
    }
    ];
    //end snazzy options
    
    



    //start map options
    var mapOptions = {
        zoom: 13,
        center: boston,
        disableDefaultUI: false,
        scrollwheel: false,
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
        },
        mapTypeId: MY_MAPTYPE_ID
    };
    //end map options
    
    
    

    map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);

    var styledMapOptions = {
        name: 'Katherine & Lucas'
    };

    var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

    map.mapTypes.set(MY_MAPTYPE_ID, customMapType);


    
    //START 2
    
    //marker
    var image_2 = new google.maps.MarkerImage("img/icons/marker-church.png", null, null, null, new google.maps.Size(33,50));
    var positionpin_2 = new google.maps.LatLng(42.367687, -71.081913);
    var marker_2 = new google.maps.Marker({
      position: positionpin_2,
      icon: image_2,
      map: map,
      flat: true,
      title: 'Uluru (Ayers Rock)'
    });
    

    //box
    var boxText_2 = document.createElement("div");
    boxText_2.innerHTML = '<div class="ourstorysec_displaynone_iphoneland ourstorysec_displaynone_iphonepotr grid grid_6 percentage ourstorysec_border_white"><img class="ourstorysec_focus ourstorysec_border_white" src="img/banners/map-church.jpg"></div><div class="ourstorysec_displaynone_iphoneland ourstorysec_displaynone_iphonepotr grid grid_6 percentage ourstorysec_border_white"><div class="ourstorysec_focus center ourstorysec_sizing ourstorysec_paddingright30 ourstorysec_bg_white"><h4><strong>Our Home</strong></h4><div class="ourstorysec_space20"></div><h5>CERIMONY</h5><div class="ourstorysec_space20"></div><div class="ourstorysec_divider center small"><span class="ourstorysec_bg_grey2 "></span></div><div class="ourstorysec_space20"></div><p>11:30 AM</p></div></div>';

    var marker_2_options = {
         content: boxText_2
        ,disableAutoPan: false
        ,maxWidth: 0
        ,pixelOffset: new google.maps.Size(-420, -100)
        ,zIndex: null
        ,boxStyle: { 
          opacity: 1,
          width: "380px",
          background: "#fff",
         }
        ,closeBoxMargin: "10px"
        ,closeBoxURL: "img/icons/map-close.png"
        ,infoBoxClearance: new google.maps.Size(1, 1)
        ,isHidden: false
        ,pane: "floatPane"
        ,enableEventPropagation: false
    };

  var info_box_2 = new InfoBox(marker_2_options);
    
    google.maps.event.addListener(marker_2, 'click', function() {
        info_box_2.open(map,marker_2);
    });
    
    info_box_2.open(map,marker_2);
    //end 2
    
    
    
    
    //START 4
    
    //marker
    var image_4 = new google.maps.MarkerImage("img/icons/marker-hotel.png", null, null, null, new google.maps.Size(33,50));
    var positionpin_4 = new google.maps.LatLng(42.357242, -71.067195);
    var marker_4 = new google.maps.Marker({
      position: positionpin_4,
      icon: image_4,
      map: map,
      flat: true
    });
    

    //box
    var boxText = document.createElement("div");
    boxText.innerHTML = '<div class="ourstorysec_displaynone_iphoneland ourstorysec_displaynone_iphonepotr grid grid_6 percentage ourstorysec_border_white"><img class="ourstorysec_focus ourstorysec_border_white" src="img/banners/map-hotel.jpg"></div><div class="ourstorysec_displaynone_iphoneland ourstorysec_displaynone_iphonepotr grid grid_6 percentage ourstorysec_border_white"><div class="ourstorysec_focus center ourstorysec_sizing  ourstorysec_paddingright30 ourstorysec_bg_white"><h4><strong>Boston Common</strong></h4><div class="ourstorysec_space20"></div><h5>Park</h5><div class="ourstorysec_space20"></div><div class="ourstorysec_divider center small"><span class="ourstorysec_bg_grey2 "></span></div><div class="ourstorysec_space20"></div><p><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i></p></div></div>';

    var marker_4_options = {
         content: boxText
        ,disableAutoPan: false
        ,maxWidth: 0
        ,pixelOffset: new google.maps.Size(40, -90)
        ,zIndex: null
        ,boxStyle: { 
          opacity: 1,
          width: "380px",
          background: "#fff",
         }
        ,closeBoxMargin: "10px"
        ,closeBoxURL: "img/icons/map-close.png"
        ,infoBoxClearance: new google.maps.Size(1, 1)
        ,isHidden: false
        ,pane: "floatPane"
        ,enableEventPropagation: false
    };

  var info_box_4 = new InfoBox(marker_4_options);
    
    google.maps.event.addListener(marker_4, 'click', function() {
        info_box_4.open(map,marker_4);
    });
    
    info_box_4.open(map,marker_4);
    //end 4
    
    
    


}

google.maps.event.addDomListener(window, 'load', initialize);
//END GOOGLE MAPS    


    $('#rsvp-form').submit(function(e) {
        $('#response-phase1').fadeOut('fast', function() {
          $('#response-phase-loading').fadeIn('fast', function() {
            $('#response-phase-loading').fadeOut('fast', function() {
              $('#response-phase2').fadeIn('fast', function() {

              });
            });
          });
        });
        return false;
    });
