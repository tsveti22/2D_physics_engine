  // Handle all keyboard input
  function userControl(event) {

    var keycode;  // Keep track of the user keyboard input
    var width = gEngine.Core.mWidth;
    var height = gEngine.Core.mHeight;
    var context = gEngine.Core.mContext;

    // Internet Explorer
    if (window.event) {
      keycode = event.keyCode;
    }
    // Netscape/Firefox/Opera
    else if (event.which) {
      keyvode = event.which;
    }

    if (keycode == 70) { // f
      // Create new rectangle at random position
      context.strokeRect(Math.random() * width * 0.8,
      // x position of center
      Math.random() * height * 0.8,
      // y position of center
      Math.random() * 30 + 10, Math.random() * 30 + 10);
      // width and height location
    }
  }
$(document).ready(function() {
})
