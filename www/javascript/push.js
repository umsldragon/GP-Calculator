/* kyles main phone

*/
$(function(){
	alert('Start4');
	var push = PushNotification.init({
		android: {senderID: ''},
		browser: {'pushServiceURL': 'https://push.api.phonegap.com/v1/push'},
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