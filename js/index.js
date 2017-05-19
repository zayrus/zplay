(function () {
  var video = document.querySelector('#player');

  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource('https://nasa-i.akamaihd.net/hls/live/253565/NTV-Public1/master.m3u8');
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED,function() {
      video.play();
    });
  }
  
  plyr.setup(video);
})();
