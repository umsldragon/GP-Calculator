/* kyles main phone
e_yo0B57o90:APA91bH4umqRBqG3AiM5stvOA4KNvf8zQqnSD8fa9sYwzuiZ7yM2LMsS9IJkPw8WQOw5EhXFh5SdtTi6VXaHbFFkkozo3UPx7Pgn-LAlTyugpWuvPFkWaApJii_iAgMVwLX5wtd_D7s4VanTh8whO7aZSst-Sc7tbQ
*/
$(function(){
alert('Start');
	var push = PushNotification.init({ "android": {"senderID": "AIzaSyCl_HH_SctsH_--moo7VxCEIb4QsTxTQq4"},
         "ios": {"alert": "true", "badge": "true", "sound": "true"}, "windows": {} } );

    push.on('registration', function(data) {
		// register ID to server: data.registrationId
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
});