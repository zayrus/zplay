!function(){var a=document.querySelector("#player");if(Hls.isSupported()){var e=new Hls;e.loadSource("https://nasa-i.akamaihd.net/hls/live/253565/NTV-Public1/master.m3u8"),e.attachMedia(a),e.on(Hls.Events.MANIFEST_PARSED,function(){a.play()})}plyr.setup(a)}();