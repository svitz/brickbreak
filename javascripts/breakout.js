window.addEventListener('load',function() {

  var Q = Quintus().include("Sprites, Scenes, Input, Anim, 2D, Audio, Touch, UI")
                   .include("BreakoutUI, BreakoutSprites, BreakoutScenes, BreakoutLevels")
                   .enableSound()
                   .setup({ width: 320, height: 416, downsampleWidth: 640, downsampleHeight: 832  })
                   .touch();

  Q.input.mouseControls();
  Q.input.keyboardControls();


  Q.load([
     // Images
     "bg_prerendered.png","tiles.png","logo.png",
     // Audio
     "countdownBlip.ogg","powerdown.ogg", "breakblock.ogg", "blip.ogg", "cblip.ogg",
     "powerup.ogg", "recover.ogg", "releasepower.ogg", "hithard.ogg", "hitpaddle.ogg",
      // Data
      "bg.tmx", "sprites.json"
    ],function() {
      Q.useTiles = window.location.href.indexOf('usetiles') > -1;

      // Set up all the sprite sheets
      Q.compileSheets("tiles.png","sprites.json");


      // Now add in the animations for the various sprites
      Q.animations("ball", {
        big: { frames: [0,1,2,3,4], rate: 1/4, loop: false },
        mini:{ frames: [5,6,7], rate: 1/4, loop: false }
      });
      Q.animations("countdown", {
        countdown: { frames: [ 0,1,2 ], rate: 1.5, trigger: "start", loop: false }
      });

      Q.animations("block", {
        appear: { frames: [ 4,3,2,1,0], rate: 1/3, loop: false },
        hit: { frames: [ 5,6,7,8], rate: 1/6, loop: false, trigger: "destroy" }
      });

      // Go Time
      Q.stageScene("title");
  });

  window.Q = Q;

},true);
