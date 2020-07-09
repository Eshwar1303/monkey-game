var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6870703-0124-47f7-acff-dbe905f5014c","5ce44e39-12ac-4a66-88cf-a87a0ed6a180","33841f90-7a53-4346-b956-e51d1961959b","535b974b-1f1a-4fd4-b166-ef29cb6eb757","0e5cb0fd-dbcd-48e3-a1ee-8e070cf17048"],"propsByKey":{"a6870703-0124-47f7-acff-dbe905f5014c":{"name":"monkey","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":10,"looping":true,"frameDelay":12,"version":"V4BwRrAnu32tncll4AbUc1XXW28qUYqk","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":2456},"rootRelativePath":"assets/a6870703-0124-47f7-acff-dbe905f5014c.png"},"5ce44e39-12ac-4a66-88cf-a87a0ed6a180":{"name":"Banana","sourceUrl":null,"frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":12,"version":"iI5bw6crHfYVi_NDtNYcfeJfsaKr4CSf","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png"},"33841f90-7a53-4346-b956-e51d1961959b":{"name":"Stone","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"buX8bHYuneV832hcrgOX72TZTEizI_Ij","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png"},"535b974b-1f1a-4fd4-b166-ef29cb6eb757":{"name":"continuous_grass_1","sourceUrl":"assets/api/v1/animation-library/gamelab/33k01iEf_qdIHwV2rQ3lCAQ4NtEvQopS/category_backgrounds/continuous_grass.png","frameSize":{"x":800,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"33k01iEf_qdIHwV2rQ3lCAQ4NtEvQopS","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/33k01iEf_qdIHwV2rQ3lCAQ4NtEvQopS/category_backgrounds/continuous_grass.png"},"0e5cb0fd-dbcd-48e3-a1ee-8e070cf17048":{"name":"ground_grass_1","sourceUrl":"assets/api/v1/animation-library/gamelab/.xUQB0vdGDWHYaiv77BrpTnxeNBV_bNj/category_environment/ground_grass.png","frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":2,"version":".xUQB0vdGDWHYaiv77BrpTnxeNBV_bNj","loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/api/v1/animation-library/gamelab/.xUQB0vdGDWHYaiv77BrpTnxeNBV_bNj/category_environment/ground_grass.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var monkey = createSprite(100,340,20,50);
monkey.scale = 0.1;
monkey.setAnimation("monkey");

var ground = createSprite(400,350,400,10);
ground.velocityX = -4;
ground.x =(ground.width/2);
ground.setAnimation("ground_grass_1")



function draw() {
  
  background(255);
if(keyDown("space")){
  monkey.velocityY = -5;
}
monkey.velocityY = monkey.velocityY +0.8;
  monkey.collide(ground);
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  spawnBananas();
  drawSprites() ;
} 
function spawnBananas(){
  if(World.frameCount % 80===0){
    var banana = createSprite(400,200,40,10);
    banana.y = randomNumber(120,200);
    banana.setAnimation("Banana");
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 134;
  }
}
 function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(400,365,10,40);
    obstacle.velocityX = -6;
    
    //generate random obstacles
    obstacle.setAnimation("stone");
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 70;
    
  }
}
  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
