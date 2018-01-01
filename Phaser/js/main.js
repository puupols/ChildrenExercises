var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload : preload, create : create, update : update});


  var score = 0;
  var upKey;
  var downKey;
  var leftKey;
  var rightKey;
  var shootKay;
  var shootEvent;
  var timer;
  var total = 0;

function preload(){
  game.load.image('sky', 'assets/sky.png');
  game.load.image('ground', 'assets/platform.png');
  game.load.image('star', 'assets/star.png');
  game.load.image('box', 'assets/box.png');
  game.load.image('bullet', 'assets/bullet.png');
  game.load.spritesheet('dude', 'assets/mydude.png', 32, 32);
}

function create(){

  timer = game.time.create(true);
  timer.loop(500, shoot, this);
  function shoot(){
    var bullet = bullets.create(player.x, player.y, 'bullet');
    bullet.body.velocity.x = 150;
  }


  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.add.sprite(0, 0, 'sky');

  platforms = game.add.group();
  platforms.enableBody = true;
  var ground = platforms.create(0, game.world.height - 64, 'ground');
  ground.scale.setTo(2);
  ground.body.immovable = true;

  var ledge = platforms.create(400, 400, 'ground');
  ledge.body.immovable = true;
  var ledge = platforms.create(-150, 250, 'ground');
  ledge.body.immovable = true;

  player = game.add.sprite(32, game.world.height - 100, 'dude');
  game.physics.arcade.enable(player);
  player.body.gravity.y = 300;
  player.body.bounce.y = 0.2;
  player.body.drag.x = 250;
  player.body.collideWorldBounds = true;
  player.animations.add('left', [3, 4], 10, true);
  player.animations.add('right', [1, 2], 10, true);

  stars = game.add.group();
  boxes = game.add.group();
  bullets = game.add.group();

  stars.enableBody = true;
  boxes.enableBody = true;
  bullets.enableBody = true;


  var box = boxes.create(500, game.world.height - 300, 'box');
  box.body.gravity.y = 300;
  box.body.drag.x = 100;

  for (var i = 0; i < 12; i++){
   var star = stars.create(i * 70, 0, 'star');
   star.body.gravity.y = 12;
   star.body.bounce.y = 0.7 + Math.random() * 0.2;
  }


  scoreText = game.add.text(16,16, 'score: 0', {fontSize: '32px', fill: '#000'});

  upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
  downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
  leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
  rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
  shootKay = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


}

function update(){

  var hitPlatform = game.physics.arcade.collide(player, platforms);

  game.physics.arcade.collide(stars, platforms);
  game.physics.arcade.overlap(player, stars, collectStar, null, this);

  game.physics.arcade.collide(boxes, player);
  game.physics.arcade.collide(boxes, platforms);



  player.body.acceleration.x = 0
  if(leftKey.isDown){
    player.body.acceleration.x -= 150;
    player.animations.play('left');
  } else if (rightKey.isDown){
    player.body.acceleration.x += 150;
    player.animations.play('right');
  } else {
    player.animations.stop();
    player.frame = 0;
  }

  if(upKey.isDown && player.body.touching.down){
    player.body.velocity.y = -300;
  }

  if(shootKay.isDown && !timer.running){
    timer.start();
    console.log(!timer.running);
  } else if (!shootKay.isDown && timer.running){
    timer.stop(false);
    console.log('stop');
  }

  function collectStar(player, star){
    star.kill();
    score += 10;
    scoreText.text = 'Score: ' + score;
  }

}
