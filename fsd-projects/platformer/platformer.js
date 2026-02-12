$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "limegreen"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100, "white"); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(200, 650, 100, 100, "blue")
createPlatform(300, 550, 100, 100, "blue")
createPlatform(400, 450, 100, 100, "blue")
createPlatform(500, 350, 100, 100, "blue")
createPlatform(600, 250, 100, 100, "red")
createPlatform(600, 250, 1000, 100, "red")
createPlatform(300, 200, 100, 100, "red")
createPlatform(100, 250, 100, 100, "red")



    // TODO 3 - Create Collectables
createCollectable("steve", 1200, 150);
createCollectable("diamond", 360, 160, 0.5, 0.7);
createCollectable("steve", 100, 200);


    
    // TODO 4 - Create Cannons
createCannon("top", 400, 1000, 5, 100);
createCannon("right", 300, 2000, 200, 20);
createCannon("bottom", 1180, 1000, 100, 50);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
