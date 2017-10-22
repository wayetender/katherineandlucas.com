
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

            $('#ourstory').parallax("30%", 0.3);
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
var nj = new google.maps.LatLng(40.982052, -74.767682);

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
        zoom: 10,
        center: nj,
        disableDefaultUI: false,
        scrollwheel: false,
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.SATELLITE, MY_MAPTYPE_ID]
        },
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER
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

    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer({
      suppressMarkers: true});
    directionsDisplay.setMap(map);

    
    //START 2
    
    //marker
    var image_2 = new google.maps.MarkerImage("img/icons/marker-church.png", null, null, null, new google.maps.Size(33,50));
    var positionpin_2 = new google.maps.LatLng(40.982052, -74.767682);
    var marker_2 = new google.maps.Marker({
      position: positionpin_2,
      icon: image_2,
      map: map,
      flat: true,
      title: 'Crossed Keys'
    });
    

    //box
    var boxText_2 = document.createElement("div");
    boxText_2.innerHTML = '<div class="ourstorysec_displaynone_iphoneland ourstorysec_displaynone_iphonepotr grid grid_6 percentage ourstorysec_border_white"><img class="ourstorysec_focus ourstorysec_border_white" src="img/banners/map-church.jpg"></div><div class="ourstorysec_displaynone_iphoneland ourstorysec_displaynone_iphonepotr grid grid_6 percentage ourstorysec_border_white"><div class="ourstorysec_focus center ourstorysec_sizing ourstorysec_paddingleft30 ourstorysec_bg_white"><h4><strong>Venue</strong></h4><div class="ourstorysec_space10"></div><h5>Crossed Keys Estate</h5><div class="ourstorysec_space10"></div><div class="ourstorysec_divider center small"><span class="ourstorysec_bg_grey2 "></span></div><div class="ourstorysec_space10"></div><p>3:30 PM</p></div></div>';

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
  var positionpin_4 = new google.maps.LatLng(40.908550, -74.722759);
    
    
    google.maps.event.addListener(marker_2, 'click', function() {
        info_box_2.open(map,marker_2);
        display_route();
    });
    
    

    info_box_2.open(map,marker_2);
    //end 2
    
    
    
    
    //START 4
    
    //marker
    var image_4 = new google.maps.MarkerImage("img/icons/marker-hotel.png", null, null, null, new google.maps.Size(33,50));
    var marker_4 = new google.maps.Marker({
      position: positionpin_4,
      icon: image_4,
      map: map,
      flat: true
    });
    

    //box
    var boxText = document.createElement("div");
    boxText.innerHTML = '<div class="ourstorysec_displaynone_iphoneland ourstorysec_displaynone_iphonepotr grid grid_6 percentage ourstorysec_border_white"><img class="ourstorysec_focus ourstorysec_border_white" src="img/hotel.png"></div><div class="ourstorysec_displaynone_iphoneland ourstorysec_displaynone_iphonepotr grid grid_6 percentage ourstorysec_border_white"><div class="ourstorysec_focus center ourstorysec_sizing  ourstorysec_paddingleft30 ourstorysec_bg_white"><h4><strong>Hotel</strong></h4><div class="ourstorysec_space10"></div><h5>Residence Inn Mt. Olive</h5><div class="ourstorysec_space10"></div><div class="ourstorysec_divider center small"><span class="ourstorysec_bg_grey2 "></span></div><div class="ourstorysec_space10"><br><a style="font-size: 14px; font-weight:bold" target="_blank" href="http://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=Terracciano%20Waye%20Wedding%5Ecdwri%60TWWTWWA%7CTWWTWWB%7CTWWTWWC%60159.95-299.95%60USD%60false%605%606/23/18%606/25/18%605/24/18&app=resvlink&stop_mobi=yes">Make Reservation</a></div><p><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i></p></div></div>';

    var marker_4_options = {
         content: boxText
        ,disableAutoPan: false
        ,maxWidth: 0
        ,pixelOffset: new google.maps.Size(40, -170)
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
        display_route();
    });
    
    info_box_4.open(map,marker_4);
    //end 4
    
    
    //START 5
    
    //marker
    var image_4 = new google.maps.MarkerImage("img/icons/marker-hotel.png", null, null, null, new google.maps.Size(33,50));
    var positionpin_5 = new google.maps.LatLng(40.689208, -74.178739);
    var marker_4 = new google.maps.Marker({
      position: positionpin_5,
      icon: image_4,
      map: map,
      flat: true
    });
    

    //box
    var boxText = document.createElement("div");
    boxText.innerHTML = '<div class="ourstorysec_displaynone_iphoneland ourstorysec_displaynone_iphonepotr grid grid_6 percentage ourstorysec_border_white"><img class="ourstorysec_focus ourstorysec_border_white" src="img/newark.jpeg"></div><div class="ourstorysec_displaynone_iphoneland ourstorysec_displaynone_iphonepotr grid grid_6 percentage ourstorysec_border_white"><div class="ourstorysec_focus center ourstorysec_sizing  ourstorysec_paddingright30 ourstorysec_bg_white"><h4><strong>Airport</strong></h4><div class="ourstorysec_space20"></div><h5>Newark Airort (EWR)</h5><div class="ourstorysec_space20"></div><div class="ourstorysec_space20"></div><p><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i></p></div></div>';

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
    
    var start = new google.maps.LatLng(40.689208, -74.178739);
    var end = new google.maps.LatLng(40.908550, -74.722759);
    
    directionsService.route({
      origin: start,
      destination: end,
      waypoints: [],
      optimizeWaypoints: true,
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        //directionsDisplay.setDirections(response);
        var inBetween = google.maps.geometry.spherical.interpolate(start, end, 0.53);  
        var midPointMarker = new google.maps.Marker({  
            position: inBetween,  
            map: map,
            visible: false  // NB the marker is 'invisible'
        });

        var myRoute = response.routes[0].legs[0];
        var points = []
        for (var i = 0; i < myRoute.steps.length; i++) {
            for (var j = 0; j < myRoute.steps[i].lat_lngs.length; j++) {
                points.push(myRoute.steps[i].lat_lngs[j]);
            }
        }

        polyline = new google.maps.Polyline({
            path: points,
            strokeColor: "#aaa",
            strokeOpacity: 0.5,
            strokeWeight: 6,
            geodesic: true,
            map: map
        });

        var stuDistance = calculateDistances(start, end);
        var stuLabel = new Label();

        stuLabel.bindTo('position', midPointMarker, 'position');
        stuLabel.set('text', "<h4>" + stuDistance.miles + ' miles \n (' + myRoute.duration.text + ')</h4>');
        
        // lets add event listeners
        google.maps.event.addListener(polyline, 'mouseover', function() {
            stuLabel.setMap(map);
        });

        google.maps.event.addListener(polyline, 'mouseout', function() {
            stuLabel.setMap(null);
        });
        //directionsDisplay.setPanel(document.getElementById("directions-panel"));
      } else {
        //window.alert('Directions request failed due to ' + status);
      }
    });

    function display_route() {

        directionsService.route({
          origin: nj,
          destination: positionpin_4,
          waypoints: [],
          optimizeWaypoints: true,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            //directionsDisplay.setDirections(response);
            var inBetween = google.maps.geometry.spherical.interpolate(nj, positionpin_4, 0.3);  
            var midPointMarker = new google.maps.Marker({  
                position: inBetween,  
                map: map,
                visible: false  // NB the marker is 'invisible'
            });
            map.panTo(inBetween);
            map.setZoom(12);
            //map.setMapTypeId(google.maps.MapTypeId.SATELLITE);

            var myRoute = response.routes[0].legs[0];
            var points = []
            for (var i = 0; i < myRoute.steps.length; i++) {
                for (var j = 0; j < myRoute.steps[i].lat_lngs.length; j++) {
                    points.push(myRoute.steps[i].lat_lngs[j]);
                }
            }

            polyline = new google.maps.Polyline({
                path: points,
                strokeColor: "#333",
                strokeOpacity: 0.5,
                strokeWeight: 6,
                geodesic: true,
                map: map
            });

            var stuDistance = calculateDistances(nj, positionpin_4);
            var stuLabel = new Label();

            stuLabel.bindTo('position', midPointMarker, 'position');
            stuLabel.set('text', "<strong>" + stuDistance.miles + ' miles \n (' + myRoute.duration.text + ')</strong>');
            
            // lets add event listeners
            google.maps.event.addListener(polyline, 'mouseover', function() {
                stuLabel.setMap(map);
            });

            google.maps.event.addListener(polyline, 'mouseout', function() {
                stuLabel.setMap(null);
            });
            stuLabel.setMap(map);


          google.maps.event.addListener(map, 'click', function() {
              map.panTo(nj);
              map.setZoom(10)

          });
            //directionsDisplay.setPanel(document.getElementById("directions-panel"));
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
    }

}



function calculateDistances(start,end) {
    var stuDistances = {};

    stuDistances.metres = google.maps.geometry.spherical.computeDistanceBetween(start, end);    // distance in metres rounded to 1dp
    stuDistances.km = Math.round(stuDistances.metres / 1000 *10)/10;    // distance in km rounded to 1dp
    stuDistances.miles = Math.round(stuDistances.metres / 1000 * 0.6214 *10)/10;    // distance in miles rounded to 1dp

    return stuDistances;
}



// Define the overlay, derived from google.maps.OverlayView
function Label(opt_options) {
    // Initialization
    this.setValues(opt_options);

    // Label specific
    var span = this.span_ = document.createElement('div');
    span.style.cssText = 'position: relative; left: 40px; top: -58px; ' +
                         'white-space: nowrap; border: 1px solid #ccc; ' +
                         'padding: 10px; background-color: white';

    var div = this.div_ = document.createElement('div');
    div.appendChild(span);
    div.style.cssText = 'position: absolute; display: none';
}
Label.prototype = new google.maps.OverlayView;

// Implement onAdd
Label.prototype.onAdd = function() {
    var pane = this.getPanes().overlayLayer;
    pane.appendChild(this.div_);

    // Ensures the label is redrawn if the text or position is changed.
    var me = this;
    this.listeners_ = [
        google.maps.event.addListener(this, 'position_changed',
            function() { me.draw(); }),
        google.maps.event.addListener(this, 'text_changed',
            function() { me.draw(); })
    ];
};

// Implement onRemove
Label.prototype.onRemove = function() {
    this.div_.parentNode.removeChild(this.div_);

    // Label is removed from the map, stop updating its position/text.
    for (var i = 0, I = this.listeners_.length; i < I; ++i) {
        google.maps.event.removeListener(this.listeners_[i]);
    }
};

// Implement draw
Label.prototype.draw = function() {
    var projection = this.getProjection();
    var position = projection.fromLatLngToDivPixel(this.get('position'));

    var div = this.div_;
    div.style.left = position.x + 'px';
    div.style.top = position.y + 'px';
    div.style.display = 'block';

    this.span_.innerHTML = this.get('text').toString();
};


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
