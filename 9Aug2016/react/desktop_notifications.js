  /*
  Author : Abhay Gupta
  Version : 0.1
  Status : Development
  Description : Desktop notification example
  */

$( window ).load(function() {
    notifyMe();
});

// request permission on page load
document.addEventListener('DOMContentLoaded', function () {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chrome or Firefox.'); 
    return;
  }

  if (Notification.permission !== "granted")
    Notification.requestPermission();
});

function notifyMe() {
  if (Notification.permission !== "granted"){
    Notification.requestPermission();
   }
  else {
    var notification = new Notification('Notification title', {
      icon: 'http://www.earlysail.com/wordpress/wp-content/uploads/2012/05/Monster-App-Logo-12.jpg',
      body: "Hey there! You've been notified!",
    });

    notification.onclick = function () {
      window.open("/");      
    };

  }
}

