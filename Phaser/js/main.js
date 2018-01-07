var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });


var score = 0;
var upKey;
var downKey;
var leftKey;
var rightKey;
var shootKay;
var shootEvent;
var timer;
var total = 0;
var direction = 1;
var startMove;
var moves = [];
var runningMove = 0;
var moveLooper;
var currentMove = '';

function preload() {
  game.load.image('sky', 'assets/sky.png');
  game.load.image('ground', 'assets/platform.png');
  game.load.image('star', 'assets/star.png');
  game.load.image('box', 'assets/box.png');
  game.load.image('bullet', 'assets/bullet.png');
  game.load.image('button', 'assets/button.png');
  game.load.image('rightButton', 'assets/right.png');
  game.load.image('leftButton', 'assets/left.png');
  game.load.image('upButton', 'assets/up.png');
  game.load.image('downButton', 'assets/down.png');
  game.load.spritesheet('dude', 'assets/mydude.png', 32, 32);
  game.load.spritesheet('baddie', 'assets/baddie.png', 32, 32);  
}

function create() {

  timer = game.time.create(true);
  timer.loop(500, shoot, this);

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


  button = game.add.button(500, 500, 'button', pressed, this, 0,0,0);
  
  upButton = game.add.button(0, 64, 'upButton', pressedUp, this);
  downButton = game.add.button(32, 64, 'downButton', pressedDown, this);
  leftButton = game.add.button(64, 64, 'leftButton', pressedLeft, this);
  rightButton = game.add.button(98, 64, 'rightButton', pressedRight, this);

  function pressedUp(){
    moves.push('Up');
  };
  
  function pressedDown(){
    moves.push('Down');
  };

  function pressedLeft(){
    moves.push('Left');
  };

  function pressedRight(){
    moves.push('Right');
  };

  function pressed(){
    startMove = true;
  }

  stars = game.add.group();
  boxes = game.add.group();
  bullets = game.add.group();
  baddies = game.add.group();

  stars.enableBody = true;
  boxes.enableBody = true;
  bullets.enableBody = true;
  baddies.enableBody = true;


  box = boxes.create(500, game.world.height - 300, 'box');
  

  for (var i = 0; i < 12; i++) {
    var star = stars.create(i * 70, 0, 'star');
    star.body.gravity.y = 12;
    star.body.bounce.y = 0.7 + Math.random() * 0.2;
  }

  for (var i = 0; i < 3; i++){
    var baddie = baddies.create(Math.random() * 760, 0, 'baddie');
    baddie.body.gravity.y = 100;
    baddie.body.bounce.y = 0.1;
    baddie.animations.add('right', [2, 3], 10, true);
    baddie.animations.add('left', [0, 1], 10, true);
    
    if( i % 2 == 0 ){
      baddie.body.velocity.x = 50;    
    } else {
      baddie.body.velocity.x = -50;
    }

  }


  scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

  movesText = game.add.text(16, 98, moves, {fontSize: '32px', fill:'#000' });
  currentMovesText = game.add.text(16, 140, 'Current moves', {fontSize: '32px', fill:'#000' });

  upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
  downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
  leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
  rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
  shootKay = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


  moveLooper = game.time.create(true);
  moveLooper.loop(2000, moveBox, this);
}

function update() {

  baddies.forEach(baddie => {
    if (baddie.body.velocity.x == 50){
      baddie.animations.play('right');
    } else {
      baddie.animations.play('left');
    }
  });

  baddies.forEach(baddie => {
    if(baddie.x > game.world.width - 32){
      baddie.body.velocity.x = -50;
    } else if (baddie.x < 0){
      baddie.body.velocity.x = 50;
    }
  })

  
  var hitPlatform = game.physics.arcade.collide(player, platforms);

  game.physics.arcade.collide(stars, platforms);
  game.physics.arcade.overlap(baddies, bullets, destroyBaddieBullet, null, this);
  game.physics.arcade.overlap(baddies, player, destroyBaddiePlayer, null, this);
  game.physics.arcade.collide(baddies, platforms);
  game.physics.arcade.overlap(player, stars, collectStar, null, this);
  game.physics.arcade.collide(boxes, player);
  game.physics.arcade.collide(boxes, platforms);
  game.physics.arcade.overlap(bullets, boxes, destroyBox, null, this);


  player.body.acceleration.x = 0
  if (leftKey.isDown) {
    player.body.acceleration.x -= 150;
    player.animations.play('left');
  } else if (rightKey.isDown) {
    player.body.acceleration.x += 150;
    player.animations.play('right');
  } else {
    player.animations.stop();
    player.frame = 0;
  }

  if (upKey.isDown && player.body.touching.down) {
    player.body.velocity.y = -300;
  }

  if (shootKay.isDown && !timer.running) {
    if(leftKey.isDown){
      direction = -1;
    } else {
      direction = 1;
    }
    shoot();
    timer.start();
  } else if (!shootKay.isDown && timer.running) {
    timer.stop(false);
  }

  if(startMove){
    moveLooper.start();
  }

  movesText.text = moves;

  
}

function moveBox(){    
    if(moves[runningMove] == 'Right'){
      currentMove = currentMove + 'Right,';
      moverRight();
    } else if (moves[runningMove] == 'Up'){
      currentMove = currentMove + 'Up,';
      moveUp();
    } else if (moves[runningMove] == 'Down'){
      currentMove = currentMove + 'Down,';
      moveDown();
    } else if (moves[runningMove] == 'Left'){
      currentMove = currentMove + 'Left,';
      moveLeft();
    }
  currentMovesText.text = currentMove;
  runningMove = runningMove + 1;
};

function moverRight() {
  box.body.velocity.x = 50  ;
  game.time.events.add(2000, function(){
    box.body.velocity.x = 0;
    moveRight = false;
  }); 
}

function moveUp() {
  box.body.velocity.y = -50  ;
  game.time.events.add(2000, function(){
    box.body.velocity.y = 0;
    moveRight = false;
  }); 
}

function moveDown() {
  box.body.velocity.y = 50  ;
  game.time.events.add(2000, function(){
    box.body.velocity.y = 0;
    moveRight = false;
  }); 
}

function moveLeft() {
  box.body.velocity.x = -50  ;
  game.time.events.add(2000, function(){
    box.body.velocity.x = 0;
    moveRight = false;
  }); 
}

function shoot() {
  var bullet = bullets.create(player.x + 10, player.y + 10, 'bullet');
  bullet.body.velocity.x = 150 * direction;
}

function collectStar(player, star) {
  star.kill();
  score += 10;
  scoreText.text = 'Score: ' + score;
}

function destroyBox(bullet, box){
  box.kill();
  bullet.kill();
}

function destroyBaddieBullet(bullet, baddie){
  baddie.kill();
  bullet.kill();
}

function destroyBaddiePlayer(baddie, player){
  baddie.kill();
  player.kill();
}