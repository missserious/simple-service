$(function() {
	
	getLocation();
	getTimestamp();
	
	$( "#submit" ).click(function() {
		/*input field not empty - client-side validation*/
		if($.trim( $('#name').val() )){
			adduser();		
		}
		else {
			alert('Please, enter your name!');   
		}	  
	});

    loadusers();

});

function timeConverter(UNIX_timestamp){
	  var a = new Date(UNIX_timestamp * 1000);
	  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	  var year = a.getFullYear();
	  var month = months[a.getMonth()];
	  var date = a.getDate();
	  var hour = a.getHours();
	  var min = a.getMinutes();
	  var sec = a.getSeconds();
	  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
	  return time;
}

var latitude;
var longitude;
var unix_timestamp;

function showLocation(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    /*alert("Latitude : " + latitude + " Longitude: " + longitude);*/
}
 
function getLocation() {	
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showLocation);		
    } 
	else { 
        alert("Sorry, browser does not support geolocation!");
    }
}

function getTimestamp() {
	unix_timestamp = Math.round((new Date()).getTime() / 1000);
	console.log(unix_timestamp);

}

/*AJAX PART*/
function loadusers() {
    $.ajax("/users", {
        contentType: "application/json",
        success: function(data) {
            $("#dbresult").children().remove();
            $.each(data, function(index, item) {            
            	/*transform unixtime*/           
                $("#dbresult").append($("<li>").text('Name: ' + item.name + ' --- ' + 'Latitude: ' + item.lat + ' --- ' + 'Longitude: ' + item.lon + ' --- ' + 'Unixtime[s]: ' + item.date+ ' --- ' + 'Date: ' + timeConverter( item.date)));
            });
        }
    });
}


function adduser() {
    $.ajax({
        url: "/user",
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify({name:$("#name").val(), lat:latitude, lon:longitude, date:unix_timestamp}),
        success: loadusers
    });
}
