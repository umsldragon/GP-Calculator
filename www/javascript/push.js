/* kyles main phone
e_yo0B57o90:APA91bH4umqRBqG3AiM5stvOA4KNvf8zQqnSD8fa9sYwzuiZ7yM2LMsS9IJkPw8WQOw5EhXFh5SdtTi6VXaHbFFkkozo3UPx7Pgn-LAlTyugpWuvPFkWaApJii_iAgMVwLX5wtd_D7s4VanTh8whO7aZSst-Sc7tbQ
*/
$(function(){
	alert('Start4');
	var push = PushNotification.init({
		android: {senderID: 'AAAAzRUFJOg:APA91bGYQ2xil2p_lioZSVKnzT66En1VZ6KAAIFT00RW7UgvYdqYcFNbzRoqG2doPtq8GDFeCx1fiFOJoc1vwdjpc11wCpUZlERROcrxeiXWctikuYBUV4unTQFDbUowcuQ4-TiMztZV'},
		browser: {'pushServiceURL': 'http://push.api.phonegap.com/v1/push'},
        ios: {alert: "true", badge: "true", sound: "true"},
		windows: {}
	});

    push.on('registration', function(data) {
		// register ID to server: data.registrationId
		alert("title: "+data.registrationId);
		$("#eq").text(data.registrationId);
    });

    push.on('notification', function(data) {
        // data.message,
        // data.title,
        // data.count,
        // data.sound,
        // data.image,
        // data.additionalData
		alert(data.title+" Message: "+data.message);
    });

    push.on('error', function(e) {
        // e.message
		alert("Error: "+e.message);
    });
	
	push.hasPermission(data => {
		alert("Permission Test");
		if(data.isEnabled){
			alert("Permission Granted");
		}else{
			alert("Permission Not Granted");
		}
	});
});