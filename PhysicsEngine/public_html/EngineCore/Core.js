var gEngine = gEngine || {};

$(document).ready(function() {
  gEngine.Core = (function () {
    // Create reference to the canvas
    var mCanvas, mContext, mWidth = 800, mHeight = 450;
    mCanvas = document.getElementById('canvas');
    mContext = mCanvas.getContext('2d');
    mCanvas.height = mHeight;
    mCanvas.width = mWidth;

    // Create object variable
    var mPublic = {
      mWidth: mWidth,
      mHeight: mHeight,
      mContext: mContext
    };
  return mPublic;
  }());
})
