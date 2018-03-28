let thingsToPreload = [	"resources/enemies/koopatroopa/koopaleft.png",
						"resources/enemies/koopatroopa/kooparight.png", 
						"resources/enemies/koopatroopa/koopadown.png", 
						"resources/enemies/koopatroopa/koopaup.png",
						"resources/enemies/boo/booleft.png",
						"resources/enemies/boo/booright.png", 
						"resources/enemies/boo/boodown.png", 
						"resources/enemies/boo/booup.png",
						"resources/enemies/hammerbro/hammerbroleft.png",
						"resources/enemies/hammerbro/hammerbroright.png",
						"resources/enemies/hammerbro/hammerbrodown.png",
						"resources/enemies/hammerbro/hammerbroup.png",
						"resources/enemies/magikoopa/magikoopaleft.png",
						"resources/enemies/magikoopa/magikooparight.png",
						"resources/enemies/magikoopa/magikoopadown.png",
						"resources/enemies/magikoopa/magikoopaup.png",
						"resources/enemies/bobomb/bobombleft.png",
						"resources/enemies/bobomb/bobombright.png",
						"resources/enemies/bobomb/bobombdown.png",
						"resources/enemies/bobomb/bobombup.png",
						"resources/enemies/goomba/goombaleft.png",
						"resources/enemies/goomba/goombaright.png",
						"resources/enemies/goomba/goombadown.png",
						"resources/enemies/goomba/goombaup.png",
						"resources/enemies/spiny/spinyleft.png",
						"resources/enemies/spiny/spinyright.png",
						"resources/enemies/spiny/spinydown.png",
						"resources/enemies/spiny/spinyup.png",
						"resources/enemies/flyguy/flyguyleft.png",
						"resources/enemies/flyguy/flyguyright.png", 
						"resources/enemies/flyguy/flyguydown.png", 
						"resources/enemies/flyguy/flyguyup.png",
						"resources/enemies/bowser/bowserleft.png",
						"resources/enemies/bowser/bowserright.png",
						"resources/enemies/bowser/bowserdown.png",
						"resources/enemies/bowser/bowserup.png",
						"resources/towers/piranha/piranhaidle.png", 
						"resources/towers/piranha/piranhabuild.png",
						"resources/towers/piranha/piranhashoot.png",
						"resources/towers/piranha/piranhaprojectile.png",
						"resources/towers/piranha/piranhabutton.png",
						"resources/towers/montymole/moleidle.png", 
						"resources/towers/montymole/molebuild.png",
						"resources/towers/montymole/moleshoot.png",
						"resources/towers/montymole/moleprojectile.png",
						"resources/towers/montymole/molebutton.png",
						"resources/towers/lakitu/lakituidle.png", 
						"resources/towers/lakitu/lakitushoot.png",
						"resources/towers/lakitu/lakituprojectile.png",
						"resources/towers/lakitu/lakitubutton.png",
						"resources/towers/trunkle/trunkleidle.png", 
						"resources/towers/trunkle/trunklebuild.png",
						"resources/towers/trunkle/trunkleshoot.png",
						"resources/towers/trunkle/trunkleprojectile.png",
						"resources/towers/trunkle/trunklebutton.png",
						"resources/towers/magitoad/magitoadidle.png", 
						"resources/towers/magitoad/magitoadbuild.png",
						"resources/towers/magitoad/magitoadshoot.png",
						"resources/towers/magitoad/magitoadprojectile.png",
						"resources/towers/magitoad/magitoadbutton.png",
						"resources/towers/elemental/elementalidle.png", 
						"resources/towers/elemental/elementalbuild.png",
						"resources/towers/elemental/elementalshoot.png",
						"resources/towers/elemental/elementalprojectile.png",
						"resources/towers/elemental/elementalbutton.png",
						"resources/towers/peachbot/peachbotidle.png", 
						"resources/towers/peachbot/peachbotbuild.png",
						"resources/towers/peachbot/peachbotshoot.png",
						"resources/towers/peachbot/peachbotprojectile.png",
						"resources/towers/peachbot/peachbotbutton.png",
						"resources/levels/one/level1.png",
						"resources/levels/one/level1button.png",
						"resources/levels/two/level2.png",
						"resources/levels/two/level2button.png",
						"resources/levels/three/level3.png",
						"resources/levels/three/level3button.png",
						"resources/characters/peach/peachleft.png",
						"resources/characters/peach/peachright.png",
						"resources/characters/peach/peachdown.png",
						"resources/characters/peach/peachup.png",
						"resources/characters/peach/peachtalkright.png",
						"resources/characters/peach/peachtalkright2.png",
						"resources/characters/peach/peachtalkright3.png",
						"resources/characters/peach/peachtalkright4.png",
						"resources/characters/peach/peachcurtsy.png",
						"resources/characters/peach/peachidleright.png",
						"resources/characters/peach/peachidleleftdown.png",
						"resources/characters/peach/peachtalk2leftdown.png",
						"resources/characters/peach/peachsitright.png",
						"resources/characters/toad/toadleft.png",
						"resources/characters/toad/toadright.png",
						"resources/characters/toad/toaddown.png",
						"resources/characters/toad/toadup.png",
						"resources/characters/toad/toadflapdown.png",
						"resources/characters/toad/toadflapleft.png",
						"resources/characters/toad/toadfearfuldown.png",
						"resources/characters/toad/toadfearfulright.png",
						"resources/characters/toad/toadfronttalkhappy.png",
						"resources/characters/monty/montydigupleft.png",
						"resources/characters/monty/montydepartupleft.png",
						"resources/characters/toadsworth/toadsworthidle.png",
						"resources/sounds/flameBall.wav",
						"resources/sounds/smb1.mp3",
						"resources/sounds/win1.mp3",
						"resources/sounds/win2.mp3",
						"resources/sounds/win3.mp3",
						"resources/sounds/fail2.mp3",
						"resources/sounds/fail3.mp3",
						"resources/sounds/lvl2Music.mp3",
						"resources/sounds/lvl3Music.mp3",
						"resources/sounds/menuMusic.mp3",
						"resources/sounds/endingMusic.mp3",
						"resources/sounds/gameOver.mp3",
						"resources/sounds/Powerup.wav",
						"resources/sounds/FireBall.wav",
						"resources/interface/gameOver.png",
						"resources/interface/sceneCurtain.png",
						"resources/interface/speechRight.png",
						"resources/interface/speechLeft.png",
						"resources/interface/tipBubble.png",
						"resources/interface/cutsceneBG1.png",
						"resources/interface/cutsceneBG2.png",
						"resources/interface/buttons/level1up.png",
						"resources/interface/buttons/level1over.png",
						"resources/interface/buttons/level1down.png",
						"resources/interface/text/mariofont.ttf",
						"resources/interface/amountCoin.png",
						"resources/interface/amountHeart.png"];

// Initializes PIXI with HEXI plugin suite and tells PIXI to preload files
let game = hexi(800, 800, setup, thingsToPreload, load);
game.border = "3px black solid";
game.backgroundColor = 0xB3F0FF;
game.fps = 60;
game.start();

// When game information is read in from the game files, the data is attached to this object
let gameInfo = {};

// Displays a loading progress bar while loading the game
function load(){
  game.loadingBar();
}
// Performs game tasks that happen only once. 
async function setup() {

	// Get the manifest data: names of all interface elements, levels, enemies, and towers
	// Await keyword is used to force execution to wait until getJSON is resolved
	await $.getJSON("manifest.json", function(json){
		gameInfo.manifest = json;
	});

	// Next the level data is added to gameInfo
	gameInfo.levels = [];
	for (let levelName of gameInfo.manifest.levels) {
		// For every level listed in the manifest
		var levelFile = gameInfo.manifest.levelsDir + "/" + levelName + "/info.json";
		// Get the info.JSON file for that level and add the data to gameInfo
		await $.getJSON(levelFile, function(levelData){
			gameInfo.levels[levelData.name] = levelData;
			levelName = levelData.name;
		});

		// The background sprite for the level is created and stored
		gameInfo.levels[levelName].background = game.sprite(gameInfo.levels[levelName].backgroundSource);
		gameInfo.levels[levelName].background.visible = false;
		// The no-build areas are stored as a list of rectangles
		gameInfo.levels[levelName].noBuildRegions = [];
		for (let zone of gameInfo.levels[levelName].noBuildAreas) {
			let noBuildBox = game.rectangle(zone[2], zone[3]);
			noBuildBox.setPosition(zone[0], zone[1]);
			noBuildBox.visible = false;
			gameInfo.levels[levelName].noBuildRegions.push(noBuildBox);
		}
	}
	
	// Next the enemy data is added to gameInfo
	gameInfo.enemies = [];
	for (let enemyName of gameInfo.manifest.enemies) {
		// For every enemy listed in the manifest 
		var enemyFile = gameInfo.manifest.enemiesDir + "/" + enemyName + "/info.json";
		// Get the info.JSON file for that enemy and add the data to gameInfo
		await $.getJSON(enemyFile, function(enemyData){
			gameInfo.enemies[enemyData.name] = enemyData;
			enemyName = enemyData.name;
		});
		
		// The animation sprite strips for the enemy are all added to an array of textures
		var enemyStrips = [];
		for (let animStrip of gameInfo.enemies[enemyName].animations) {
			var enemyTexture = game.filmstrip(animStrip.source, animStrip.frameWidth, animStrip.frameHeight);
			enemyStrips = enemyStrips.concat(enemyTexture);
		}
		// The finished texture array will be used later to initialize sprites for the enemy
		gameInfo.enemies[enemyName].animations["fullTexture"] = enemyStrips;
	}

	// Next the tower data is added to gameInfo
	gameInfo.towers = [];
	for (let towerName of gameInfo.manifest.towers) {
		// For every tower listed in the manifest
		var towerFile = gameInfo.manifest.towersDir + "/" + towerName + "/info.json";
		// Get the info.JSON file for that tower and add the data to gameInfo
		await $.getJSON(towerFile, function(towerData){
			gameInfo.towers[towerData.name] = towerData;
			towerName = towerData.name;
		});

		// The animation sprite strips for the tower are all added to an array of textures
		var towerStrips = [];
		for (let animStrip of gameInfo.towers[towerName].animations) {
			var towerTexture = game.filmstrip(animStrip.source, animStrip.frameWidth, animStrip.frameHeight);
			towerStrips = towerStrips.concat(towerTexture);
		}
		// The finished texture array will be used later to initialize sprites for the tower
		gameInfo.towers[towerName].animations["fullTexture"] = towerStrips;
		// Towers start out as locked / unavailable
		gameInfo.towers[towerName].locked = true;
	}
	
	// Next the level select page is setup
	gameInfo.levelSelectGroup = game.group();
	gameInfo.levelSelectInteractive = [];
	let levelSelectBackground = game.sprite("resources/interface/levelselectbackground.png");
	gameInfo.levelSelectGroup.addChild(levelSelectBackground);
	
	// Set up the button to play each level
	for (let level in gameInfo.levels) {
		level = gameInfo.levels[level];
		let levelButton = game.sprite(level.buttonSource);
		// Level button will be revealed after the level is unlocked
		levelButton.alpha = 0;
		levelButton.level = level.name;
		levelButton.interact = true;
		// Function for when button is clicked and released
		levelButton.release = () => {
			initLevel(levelButton.level);
			gameInfo.characters["Toadsworth"].sprite.speechRight.visible = false;
			gameInfo.characters["Toadsworth"].sprite.maxTipIndex = 0;
			levelButton.tint = 0xFFFFFF;
			changeScenes(gameInfo.levelSelectGroup, gameInfo.levelSelectInteractive, gameInfo.levelInterfaceGroup, gameInfo.levelInterfaceInteractive, function(){
				game.state = play;
			});
		};
		// Function for when mouse is over the button
		levelButton.over = () => {
			levelButton.tint = 0xFFFF99;
		};
		// Function for when mouse leaves the button
		levelButton.out = () => {
			levelButton.tint = 0xFFFFFF;
		};
		gameInfo.levelSelectGroup.addChild(levelButton);
		//gameInfo.levelSelectInteractive.push(levelButton);
		levelButton.interact = false;
		levelButton.setPosition(level.buttonPosition[0], level.buttonPosition[1]);
		level.buttonSprite = levelButton;
	}
	gameInfo.levelSelectGroup.visible = false;
	//levelButtons.visible = false;
	
	// Next the cutscene character data is added to gameInfo
	// The backgrounds for the different cutscenes are initialized as sprites and stored
	gameInfo.sceneSprites = [];
	gameInfo.sceneSprites["Gardener"] = game.group(game.sprite("resources/interface/cutsceneBG1.png"));
	gameInfo.sceneSprites["Gardener"].visible = false;
	gameInfo.sceneSprites["Sorceress"] = game.group(game.sprite("resources/interface/cutsceneBG2.png"));
	gameInfo.sceneSprites["Sorceress"].visible = false;
	gameInfo.sceneSprites["Engineer"] = game.group(game.sprite("resources/interface/cutsceneBG2.png"));
	gameInfo.sceneSprites["Engineer"].visible = false;
	gameInfo.sceneSprites["Victory"] = game.group(game.sprite("resources/interface/cutsceneBG2.png"));
	gameInfo.sceneSprites["Victory"].visible = false;
	// The character sprites are created and stored
	gameInfo.characters = [];
	for (let characterName of gameInfo.manifest.characters) {
		// For every character listed in the manifest 
		var characterFile = gameInfo.manifest.charactersDir + "/" + characterName + "/info.json";
		// Get the info.JSON file for that character and add the data to gameInfo
		await $.getJSON(characterFile, function(characterData){
			gameInfo.characters[characterData.name] = characterData;
			characterName = characterData.name;
		});
		
		// The animation sprite strips for the character are all added to an array of textures
		var characterStrips = [];
		for (let animStrip of gameInfo.characters[characterName].animations) {
			var characterTexture = game.filmstrip(animStrip.source, animStrip.frameWidth, animStrip.frameHeight);
			characterStrips = characterStrips.concat(characterTexture);
		}
		// The finished texture array will be used to initialize sprites for the character
		gameInfo.characters[characterName].animations["fullTexture"] = characterStrips;
		let characterInfo = gameInfo.characters[characterName];
		characterInfo.sprite = game.sprite(characterInfo.animations["fullTexture"]);
		characterInfo.sprite.setPosition(-100, -100);
		characterInfo.sprite.lines = characterInfo.lines;
		characterInfo.sprite.offsets = characterInfo.speechBubbleOffsets;
		characterInfo.sprite.states = {};
		// For each animation the character has
		for (let animation of characterInfo.animations) {
			// Specify its name and the frames it uses
			characterInfo.sprite.states[animation.name] = animation.frameSpan;
		}
		// Speech bubble sprites are created for each character; Toadsworth uses a special speech bubble
		if (!(characterInfo.name == "Toadsworth")) {
			let speechRight = game.sprite("resources/interface/speechRight.png");
			let speechTextRight = new PIXI.Text("", {font: '12px Arial', fill: 'black', wordWrap: true, wordWrapWidth: 196});
			speechTextRight.anchor.x = 0.5;
			speechTextRight.anchor.y = 0.5;
			speechTextRight.x = speechRight.centerX;
			speechTextRight.y = speechRight.centerY - 8;
			let speechLeft = game.sprite("resources/interface/speechLeft.png");
			let speechTextLeft = new PIXI.Text("", {font: '12px Arial', fill: 'black', wordWrap: true, wordWrapWidth: 196});
			speechTextLeft.anchor.x = 0.5;
			speechTextLeft.anchor.y = 0.5;
			speechTextLeft.x = speechLeft.centerX;
			speechTextLeft.y = speechLeft.centerY - 8;
			characterInfo.sprite.speechRight = game.group(speechRight, speechTextRight);
			characterInfo.sprite.speechLeft = game.group(speechLeft, speechTextLeft);
			characterInfo.sprite.speechRight.visible = false;
			characterInfo.sprite.speechLeft.visible = false;
			characterInfo.sprite.speakNow = 0;
			characterInfo.sprite.lastLineSpoken = 0;
		}
		// Larger speech bubble for Toadsworth
		else {
			let speechRight = game.sprite("resources/interface/tipBubble.png");
			let speechTextRight = new PIXI.Text("", {font: '12px Arial', fill: 'black', wordWrap: true, wordWrapWidth: 196});
			speechTextRight.anchor.x = 0.5;
			speechTextRight.anchor.y = 0;
			speechTextRight.x = speechRight.centerX;
			speechTextRight.y = speechRight.centerY - 57;
			characterInfo.sprite.speechRight = game.group(speechRight, speechTextRight);
			characterInfo.sprite.speechRight.visible = false;
		}
		
	}
	gameInfo.sceneSprites["Gardener"].addChild(gameInfo.characters["Princess Peach"].sprite);
	gameInfo.sceneSprites["Gardener"].addChild(gameInfo.characters["Toad"].sprite);
	gameInfo.sceneSprites["Gardener"].addChild(gameInfo.characters["Monty"].sprite);
	
	// The level select page features Toadsworth, who dispenses game tips
	gameInfo.levelSelectGroup.addChild(gameInfo.characters["Toadsworth"].sprite);
	gameInfo.characters["Toadsworth"].sprite.interact = true;
	gameInfo.characters["Toadsworth"].sprite.release = toadsworthTip;
	gameInfo.levelSelectInteractive.push(gameInfo.characters["Toadsworth"].sprite);
	gameInfo.characters["Toadsworth"].sprite.setPosition(184, 233);
	gameInfo.characters["Toadsworth"].sprite.fps = 6;
	gameInfo.characters["Toadsworth"].sprite.playAnimation(gameInfo.characters["Toadsworth"].sprite.states.idle);
	gameInfo.characters["Toadsworth"].sprite.speechRight.setPosition(151, 101);
	gameInfo.characters["Toadsworth"].sprite.tips = gameInfo.characters["Toadsworth"].tips;
	gameInfo.characters["Toadsworth"].sprite.tipIndex = 0;
	gameInfo.characters["Toadsworth"].sprite.maxTipIndex = 0;
	gameInfo.characters["Toadsworth"].sprite.timeout = -1;
	
	// Next the title page is setup
	// Unlike levels, towers, and enemies, UI elements are hardcoded
	gameInfo.titleGroup = game.group();
	gameInfo.titleInteractive = [];
	let titleBackground = game.sprite("resources/interface/titlebackground.png");
	titleBackground.interact = true;
	gameInfo.titleInteractive.push(titleBackground);
	// Setting the release function of a sprite with interact set to true
	// means that function will run when the sprite is clicked and released
	titleBackground.release = () => {
		// When the title screen is clicked anywhere, the game begins after a miniscule delay
		game.wait(100, () => {
			changeScenes(gameInfo.titleGroup, gameInfo.titleInteractive, gameInfo.levelSelectGroup, gameInfo.levelSelectInteractive, function() {
				game.state = levelSelect;
			});
		});
	};
	gameInfo.titleGroup.addChild(titleBackground);
	// Text for the title screen
	let titleText = new PIXI.Text("BOWSER'S REVENGE", {font: '70px mariofont', fill: 'red', stroke: 'black', strokeThickness: 7 });
	titleText.anchor.x = 0.5;
	titleText.anchor.y = 0.5;
	titleText.x = 400;
	titleText.y = 300;
	gameInfo.titleGroup.addChild(titleText);
	let titleText2 = new PIXI.Text("CLICK ANYWHERE TO PLAY!", {font: '42px mariofont', fill: 'white', stroke: 'black', strokeThickness: 5 });
	titleText2.anchor.x = 0.5;
	titleText2.anchor.y = 0.5;
	titleText2.x = 400;
	titleText2.y = 550;
	gameInfo.titleGroup.addChild(titleText2);

	// Next the in-level UI elements are setup
	gameInfo.levelInterfaceGroup = game.group();
	gameInfo.levelInterfaceInteractive = [];
	gameInfo.towerPortraits = [];
	// Add the current health UI element
	let healthIcon = game.sprite("resources/interface/amountHeart.png");
	healthIcon.setPosition(10, 10);
	gameInfo.levelInterfaceGroup.addChild(healthIcon);
	gameInfo.healthText = new PIXI.Text("", {font: '42px mariofont', fill: 'white', stroke: 'black', strokeThickness: 5});
	gameInfo.healthText.x = 70;
	gameInfo.healthText.y = 10;
	gameInfo.levelInterfaceGroup.addChild(gameInfo.healthText);
	// Add the current coins UI element
	let coinIcon = game.sprite("resources/interface/amountCoin.png");
	coinIcon.setPosition(265, 10);
	gameInfo.levelInterfaceGroup.addChild(coinIcon);
	gameInfo.coinText = new PIXI.Text("", {font: '42px mariofont', fill: 'white', stroke: 'black', strokeThickness: 5});
	gameInfo.coinText.x = 325;
	gameInfo.coinText.y = 10;
	gameInfo.levelInterfaceGroup.addChild(gameInfo.coinText);
	// Add the current wave UI element
	gameInfo.waveText = new PIXI.Text("", {font: '42px mariofont', fill: 'white', stroke: 'black', strokeThickness: 5});
	gameInfo.waveText.x = 515;
	gameInfo.waveText.y = 10;
	gameInfo.levelInterfaceGroup.addChild(gameInfo.waveText);
	// Add the tower builder buttons
	let towerOffset = 0;
	gameInfo.priceLabels = [];
	for (let tower in gameInfo.towers) {
		let buttonSource = gameInfo.towers[tower].buttonSource;
		let towerButton = game.sprite(buttonSource);
		towerButton.tower = gameInfo.towers[tower].name;
		towerButton.setPosition(20, 70 + towerOffset);
		let priceLabel = new PIXI.Text(gameInfo.towers[tower].price, {font: '14px mariofont', fill: 'white', stroke: 'black', strokeThickness: 5});
		priceLabel.cost = gameInfo.towers[tower].price;
		priceLabel.anchor.x = 0.5;
		priceLabel.anchor.y = 0.5;
		priceLabel.x = towerButton.centerX;
		priceLabel.y = 138 + towerOffset;
		gameInfo.priceLabels.push(priceLabel);
		gameInfo.levelInterfaceGroup.addChild(priceLabel);
		let towerInfoLabel = game.rectangle(150, 58, "green");
		towerInfoLabel.alpha = 0.50;
		towerInfoLabel.setPosition(towerButton.x + 90, towerButton.y);
		towerInfoLabel.visible = false;
		gameInfo.levelInterfaceGroup.addChild(towerInfoLabel);
		let towerInfoText = new PIXI.Text("Damage: " + gameInfo.towers[tower].bulletDamage + "\nRange: " + gameInfo.towers[tower].targetRange + "\nCooldown: " + gameInfo.towers[tower].bulletCooldown, {font: '14px mariofont', fill: 'white', stroke: 'black', strokeThickness: 5});
		towerInfoText.x = towerInfoLabel.x + 5;
		towerInfoText.y = towerInfoLabel.y;
		towerInfoText.visible = false;
		gameInfo.levelInterfaceGroup.addChild(towerInfoText);
		towerOffset += 89;
		towerButton.interact = true;
		// Function for when button is clicked and released
		towerButton.release = () => {
			//  If already building a tower, delete the preview and range
			if (gameInfo.currentLevelBuilding) {
				game.remove(gameInfo.currentLevelBuildingPreview);
				game.remove(gameInfo.currentLevelBuildingPreviewRange);
				gameInfo.currentLevelBuilding = false;
				game.pointer.press = null;
				return;
			}
			gameInfo.currentLevelBuilding = true;
			gameInfo.currentLevelBuildingTower = towerButton.tower;
			gameInfo.currentLevelBuildingPreview = game.sprite(gameInfo.towers[towerButton.tower].animations.fullTexture[gameInfo.towers[towerButton.tower].buildFrame]);
			gameInfo.currentLevelBuildingPreview.tint = 0xFF0000;
			gameInfo.currentLevelBuildingPreview.alpha = 0.65;
			gameInfo.currentLevelBuildingPreview.anchor.x = 0.5;
			gameInfo.currentLevelBuildingPreview.anchor.y = 0.5;
			gameInfo.currentLevelBuildingPreview.setPosition(game.pointer.x, game.pointer.y);
			gameInfo.currentLevelBuildingPreview.price = gameInfo.towers[towerButton.tower].price;
			gameInfo.currentLevelBuildingPreviewRange = game.circle((2 * gameInfo.towers[towerButton.tower].targetRange), 0x000000);
			gameInfo.currentLevelBuildingPreviewRange.anchor.x = 0.5;
			gameInfo.currentLevelBuildingPreviewRange.anchor.y = 0.5;
			gameInfo.currentLevelBuildingPreviewRange.alpha = 0.05;
			gameInfo.currentLevelBuildingPreviewRange.setPosition(game.pointer.x, game.pointer.y);
			game.pointer.press = buildTower;
		};
		// Function for when mouse is over the button
		towerButton.over = () => {
			towerButton.tint = 0xFFFF99;
			towerInfoLabel.visible = true;
			towerInfoText.visible = true;

		};
		// Function for when mouse leaves the button
		towerButton.out = () => {
			towerButton.tint = 0xFFFFFF;
			towerInfoLabel.visible = false;
			towerInfoText.visible = false;

		};
		gameInfo.towers[tower].portrait = towerButton;
		gameInfo.levelInterfaceGroup.addChild(towerButton);
		gameInfo.towerPortraits.push(towerButton);
		towerButton.interact = false;
		// Tinting is removed and price is shown once the tower is unlocked
		towerButton.tint = 0x4d0000;
		towerButton.priceLabel = priceLabel;
		towerButton.priceLabel.text = "";
	}
	gameInfo.levelInterfaceGroup.visible = false;
	
	// Next the user's save data (last level completed) is accessed and
	// the appropriate towers + levels are automatically unlocked
	let userLevel = localStorage.getItem('Level Completed');
	let userScene = localStorage.getItem('Scene Completed');
	let userTips = localStorage.getItem('Tips Completed');
	if (userLevel) {
		gameInfo.lastLevelCompleted = userLevel;
	}
	else {
		gameInfo.lastLevelCompleted = 0;
	}
	if (userScene) {
		gameInfo.lastSceneCompleted = userScene;
	}
	else {
		gameInfo.lastSceneCompleted = 0;
	}
	if (userTips) {
		gameInfo.lastTipsCompleted = userTips;
	}
	else {
		gameInfo.lastTipsCompleted = 0;
	}
	// Unlock towers that have already been unlocked by this player
	for (let tower in gameInfo.towers) {
		if(gameInfo.towers[tower].locked && gameInfo.towers[tower].unlockAfterScene <= gameInfo.lastSceneCompleted) {
			gameInfo.towers[tower].locked = false;
			gameInfo.towers[tower].portrait.tint = 0xFFFFFF;
			gameInfo.towers[tower].portrait.priceLabel.text = gameInfo.towers[tower].price;
			gameInfo.levelInterfaceInteractive.push(gameInfo.towers[tower].portrait);
		}
	}
	// Unlock levels that have already been unlocked by this player
	for (let level in gameInfo.levels) {
		level = gameInfo.levels[level];
		if (level.number <= (+gameInfo.lastLevelCompleted + 1)) {
			gameInfo.levelSelectInteractive.push(level.buttonSprite);
			level.buttonSprite.alpha = 1;
		}
	}
	
	// Start the game at the title screen
	game.state = title;
}

//**********************************************************

// Runs 60 times each second while the title screen is displayed
function title(){

}

// Runs 60 times each second while the level select screen is displayed
function levelSelect(){
	// If the player is seeing level select for the first time
	if (gameInfo.lastSceneCompleted == 1 && gameInfo.lastTipsCompleted == 0) {
		let toadsworth = gameInfo.characters["Toadsworth"].sprite;
		toadsworth.release = null;
		toadsworth.speechRight.children[1].text = toadsworth.lines[0];
		toadsworth.speechRight.visible = true;
		game.wait(8500, () => {
			toadsworth.speechRight.visible = false;
			toadsworth.release = toadsworthTip;
		});
		gameInfo.lastTipsCompleted = 1;
		localStorage.setItem("Tips Completed", 1);
	}
	
	// If the player has just completed level 1
	if (gameInfo.lastSceneCompleted == 2 && gameInfo.lastTipsCompleted == 1) {
		let toadsworth = gameInfo.characters["Toadsworth"].sprite;
		toadsworth.release = null;
		toadsworth.speechRight.children[1].text = toadsworth.lines[1];
		toadsworth.speechRight.visible = true;
		game.wait(8500, () => {
			toadsworth.speechRight.children[1].text = toadsworth.lines[2];
			game.wait(8500, () => {
				toadsworth.speechRight.visible = false;
				toadsworth.release = toadsworthTip;
			});
		});
		gameInfo.lastTipsCompleted = 2;
		localStorage.setItem("Tips Completed", 2);
	}
	
	// If the player has just completed level 2
	if (gameInfo.lastSceneCompleted == 3 && gameInfo.lastTipsCompleted == 2) {
		let toadsworth = gameInfo.characters["Toadsworth"].sprite;
		toadsworth.release = null;
		toadsworth.speechRight.children[1].text = toadsworth.lines[3];
		toadsworth.speechRight.visible = true;
		game.wait(8500, () => {
			toadsworth.speechRight.children[1].text = toadsworth.lines[4];
			game.wait(8500, () => {
				toadsworth.speechRight.visible = false;
				toadsworth.release = toadsworthTip;
			});
		});
		gameInfo.lastTipsCompleted = 3;
		localStorage.setItem("Tips Completed", 3);
	}
	
	// If the player has just completed level 3
	if (gameInfo.lastSceneCompleted == 4 && gameInfo.lastTipsCompleted == 3) {
		let toadsworth = gameInfo.characters["Toadsworth"].sprite;
		toadsworth.release = null;
		toadsworth.speechRight.children[1].text = toadsworth.lines[5];
		toadsworth.speechRight.visible = true;
		game.wait(8500, () => {
			toadsworth.speechRight.visible = false;
			toadsworth.release = toadsworthTip;
		});
		gameInfo.lastTipsCompleted = 4;
		localStorage.setItem("Tips Completed", 4);
	}
	
	// If the highest completed level is 0
	if (+gameInfo.lastLevelCompleted == 0 && gameInfo.characters["Toadsworth"].sprite.maxTipIndex == 0) {
		gameInfo.characters["Toadsworth"].sprite.maxTipIndex = 4;
		gameInfo.characters["Toadsworth"].sprite.tipIndex = 0;
	}
	// If the highest completed level is 1
	else if (+gameInfo.lastLevelCompleted == 1 && gameInfo.characters["Toadsworth"].sprite.maxTipIndex == 0) {
		gameInfo.characters["Toadsworth"].sprite.maxTipIndex = 9;
		gameInfo.characters["Toadsworth"].sprite.tipIndex = 5;
		
	}
	// If the highest completed level is 2
	else if (+gameInfo.lastLevelCompleted == 2 && gameInfo.characters["Toadsworth"].sprite.maxTipIndex == 0) {
		gameInfo.characters["Toadsworth"].sprite.maxTipIndex = 12;
		gameInfo.characters["Toadsworth"].sprite.tipIndex = 10;
	}
	else if (gameInfo.characters["Toadsworth"].sprite.maxTipIndex == 0) {
		gameInfo.characters["Toadsworth"].sprite.maxTipIndex = 12;
		gameInfo.characters["Toadsworth"].sprite.tipIndex = 0;
	}
	
	gameInfo.characters["Toadsworth"].sprite.timeout -= 1;
	if (gameInfo.characters["Toadsworth"].sprite.timeout == 0) {
		gameInfo.characters["Toadsworth"].sprite.speechRight.visible = false;
	}
}

// Runs 60 times each second when game.state is set to 'play'
function play(){
	
	// If the player has entered tower building mode
	if (gameInfo.currentLevelBuilding) {
		// Keep the building preview centered on the pointer
		gameInfo.currentLevelBuildingPreview.setPosition(game.pointer.x, game.pointer.y);
		gameInfo.currentLevelBuildingPreviewRange.setPosition(game.pointer.x, game.pointer.y);
		// Update the building preview color to indicate valid or invalid build spots
		if (isValidBuild()) {
			gameInfo.currentLevelBuildingPreview.tint = 0x0000FF;
		}
		else {
			gameInfo.currentLevelBuildingPreview.tint = 0xFF0000;
		}
	}
	
	// If the level is just beginning
	if (gameInfo.currentLevelTime == 0) {
		//gameInfo.currentLevelBackground.visible = true;
		gameInfo.currentLevelMusic.playFrom(0);
	}

	// Update the time
	gameInfo.currentLevelTime += 1;
	
	// Update the UI elements for health, coins, and the current wave
	gameInfo.coinText.text = 'X ' + gameInfo.currentLevelCash;
	gameInfo.healthText.text = 'X ' + gameInfo.currentLevelLives;
	// If the last wave has not been reached, wave text is updated
	if ((gameInfo.currentLevelWave) < gameInfo.currentLevel.waves.length) {
		gameInfo.waveText.text = "Wave " + (gameInfo.currentLevelWave + 1) + '/' + gameInfo.currentLevel.waves.length;
	}
	// Price labels are red if the player doesn't have enough coins and white if they do
	for (let priceLabel of gameInfo.priceLabels) {
		if(priceLabel.cost > gameInfo.currentLevelCash && priceLabel.style.fill != "red") {
			priceLabel.style = {font: '14px mariofont', fill: 'red', stroke: 'black', strokeThickness: 5};
		}
		else if (priceLabel.cost <= gameInfo.currentLevelCash && priceLabel.style.fill != "white") {
			priceLabel.style = {font: '14px mariofont', fill: 'white', stroke: 'black', strokeThickness: 5};
		}
	}

	// If the final enemy of the final wave in the level has been spawned
	if (gameInfo.currentLevelAllSpawned == true) {
		// And all enemies have left the screen / been removed from the game
		if (gameInfo.currentLevelEnemies.length == 0) {
			// Then the player is victorious and the level is over
			// Later it will matter if the player won or lost and content on the level select screen will respond to it
			console.log("VICTORY");
			if (gameInfo.lastLevelCompleted < gameInfo.currentLevel.number) {
				gameInfo.lastLevelCompleted = gameInfo.currentLevel.number;
				// If this is the highest level completed so far, save it to the user's browser
				localStorage.setItem('Level Completed', gameInfo.lastLevelCompleted);
				// And unlock the next level
				for (let level in gameInfo.levels) {
					level = gameInfo.levels[level];
					if (level.number == gameInfo.lastLevelCompleted + 1) {
						gameInfo.levelSelectInteractive.push(level.buttonSprite);
						level.buttonSprite.alpha = 1;
					}
				}
			}
			gameInfo.currentLevelRunning = false;
			gameInfo.currentLevelWinSound.play();
			cleanupLevel();
		}
	}
	
	// If the player's health has dropped to 0
	if (gameInfo.currentLevelLives <= 0) {
		// Then they have lost and the level is over
		// Later it will matter if the player won or lost and content on the level select screen will respond to it
		console.log("DEFEAT");
		gameInfo.currentLevelRunning = false;
		gameInfo.currentLevelLoseSound.play();
		cleanupLevel();
	}

	// For each enemy on the map
	for (const [index, enemy] of gameInfo.currentLevelEnemies.entries()) {
		
		// Keep the healthbar at the enemy's feet
		enemy.healthbarGroup.children[0].setPosition(enemy.x, enemy.y + 3);
		enemy.healthbarGroup.children[1].setPosition(enemy.x - (25 / 2), enemy.y + 3);
		
		// If the enemy has a trait radius, keep the trait radius centered on the enemy
		if ("healCircle" in enemy) {
			enemy.healCircle.setPosition(enemy.x, enemy.y - 10);
			// If it is time to trigger the healing
			if ((gameInfo.currentLevelTime % (60 * enemy.traits.healRadius[2])) == 0) {
				game.wait((game.randomInt(0, 2000)), () => {
					if (enemy.disrupted) {
						return;
					}
					for (let ally of gameInfo.currentLevelEnemies) {
						if(game.hitTestCircleRectangle(enemy.healCircle, ally)) {
							let newHealth = ally.currentHealth + enemy.traits.healRadius[1];
							if (newHealth >= ally.maxHealth) {
								ally.currentHealth = ally.maxHealth;
							}
							else {
								ally.currentHealth = newHealth;
							}
							// Update the ally healthbar
							let newWidth = (((ally.currentHealth / ally.maxHealth) * 100) / 4);
							if (newWidth < 0) {
								newWidth = 0;
							}
							ally.healthbarGroup.children[1].width = newWidth;
							// The healing circle is briefly displayed when the heal takes place
							enemy.healCircle.visible = true;
							game.wait(900, () => {
								enemy.healCircle.visible = false;
							});
						}
					}
				});
			}
		}
		
		// Check each projectile to see if the enemy has been struck
		for (const [index, projectile] of gameInfo.currentLevelProjectiles.entries()) {
			// If a projectile did hit the enemy
			if (game.hitTestRectangle(enemy, projectile)) {
				// Then that enemy takes damage if not invincible
				if (!("invincible" in enemy && enemy.invincible)) {
					// Enemies with the Koopa trait have a chance of deflecting the projectile
					if (!("Koopa" in enemy.traits && !enemy.disrupted && game.randomInt(1, 100) <= enemy.traits.Koopa)) {
						enemyDamage(enemy, projectile, true);
					}
					// If a koopa successfully deflects the projectile
					else {
						projectile.vx *= -1;
						projectile.vy *= -1;
						projectile.scale.x *= -1;
						game.move(projectile);
					}
				}
			}
		}
		
		// If the enemy is burning
		if ("burning" in enemy && enemy.burning) {
			enemy.burning -= 1;
			enemy.currentHealth -= enemy.burningDamage;
			let newWidth = (((enemy.currentHealth / enemy.maxHealth) * 100) / 4);
			if (newWidth < 0) {
				newWidth = 0;
			}
			enemy.healthbarGroup.children[1].width = newWidth;
			// If the burning ticker has run down
			if (enemy.burning == 0) {
				enemy.burning = false;
				enemy.burningDamage = 0;
				enemy.healthbarGroup.children[0].lineWidth = 0;
			}
		}
		
		// If the enemy is disrupted
		if ("disrupted" in enemy && enemy.disrupted) {
			enemy.disrupted -= 1;
			// If the disruption ticker has run down
			if (enemy.disrupted == 0) {
				enemy.disrupted = false;
				if(enemy.tint != 0xFF0000) {
					enemy.tint = 0xFFFFFF;
				}
			}
		}

		// If the enemy's current health has fallen below one
		if (enemy.currentHealth <= 0) {
			//Add reward to Cash
			gameInfo.currentLevelCash += enemy.reward;
			// Then that enemy has been slain and is removed
			gameInfo.currentLevelEnemies.splice(index, 1);
			game.wait(200, () => {
				if (enemy) {
					game.remove(enemy.healthbarGroup);
					game.remove(enemy);
				}
			});
		}
		
		// If the enemy has upcoming turns in their path
		if (enemy.turnsTaken < enemy.pathTurns.length) {
			// And they have reached a turn (travelling horizontally)
			if (enemy.vx && ((enemy.vx > 0 && enemy.x >= gameInfo.currentLevel.turns[enemy.turnsTaken][0]) || (enemy.vx < 0 && enemy.x <= gameInfo.currentLevel.turns[enemy.turnsTaken][0]) )) {
				// Then they will now be travelling vertically along the y axis
				let direction = enemy.vx;
				enemy.vx = 0;
				// If they are turning downwards
				if (gameInfo.currentLevel.turns[enemy.turnsTaken][1] == 1) {
					// If the enemy approaches from the left
					if (direction > 0) {
						direction = "rightdown";
					}
					// If the enemy approaches from the right
					else {
						direction = "leftdown";
					}
					enemyCurve(enemy, direction, enemy.states.walkDown);
					enemy.vy = enemy.speed;
				}
				// Else they are turning upwards
				else {
					// If the enemy approaches from the left
					if (direction > 0) {
						direction = "rightup";
					}
					// If the enemy approaches from the right
					else {
						direction = "leftup";
					}
					enemyCurve(enemy, direction, enemy.states.walkUp);
					enemy.vy = enemy.speed * -1;
				}
				enemy.turnsTaken += 1;
			}
			// And they have reached a turn (travelling vertically)
			//else if (enemy.vy && enemy.y == gameInfo.currentLevel.turns[enemy.turnsTaken][0]) {
			else if (enemy.vy && ((enemy.vy > 0 && enemy.y >= gameInfo.currentLevel.turns[enemy.turnsTaken][0]) || (enemy.vy < 0 && enemy.y <= gameInfo.currentLevel.turns[enemy.turnsTaken][0]) )) {
				// Then they will now be traviling horizontally along the x axis
				let direction = enemy.vy;
				enemy.vy = 0;
				// If they are turning rightwards
				if (gameInfo.currentLevel.turns[enemy.turnsTaken][1] == 1) {
					// If the enemy approaches from the top
					if (direction > 0) {
						direction = "downright";
					// If the enemy approaches from the bottom
					}
					else {
						direction = "upright";
					}
					enemyCurve(enemy, direction, enemy.states.walkRight);
					enemy.vx = enemy.speed;
				}
				// Else they are turning leftwards
				else {
					// If the enemy approaches from the top
					if (direction > 0) {
						direction = "downleft";
					}
					// If the enemy approaches from the bottom
					else {
						direction = "upleft";
					}
					enemyCurve(enemy, direction, enemy.states.walkLeft);
					enemy.vx = enemy.speed * -1;
				}
				enemy.turnsTaken += 1;
			}
		}

		// Move the enemy according to their velocity values
		game.move(enemy);
		
		// If the enemy has completed all turns in the path
		if (enemy.turnsTaken == enemy.pathTurns.length) {
			// Then it is removed after leaving the visible area and a life is deducted from the player
			let collision = game.outsideBounds(enemy, game.stage);
			if(collision){
				gameInfo.currentLevelEnemies.splice(index, 1);
				if ("Boss" in enemy.traits) {
					gameInfo.currentLevelLives = 0;
				}
				else {
					gameInfo.currentLevelLives -= 1;
				}
				game.wait(2000, () => {
					if (enemy) {
						game.remove(enemy.healthbarGroup);
						game.remove(enemy);
					}
				});
			}
		}
	}

	// For each tower on the map
	for (let tower of gameInfo.currentLevelTowers) {
		
		let towerInfo = gameInfo.towers[tower.name];
		// Decrement the tower's shooting cooldown
		tower.cooldown -= 1;
		// If the cooldown has reached 0, begin the shooting process
		if (tower.cooldown == 0) {
			// Helper function acquires closest valid target and stores it on the tower object
			towerTarget(tower, towerInfo, false);
			// If no target was found
			if (!tower.closestEnemy) {
			    // Then the tower can try again next tick
			    tower.cooldown = 1;
			}
			else {
			    // With a target acquired, begin the shooting animation
			    tower.playAnimation(tower.states.shoot);
			    // By default, sprites are animated at 12 frames per second
			    game.wait((1000 * (towerInfo.shotWindup / 12)), () => {
			        if (gameInfo.currentLevelRunning) {
					    // Reperform targetting and make the shot 
			            tower.closestEnemy = null;
			            // Towers with the sureshot trait get extra range while taking this shot
					    if("Sureshot" in towerInfo.traits) {
					    	towerTarget(tower, towerInfo, true);
					    }
					    else {
					    	towerTarget(tower, towerInfo, false);
					    }
			            // If a valid target was acquired, make the shot
			            if (tower.closestEnemy) {
			                towerShoot(tower, towerInfo);
			            }
			            // If no target could be found, the shot windup is wasted and the tower can try again after the wind-down
			            else {
			                game.wait((1000 * (towerInfo.shotWinddown / 12)), () => {
			                    if (gameInfo.currentLevelRunning) {
			                        tower.playAnimation(tower.states.idle);
					                tower.cooldown = 1;
			                     }
				            });
			            }
			        }
			    });
			}
		}
	}

	// For each projectile on the map
	for (const [index, projectile] of gameInfo.currentLevelProjectiles.entries()) {
		// If the projectile has hit a target, it is removed after a very brief delay
		if (projectile.finished == 1 || projectile.disrupted) {
			if("Explosive" in projectile.traits && !projectile.disrupted){
				// Fire and physical explosions are red; magical explosions are blue
				let explosionColor = "red";
				if (projectile.type == "Magic") {
					explosionColor = "blue";
				}
				let explosion = game.circle((projectile.traits.Explosive * 2), explosionColor);
				explosion.anchor.x = 0.5;
				explosion.anchor.y = 0.5;
				explosion.setPosition(projectile.x, projectile.y - 10);
				explosion.alpha = 0.5;
				// For all enemies hit by the explosion
				for (let enemy of gameInfo.currentLevelEnemies) {
					if(game.hitTestCircleRectangle(explosion, enemy) && !enemy.invincible) {
						enemyDamage(enemy, projectile, false);
					}
				}
				game.wait(400, () => {
					if (explosion) {
						game.remove(explosion);
					}
				});
			}
			gameInfo.currentLevelProjectiles.splice(index, 1);
			game.wait(20, () => {
				if (projectile) {
					game.remove(projectile);
				}
			});
		}
		// Move the projectile
		game.move(projectile);
		// If the projectile has left the visible area, destroy it after one second
		let collision = game.outsideBounds(projectile, game.stage);
		if(collision){
			gameInfo.currentLevelProjectiles.splice(index, 1);
			game.wait(1000, () => {
				if (projectile) {
					game.remove(projectile);
				}
			});
		}
	}

	// After five seconds and every 60 seconds thereafter as long as there are waves left in the level
	if(((gameInfo.currentLevelTime - 300) % 900 == 0) && (gameInfo.currentLevelWave < gameInfo.currentLevel.waves.length)) { //replace 900 with 3600 after the midpoint demo
		// currentLevelWave is incremented so each wave will start a minute apart from the previous
		gameInfo.currentLevelWave += 1;
		gameInfo.currentLevelWaveDone = false;
	}

	// If it is a second mark and the first wave has begun, but the last wave has not begun
	if (gameInfo.currentLevelTime % 60 == 0 && gameInfo.currentLevelWave >= 0 && gameInfo.currentLevelWave < gameInfo.currentLevel.waves.length) {
		// If the current wave still has enemies left to spawn
		if (gameInfo.currentLevelWaveDone == false) {
			// Then spawn the next trio of enemies in the current wave
			let enemyOuter = spawnEnemy(gameInfo.currentLevel.waves[gameInfo.currentLevelWave][gameInfo.currentLevelWaveSegment][2]);
			let enemyMiddle = spawnEnemy(gameInfo.currentLevel.waves[gameInfo.currentLevelWave][gameInfo.currentLevelWaveSegment][1]);
			let enemyInner = spawnEnemy(gameInfo.currentLevel.waves[gameInfo.currentLevelWave][gameInfo.currentLevelWaveSegment][0]);
			enemyOuter.pathing = "outer";
			enemyMiddle.pathing = "middle";
			enemyInner.pathing = "inner";
			// If the first turn goes from leftwards to upwards, then outer and inner enemies have their pathing designation switched
			if (gameInfo.currentLevel.turns[0][1] == -1) {
				enemyOuter.pathing = "inner";
				enemyInner.pathing = "outer";
			}
			enemyOuter.setPosition(gameInfo.currentLevel.startPosition[0], gameInfo.currentLevel.startPosition[1] -70);
			enemyMiddle.setPosition(gameInfo.currentLevel.startPosition[0], gameInfo.currentLevel.startPosition[1] -35);
			enemyInner.setPosition(gameInfo.currentLevel.startPosition[0], gameInfo.currentLevel.startPosition[1]);
			// Set each enemy in the trio moving in the right direction
			let enemyTrio = [enemyInner, enemyMiddle, enemyOuter];
			for (let enemy of enemyTrio) {
				enemy[gameInfo.currentLevel.startTravelAxis] = (enemy.speed * gameInfo.currentLevel.startTravelDirection);
				enemy.pathTurns = gameInfo.currentLevel.turns;
				enemy.turnsTaken = 0;
				enemy.playAnimation(enemy.states.walkLeft);
				enemy.anchor.x = 0.5;
				enemy.anchor.y = 1;
				// Antiprojectile enemies are always moved to the front of the currentLevelEnemies list for their projectile-gobbling properties
				if ("antiProjectile" in enemy.traits) {
					gameInfo.currentLevelEnemies.unshift(enemy);
				}
				else {
					gameInfo.currentLevelEnemies.push(enemy);
				}
				// Enemies with the startStealth trait remain invincible after spawning for a short time
				if ("startStealth" in enemy.traits) {
					enemy.invincible = true;
					enemy.alpha = 0.5;
					game.wait((game.randomInt(6000, (1000 * enemy.traits.startStealth))), () => {
						enemy.invincible = false;
						enemy.alpha = 1;
					});
				}
			}
			// If there are still wave segments left in this wave
			if (!(gameInfo.currentLevelWaveSegment == gameInfo.currentLevel.waves[gameInfo.currentLevelWave].length - 1)) {
				// Then move on to the next wave segment
				gameInfo.currentLevelWaveSegment += 1;
			}
			// Else if all enemies in the wave have been spawned
			else {
				// Then wave enemy spawning stops until the next wave begins
				gameInfo.currentLevelWaveSegment = 0;
				gameInfo.currentLevelWaveDone = true;
				// If that was the last wave
				if (gameInfo.currentLevelWave == gameInfo.currentLevel.waves.length - 1) {
					// Then the level is marked as having had every enemy spawn
					gameInfo.currentLevelAllSpawned = true;
				}
			}
		}
	}
}

// Runs 60 times each second while the game transitions between scenes
function transition(){
	
	game.move(gameInfo.curtain);
	
	// If the curtain has just fully descended
	if(gameInfo.curtain.y == 0 && !gameInfo.curtain.descended) {
		gameInfo.curtain.descended = true;
		gameInfo.curtain.vy = 0;
		gameInfo.transitionInvisible.visible = false;
		gameInfo.transitionVisible.visible = true;
		if (gameInfo.currentLevelRunning) {
			gameInfo.currentLevelBackground.visible = true;
		}
		for (var sprite in gameInfo.transitionVisible) {
			sprite.visible = true;
		}
		
	}
	
	if (gameInfo.curtain.descended) {
		gameInfo.ascendCounter -= 1;
	}
	
	// If the player has any new towers unlocked, they are unlocked while the curtain is down 
	if (gameInfo.ascendCounter == 10) {
		game.pause();
		gameInfo.currentUnlocks = [];
		for (let tower in gameInfo.towers) {
			if(gameInfo.towers[tower].locked && gameInfo.towers[tower].unlockAfterScene == gameInfo.lastSceneCompleted) {
				gameInfo.towers[tower].locked = false;
				gameInfo.towers[tower].portrait.tint = 0xFFFFFF;
				gameInfo.towers[tower].portrait.priceLabel.text = gameInfo.towers[tower].price;
				gameInfo.levelInterfaceInteractive.push(gameInfo.towers[tower].portrait);
				gameInfo.currentUnlocks.push(tower);
			}
		}
		if (gameInfo.currentUnlocks.length > 0) {
			// The tower information sprites are created dynamically so they will appear above the curtain
			createInfoPane(gameInfo.currentUnlocks[0]);
			gameInfo.currentInfoPane.index = 0;
			gameInfo.currentInfoPane2.interact = true;
			gameInfo.currentInfoPane2.release = nextInfoPane;
		}
		else {
			game.resume();
		}
	}
	
	
	// If it is time for the curtain to ascend
	if (gameInfo.ascendCounter == 0) {
		gameInfo.curtain.vy = -15;
		game.move(gameInfo.curtain);
	}
	
	// If the curtain has fully ascended
	if (gameInfo.curtain.y == -915) {
		game.remove(gameInfo.curtain);
		for (let sprite of gameInfo.transitionActivate) {
			game.makeInteractive(sprite);
		}
		gameInfo.transitionActivation();
	}
}

// Runs 60 times each second while cutscenes play
function cutscene(){
	
	if (gameInfo.currentScene == "Gardener") {
		
		// Peach thinks its a good morning
		if (gameInfo.sceneTime == 100) {
			characterSpeak(gameInfo.characters["Princess Peach"].sprite, 4, "right");
		}
	
		// Toad appears, running in from the top and yelling
		if (gameInfo.sceneTime == 355) {
			gameInfo.characters["Toad"].sprite.vy = 1.5;
			characterSpeak(gameInfo.characters["Toad"].sprite, 3, "left");
		}
		
		if (gameInfo.characters["Toad"].sprite.x >= 1000) {
			console.log(gameInfo.sceneTime);
		}
		
		// Toad turns right
		if (gameInfo.sceneTime == 471) {
			gameInfo.characters["Toad"].sprite.vx = gameInfo.characters["Toad"].sprite.vy;
			gameInfo.characters["Toad"].sprite.vy = 0;
			gameInfo.characters["Toad"].sprite.playAnimation(gameInfo.characters["Toad"].sprite.states.fearfulWalkRight);
		}
		
		// Peach steps down off the fountain
		if (gameInfo.sceneTime == 480) {
			gameInfo.characters["Princess Peach"].sprite.playAnimation(gameInfo.characters["Princess Peach"].sprite.states.walkDown);
			gameInfo.characters["Princess Peach"].sprite.vy = 0.5;
		}
		
		// Peach stops walking and turns to the right
		if (gameInfo.sceneTime == 580) {
			gameInfo.characters["Princess Peach"].sprite.vy = 0;
			gameInfo.characters["Princess Peach"].sprite.playAnimation(gameInfo.characters["Princess Peach"].sprite.states.idleright);
		}
		
		// Toad turns down
		if (gameInfo.sceneTime == 600) {
			gameInfo.characters["Toad"].sprite.vy = gameInfo.characters["Toad"].sprite.vx;
			gameInfo.characters["Toad"].sprite.vx = 0;
			gameInfo.characters["Toad"].sprite.playAnimation(gameInfo.characters["Toad"].sprite.states.fearfulWalkDown);
			characterSpeak(gameInfo.characters["Princess Peach"].sprite, 1, "left");
		}
		
		// Toad stops and turns left to face peach
		if (gameInfo.sceneTime == 790) {
			gameInfo.characters["Toad"].sprite.vy = 0;
			gameInfo.characters["Toad"].sprite.playAnimation(gameInfo.characters["Toad"].sprite.states.flapLeft);
			characterSpeak(gameInfo.characters["Toad"].sprite, 5, "right");
		}
		
		// Peach responds to Toad
		if (gameInfo.sceneTime == 1405) {
			gameInfo.characters["Princess Peach"].sprite.playAnimation(gameInfo.characters["Princess Peach"].sprite.states.talkRight);
			characterSpeak(gameInfo.characters["Princess Peach"].sprite, 5, "left");
		}
		
		// Toad wonders how gardening will help
		if (gameInfo.sceneTime == 1865) {
			characterSpeak(gameInfo.characters["Toad"].sprite, 1, "right");
		}
		
		// Peach moves to the left before calling for Monty
		if (gameInfo.sceneTime == 2005) {
			gameInfo.characters["Princess Peach"].sprite.vx = -0.5;
			gameInfo.characters["Princess Peach"].sprite.playAnimation(gameInfo.characters["Princess Peach"].sprite.states.walkLeft);
		}
		
		// Toad follows, moving to the left
		if (gameInfo.sceneTime == 2100) {
			gameInfo.characters["Toad"].sprite.vx = -0.5;
			gameInfo.characters["Toad"].sprite.playAnimation(gameInfo.characters["Toad"].sprite.states.walkLeft);
		}
		
		// Peach stops, turns down, and calls for Monty
		if (gameInfo.sceneTime == 2100) {
			gameInfo.characters["Princess Peach"].sprite.vx = 0;
			gameInfo.characters["Princess Peach"].sprite.playAnimation(gameInfo.characters["Princess Peach"].sprite.states.idleleftdown);
			characterSpeak(gameInfo.characters["Princess Peach"].sprite, 4, "left");
		}
		
		// Toad stops near Peach
		if (gameInfo.sceneTime == 2350) {
			gameInfo.characters["Toad"].sprite.vx = 0;
			gameInfo.characters["Toad"].sprite.show(16);
		}
		
		// Monty arrives
		if (gameInfo.sceneTime == 2660) {
			gameInfo.characters["Monty"].sprite.loop = false;
			gameInfo.characters["Monty"].sprite.playAnimation(gameInfo.characters["Monty"].sprite.states.digupleft);
		}
		
		// Monty replies
		if (gameInfo.sceneTime == 2800) {
			characterSpeak(gameInfo.characters["Monty"].sprite, 2, "left");
		}
		
		// Peach replies
		if (gameInfo.sceneTime == 3060) {
			gameInfo.characters["Princess Peach"].sprite.playAnimation(gameInfo.characters["Princess Peach"].sprite.states.talk2leftdown);
			characterSpeak(gameInfo.characters["Princess Peach"].sprite, 4, "left");
		}
		
		// Monty replies
		if (gameInfo.sceneTime == 3560) {
			gameInfo.characters["Princess Peach"].sprite.playAnimation(gameInfo.characters["Princess Peach"].sprite.states.idleleftdown);
			characterSpeak(gameInfo.characters["Monty"].sprite, 2, "left");
		}
		
		// Monty leaves
		if (gameInfo.sceneTime == 3820) {
			gameInfo.characters["Monty"].sprite.playAnimation(gameInfo.characters["Monty"].sprite.states.departupleft);
		}
		
		// Toad is jubilant about the plan
		if (gameInfo.sceneTime == 4045) {
			gameInfo.characters["Toad"].sprite.playAnimation(gameInfo.characters["Toad"].sprite.states.fronttalkhappy);
			characterSpeak(gameInfo.characters["Toad"].sprite, 2, "right");
		}
		
		// Peach replies
		if (gameInfo.sceneTime == 4305) {
			gameInfo.characters["Princess Peach"].sprite.playAnimation(gameInfo.characters["Princess Peach"].sprite.states.talkRight2);
			characterSpeak(gameInfo.characters["Princess Peach"].sprite, 3, "left");
		}
	
		// End of the scene
		if (gameInfo.sceneTime == 4685) {
			gameInfo.lastSceneCompleted = 1;
			// Store the scene completion in the user's browser local storage
			localStorage.setItem('Scene Completed', 1);
			changeScenes(gameInfo.transitionVisible, gameInfo.transitionActivate, gameInfo.levelSelectGroup, gameInfo.levelSelectInteractive, function() {
					game.state = levelSelect;
				});
		}
	}
	
	if (gameInfo.currentScene == "Sorceress") {
		if (gameInfo.sceneTime == 1) {
			gameInfo.lastSceneCompleted = 2;
			// Store the scene completion in the user's browser local storage
			localStorage.setItem('Scene Completed', 2);
			changeScenes(gameInfo.transitionVisible, gameInfo.transitionActivate, gameInfo.levelSelectGroup, gameInfo.levelSelectInteractive, function() {
					game.state = levelSelect;
				});
		}
	}
	
	if (gameInfo.currentScene == "Engineer") {
		if (gameInfo.sceneTime == 1) {
			gameInfo.lastSceneCompleted = 3;
			// Store the scene completion in the user's browser local storage
			localStorage.setItem('Scene Completed', 3);
			changeScenes(gameInfo.transitionVisible, gameInfo.transitionActivate, gameInfo.levelSelectGroup, gameInfo.levelSelectInteractive, function() {
					game.state = levelSelect;
				});
		}
	}
	
	if (gameInfo.currentScene == "Victory") {
		
		// Peach begins to speak
		if (gameInfo.sceneTime == 30) {
			
		}
		
		
		if (gameInfo.sceneTime == 3000) {
			gameInfo.lastSceneCompleted = 4;
			// Store the scene completion in the user's browser local storage
			localStorage.setItem('Scene Completed', 4);
			changeScenes(gameInfo.transitionVisible, gameInfo.transitionActivate, gameInfo.levelSelectGroup, gameInfo.levelSelectInteractive, function() {
					game.state = levelSelect;
				});
		}
	}
	
	for (let character of gameInfo.currentCharacters) {
		
		game.move(character);
		
		if (character.speakNow > 0 && (character.vx || character.vy)) {
			if (character.speechRight.visible == true) {
				character.speechRight.setPosition(character.x - character.offsets[0], character.y - character.offsets[1]);
			} else if (character.speechLeft.visible == true) {
				character.speechLeft.setPosition(character.x - character.offsets[2], character.y - character.offsets[3]);
			}
		}
		
		if (character.speakNow > 0 && (character.speakNow) % 120 == 0) {
			character.speechRight.children[1].text = character.lines[character.lastLineSpoken];
			character.speechLeft.children[1].text = character.lines[character.lastLineSpoken];
			character.lastLineSpoken += 1;
		}
		character.speakNow -= 1;
		if (character.speakNow == 0) {
			character.speechRight.visible = false;
			character.speechLeft.visible = false;
		}
	}
	
	gameInfo.sceneTime += 1;
}

//***********************************************
function initLevel(name) {
	// Grab the level info from gameInfo
	let levelInfo = gameInfo.levels[name];
	// Reset the values associated with a level
	gameInfo.currentLevel = levelInfo;
	gameInfo.currentLevelTime = 0;
	// Adding the info and sprite for the currency
	gameInfo.currentLevelCash = levelInfo.startCash;
	gameInfo.currentLevelLives = 15;
	gameInfo.currentLevelWave = -1;
	gameInfo.currentLevelWaveSegment = 0;
	gameInfo.currentLevelWaveDone = false;
	gameInfo.currentLevelAllSpawned = false;
	gameInfo.currentLevelEnemies = [];
	gameInfo.currentLevelTowers = [];
	gameInfo.currentLevelProjectiles = [];
	gameInfo.currentLevelExplosions = [];
	gameInfo.currentLevelRunning = true;
	gameInfo.currentLevelTowerSelected = false;
	// Display the background sprite
	gameInfo.currentLevelBackground = levelInfo.background;
	gameInfo.currentLevelMusic = game.sound(levelInfo.music);
	gameInfo.currentLevelMusic.loop = true;
	gameInfo.currentLevelBuildSound = game.sound("resources/sounds/Powerup.wav");
	gameInfo.currentLevelWinSound = game.sound(levelInfo.winSound);
	gameInfo.currentLevelLoseSound = game.sound(levelInfo.loseSound);
	gameInfo.currentLevelBackground.visible = true;
	//gameInfo.currentLevelMusic.playFrom(0);
}

function cleanupLevel() {
	game.pointer.press = null;
	game.wait(1000, () => {
		for (let enemy of gameInfo.currentLevelEnemies) {
			game.remove(enemy.healthbarGroup);
			if ("healCircle" in enemy) {
				game.remove(enemy.healCircle);
			}
			game.remove(enemy);
		}
		for (let tower of gameInfo.currentLevelTowers) {
			tower.interact = false;
			game.remove(tower.rangeCircle);
			game.remove(tower);
		}
		for (let projectile of gameInfo.currentLevelProjectiles) {
			game.remove(projectile);
		}
		for (let explosion of gameInfo.currentLevelExplosions) {
			game.remove(explosion);
		}
		if (gameInfo.currentLevelBuilding) {
			gameInfo.currentLevelBuilding = 0;
			game.remove(gameInfo.currentLevelBuildingPreview);
			game.remove(gameInfo.currentLevelBuildingPreviewRange);
		}
		gameInfo.currentLevelBackground.visible = false;
	});
	
	gameInfo.currentLevelMusic.pause();
	changeScenes(gameInfo.levelInterfaceGroup, gameInfo.levelInterfaceInteractive, gameInfo.levelSelectGroup, gameInfo.levelSelectInteractive, function(){
		game.state = levelSelect;
	});
}

function spawnEnemy(type) {
	// Grab the enemy info from gameInfo
	let enemyInfo = gameInfo.enemies[type];
	// Initialize a sprite with all the enemy's animation panes
	let enemy = game.sprite(enemyInfo.animations["fullTexture"]);
	enemy.states = {};
	// For each animation to set
	for (let animation of enemyInfo.animations) {
		// Specify its name and the frames it uses
		enemy.states[animation.name] = animation.frameSpan;
	}
	enemy.name = enemyInfo.name;
	// Set enemy health
	enemy.maxHealth = enemyInfo.health;
	enemy.currentHealth = enemyInfo.health;
	// Set enemy armor and resistances
	enemy.armor = enemyInfo.armor;
	enemy.fireRes = enemyInfo.fireRes;
	enemy.magicRes = enemyInfo.magicRes;
	//Set the reward
	enemy.reward = enemyInfo.reward;
	enemy.spawnTime = enemyInfo.spawnTime;
	// Attach a healthbar
	let outerHealth = game.rectangle(25, 5, "black");
	let innerHealth = game.rectangle(25, 5, "yellowgreen");
	outerHealth.anchor.x = 0.5;
	outerHealth.anchor.y = 0.5;
	innerHealth.anchor.x = 0;
	innerHealth.anchor.y = 0.5;
	enemy.healthbarGroup = game.group(outerHealth, innerHealth);
	enemy.healthbarGroup.visible = false;
	enemy.speed = enemyInfo.speed;
	enemy.traits = enemyInfo.traits;
	// If the enemy has a radius trait, the hitbox sprite for that trait is added
	if ("healRadius" in enemy.traits) {
		enemy.healCircle = game.circle(enemy.traits.healRadius[0] * 2, "yellow");
		enemy.healCircle.visible = false;
		enemy.healCircle.alpha = 0.3;
		enemy.healCircle.anchor.x = 0.5;
		enemy.healCircle.anchor.y = 0.5;
		enemy.healCircle.setPosition(enemy.x, enemy.y - 10);
	}
	// Return the enemy
	return enemy;
}

function enemyCurve(enemy, direction, animation) {
	//game.followCurve(enemy, [[enemy.x, enemy.y],[enemy.x - 100, enemy.y],[enemy.x - 100, enemy.y + 100],[enemy.x - 100, enemy.y + 100]], 120);
	let offsetX = 0;
	let offsetY = 0;
	let changeX = 5;
	let changeY = 5;
	let curveControl = [];
	let travelTime = 25 * (1/enemy.speed);
	
	if (enemy.pathing == "middle") {
		offsetX = 35;
		offsetY = 35;
		travelTime = 50 * (1/enemy.speed);
	}
	if (enemy.pathing == "outer") {
		offsetX = 70;
		offsetY = 70;
		travelTime = 75 * (1/enemy.speed);
	}
	//if (direction == "rightup" || direction == "rightdown" || direction == "upleft" || direction == "downleft") {
	if (direction == "leftup" || direction == "leftdown" || direction == "upleft" || direction == "downleft") {
		changeX *= -1;
		offsetX *= -1;
	}
	//if (direction == "rightup" || direction == "leftup" || direction == "upleft" || direction == "upright") {
	if (direction == "rightup" || direction == "leftup" || direction == "upleft" || direction == "upright") {
		changeY *= -1;
		offsetY *= -1;
	}
	changeX += offsetX;
	changeY += offsetY;
	
	if (direction == "leftup" || direction == "leftdown" || direction == "rightup" || direction == "rightdown") {
		curveControl.push(enemy.x + changeX);
		curveControl.push(enemy.y);
	}
	else {
		curveControl.push(enemy.x);
		curveControl.push(enemy.y + changeY);
	}
	game.wait((travelTime), () => {
		enemy.playAnimation(animation);
	});
	game.followCurve(enemy, [[enemy.x, enemy.y],curveControl,[enemy.x + changeX, enemy.y + changeY],[enemy.x + changeX, enemy.y + changeY]], travelTime);
	// Depending on the turn that took place and the next turn that will take place, inner and outer designations may need to be switched
	if (enemy.pathing == "inner" || enemy.pathing == "outer") {
		// If there is a next turn
		if (gameInfo.currentLevel.turns[enemy.turnsTaken + 1]) {
			// If the next turn will be moving in a positive x or y direction
			if (gameInfo.currentLevel.turns[enemy.turnsTaken + 1][1] == 1) {
				//if (direction == "rightdown" || direction == "rightdown" || direction == "upright" || direction == "upleft") {
				if (direction == "rightup" || direction == "rightdown" || direction == "downleft" || direction == "downright") { 
					if (enemy.pathing == "inner") {
						enemy.pathing = "outer";
					}
					else if(enemy.pathing == "outer") {
						enemy.pathing = "inner";
					}
				}				
			}
			// If the next turn will be moving in a negative x or y direction
			else {
				//if (direction == "upright" || direction == "upleft" || direction == "rightup" || direction == "rightdown") {
				if (direction == "upleft" || direction == "upright" || direction == "leftup" || direction == "leftdown") { 
					if (enemy.pathing == "inner") {
						enemy.pathing = "outer";
					}
					else {
						enemy.pathing = "inner";
					}
				}				
			}
		}
	}
}

function enemyDamage(enemy, projectile, directHit) {
	if (projectile.disrupted) {
		return;
	}
	
	// The damage is modified depending on the enemy's armor and resistances
	let modifiedDamage = projectile.damage;
	// Towers with the armorbreaker trait deal damage based on the hit enemy's armor
	if ("Armorbreaker" in projectile.traits) {
		modifiedDamage = enemy.armor * projectile.traits.Armorbreaker;
	}
	if (projectile.type == "Fire") {
		modifiedDamage -= enemy.armor;
		modifiedDamage *= ((100 - enemy.fireRes)/100); 
	}
	else if (projectile.type == "Physical") {
		modifiedDamage -= enemy.armor;
	}
	else if (projectile.type == "Magic") {
		modifiedDamage *= ((100 - enemy.magicRes)/100);
	}
	// If the damage is modified to be less than 1, the enemy must still take 1 damage
	if (modifiedDamage < 1) {
		modifiedDamage = 1;	
	}
	enemy.currentHealth -= modifiedDamage;
	
	// If the enemy has an enrage trait (response to damage)
	if ("enrageSpeed" in enemy.traits && !enemy.disrupted) {
		enemy.speed *= enemy.traits.enrageSpeed;
		if (enemy.vx) {
			if (enemy.vx > 0) {
				enemy.vx = enemy.speed;
			}
			else {
				enemy.vx = enemy.speed * -1;
			}
		}
		else if (enemy.vy) {
			if (enemy.vy > 0) {
				enemy.vy = enemy.speed;
			}
			else {
				enemy.vy = enemy.speed * -1;
			}
		}
	}
	// If the projectile applies a slowdown effect
	if ("slowdown" in projectile.traits) {
		enemy.speed *= (projectile.traits.slowdown[0]/100);
		if (enemy.vx) {
			if (enemy.vx > 0) {
				enemy.vx = enemy.speed;
			}
			else {
				enemy.vx = enemy.speed * -1;
			}
		}
		else if (enemy.vy) {
			if (enemy.vy > 0) {
				enemy.vy = enemy.speed;
			}
			else {
				enemy.vy = enemy.speed * -1;
			}
		}
		game.wait((1000 * projectile.traits.slowdown[1]), () => {
			enemy.speed *= (100/projectile.traits.slowdown[0]);
			if (enemy.vx) {
				if (enemy.vx > 0) {
					enemy.vx = enemy.speed;
				}
				else {
					enemy.vx = enemy.speed * -1;
				}
			}
			else if (enemy.vy) {
				if (enemy.vy > 0) {
					enemy.vy = enemy.speed;
				}
				else {
					enemy.vy = enemy.speed * -1;
				}
			}
		});
	}
	// If the projectile can apply a burning status effect
	if ("Igniting" in projectile.traits && (!("burning" in enemy) || !(enemy.burning))) {
		// If the tower passes its ignition roll
		if (game.randomInt(1, 100) <= projectile.traits.Igniting[0]) {
			// And the enemy fails its chance to save
			if (game.randomInt(1, 100) >= enemy.fireRes) {
				// Then the burning status is applied
				enemy.burning = projectile.traits.Igniting[2];
				enemy.burningDamage = projectile.traits.Igniting[1];
				enemy.healthbarGroup.children[0].strokeStyle = "orange";
				enemy.healthbarGroup.children[0].lineWidth = 2;
			}
		}
	}
	
	// If the projectile can apply an antimagic/disruption effect
	if ("Disrupting" in projectile.traits && (!("disrupted" in enemy) || !(enemy.disrupted))) {
		// If the tower passes its disruption roll
		if (game.randomInt(1, 100) <= projectile.traits.Disrupting[0]) {
			// And the enemy fails its chance to save
			if (game.randomInt(1, 100) >= enemy.magicRes) {
				// Then the disrupted status is applied
				enemy.disrupted = projectile.traits.Disrupting[1];
				if (enemy.tint == 0xFFFFFF) {
					enemy.tint == 0x0000FF;
				}
			}
		} 
	}
	
	// Enemies are invincible while flashing red after taking damage
	enemy.tint = 0xFF0000;
	enemy.invincible = true;
	game.wait(300, () => {
		if("disrupted" in enemy && enemy.disrupted) {
			enemy.tint = 0x0000FF;
		}
		else {
			enemy.tint = 0xFFFFFF;
		}
		game.wait(300, () => {
			enemy.tint = 0xFF0000;
			game.wait(300, () => {
				if("disrupted" in enemy && enemy.disrupted) {
					enemy.tint = 0x0000FF;
				}
				else {
					enemy.tint = 0xFFFFFF;
				}
				enemy.invincible = false;
			});
		});
	});
	// Update the enemy health bar, which becomes visible after any damage is taken
	let newWidth = (((enemy.currentHealth / enemy.maxHealth) * 100) / 4);
	if (newWidth < 0) {
		newWidth = 0;
	}
	enemy.healthbarGroup.children[1].width = newWidth;
	//enemy.healthbarGroup.children[1].anchor.y = 0;
	enemy.healthbarGroup.visible = true;
	// And the projectile is marked as to-be-destroyed unless a trait interferes
	
	// If the projectile struck an antiprojectile enemy, it is removed regardless of its special properties
	if ("antiProjectile" in enemy.traits && !enemy.disrupted) {
		projectile.disrupted = true;
	}
	else if (!("piercing" in projectile.traits || "antiProjectile" in enemy.traits) && directHit) {
		projectile.finished = 1;
	}
	else if ("piercing" in projectile.traits && !("antiProjectile" in enemy.traits)) {
		// Projectiles with the piercing trait can hit multiple enemies before being finished
		projectile.traits.piercing -= 1;
		if(projectile.traits.piercing == 0) {
			projectile.finished = 1;
		}
	}
}

function spawnTower(type) {
	// Grab the tower info from gameInfo
	let towerInfo = gameInfo.towers[type];
	// Initialize a sprite with all the tower's animation panes
	let tower = game.sprite(towerInfo.animations["fullTexture"]);
	tower.states = {};
	// For each animation to set
	for (let animation of towerInfo.animations) {
		// Specify its name and the frames it uses
		tower.states[animation.name] = animation.frameSpan;
	}
	tower.name = towerInfo.name;
	// Set tower damage
	tower.damage = towerInfo.damage;
	// Set tower's bullet cooldown
	tower.cooldown = towerInfo.bulletCooldown;
	// Set the tower attack sound
	tower.attSound = game.sound(towerInfo.attackSound);
	tower.attSound.volume = towerInfo.attackSoundVolume;
	// Set the tower's anchor point to the center of the sprite
	tower.anchor.x = 0.5;
	tower.anchor.y = 0.5;
	// Set the tower price
	tower.price = towerInfo.price;
	// Return the tower
	return tower;
}

function buildTower() {
	if(isValidBuild()){
		var tower = spawnTower(gameInfo.currentLevelBuildingTower);
		tower.setPosition(game.pointer.x, game.pointer.y);
		gameInfo.currentLevelCash -= tower.price;
		tower.playAnimation(tower.states.build);
		gameInfo.currentLevelBuildSound.play();
		// Wait to play the idle animation until build animation is finished
		game.wait((1000 * (gameInfo.towers[gameInfo.currentLevelBuildingTower].buildAnimationLength / 12)), () => {
			tower.playAnimation(tower.states.idle);
			gameInfo.currentLevelTowers.push(tower);
		});
		gameInfo.currentLevelBuilding = false;
		gameInfo.currentLevelBuildingTower = null;
		game.remove(gameInfo.currentLevelBuildingPreview);
		gameInfo.currentLevelBuildingPreviewRange.visible = false;
		gameInfo.currentLevelBuildingPreviewRange.setPosition(tower.x, tower.y);
		tower.rangeCircle = gameInfo.currentLevelBuildingPreviewRange;
		game.pointer.press = null;
		// Hovering over a tower should display its target range circle
		tower.interact = true;
		tower.over = function() {
			if (!gameInfo.currentLevelBuilding) {
				tower.rangeCircle.visible = true;
			}
		};
		tower.out = function() {
			if (!gameInfo.currentLevelBuilding) {
				tower.rangeCircle.visible = false;
			}
		};
	}
}

// Returns true if the current building preview sprite is positioned so it does not collide with any
// no-build level region or another tower and is within the game boundary; returns false otherwise
function isValidBuild() {
	let result = true;
	if (gameInfo.currentLevelCash < gameInfo.currentLevelBuildingPreview.price) {
		result = false;
	}
	for (let tower of gameInfo.currentLevelTowers) {
		if (game.hitTestRectangle(gameInfo.currentLevelBuildingPreview, tower)) {
			result = false;
		}
	}
	for (let noBuildZone of gameInfo.currentLevel.noBuildRegions) {
		if (game.hitTestRectangle(gameInfo.currentLevelBuildingPreview, noBuildZone)) {
			result = false;
		}
	}
	let collision = game.contain(gameInfo.currentLevelBuildingPreview, game.stage);
	if (collision) {
		result= false;
	}
	return result;
}

function towerTarget(tower, towerInfo, sureshot) {
	// To be a valid target, enemy must be visible and in range of the tower
	let validTargets = gameInfo.currentLevelEnemies.filter((enemy) => {
		// Check enemy is in tower targetting range
		if (!game.hitTestRectangle(tower.rangeCircle, enemy) && !sureshot) {
			return false;
		}
		// Check enemy is visible on the screen (enemies spawn offscreen)
		if (enemy.x < 0 || enemy.x > 800 || enemy.y < 0 || enemy.y > 800) {
			return false;
		}
		// Check enemy is not currently invincible (which also means non-targetable)
		if ("invincible" in enemy && enemy.invincible) {
			return false;
		}
		return true;
	});

	// Now we have an array of valid targets; the tower will target the closest one
	if (validTargets.length != 0) {
		tower.closestEnemyDistance = Infinity;
		for (let target of validTargets) {
			if (game.distance(tower, target) < tower.closestEnemyDistance) {
				tower.closestEnemyDistance = game.distance(tower, target);
				tower.closestEnemy = target;
			}
		}
	} else {
		// If no valid targets were found, the tower can try again next tick
		tower.cooldown = 1;
		return;
	}
		
	// If this point is reached then a target has been chosen and stored on the tower object
	// The tower will turn to face its target (left or right); towers face left by default
	if (tower.x > tower.closestEnemy.x) {
	    tower.scale.x = 1;
	}
	if (tower.x < tower.closestEnemy.x) {
	    tower.scale.x = -1;
	}
	
	return;
}	
	
function towerShoot(tower, towerInfo) {	
	// Towers with the chaotic trait can shoot multiple times
	if ("Chaotic" in towerInfo.traits) {
		tower.attSound.play();
		for (let i = game.randomInt(1, towerInfo.traits.Chaotic); i < 4; i++) {
			game.shoot(tower, game.randomInt(1, 360), towerInfo.bulletX, towerInfo.bulletY, game.stage, (towerInfo.bulletSpeed / game.randomFloat(0.5, 2)), gameInfo.currentLevelProjectiles,
				() => game.sprite(towerInfo.projectileSource)
			);
			let projectile = gameInfo.currentLevelProjectiles[gameInfo.currentLevelProjectiles.length - 1];
			projectile.scale.x = (game.randomInt(1, 5));
			projectile.scale.y = projectile.scale.x;
			// Set the projectile's damage value
			projectile.damage = towerInfo.bulletDamage * projectile.scale.x;
			projectile.type = towerInfo.damageType;
			projectile.finished = 0;
			// Projectiles carry a copy of their tower's traits
			projectile.traits = towerInfo.traits;
		}
		tower.cooldown = towerInfo.bulletCooldown;
		tower.closestEnemy = null;
		game.wait((1000 * (towerInfo.shotWinddown / 12)), () => {
	    	if (gameInfo.currentLevelRunning) {
	        	tower.playAnimation(tower.states.idle);
	    	}
		});
		
	}
	else {
		tower.targetAngle = game.angle(tower, tower.closestEnemy);
		game.shoot(tower, tower.targetAngle, towerInfo.bulletX, towerInfo.bulletY, game.stage, towerInfo.bulletSpeed, gameInfo.currentLevelProjectiles,
			() => game.sprite(towerInfo.projectileSource)
		);
		// Rotate the newest projectile towards the last target
		let projectile = gameInfo.currentLevelProjectiles[gameInfo.currentLevelProjectiles.length - 1];
		projectile.anchor.x = 0.5;
		projectile.anchor.y = 0.5;
		projectile.rotation = game.angle(projectile, tower.closestEnemy);
		// Set the projectile's damage value
		projectile.damage = towerInfo.bulletDamage;
		projectile.type = towerInfo.damageType;
		projectile.finished = 0;
		tower.attSound.play();
		// Reset the shooting cooldown
		tower.cooldown = towerInfo.bulletCooldown;
		tower.closestEnemy = null;
		game.wait((1000 * (towerInfo.shotWinddown / 12)), () => {
	    	if (gameInfo.currentLevelRunning) {
	        	tower.playAnimation(tower.states.idle);
	    	}
		});
		// Projectiles carry a copy of their tower's traits
		projectile.traits = towerInfo.traits;
	}
}

function characterSpeak(character, length, direction) {
	character.speakNow = length;
	character.speakNow *= 120;
	if (direction == "right") {
		character.speechRight.setPosition(character.x - character.offsets[0], character.y - character.offsets[1]);
		game.wait(30, () => {
			character.speechRight.visible = true;
		});
	} else if (direction == "left") {
		character.speechLeft.setPosition(character.x - character.offsets[2], character.y - character.offsets[3]);
		game.wait(30, () => {
			character.speechLeft.visible = true;
		});
	}
}

function toadsworthTip() {
	let toadsworth = gameInfo.characters["Toadsworth"].sprite;
	toadsworth.speechRight.children[1].text = toadsworth.tips[toadsworth.tipIndex];
	if (toadsworth.speechRight.visible == false) {
		toadsworth.speechRight.visible = true;
	}
	toadsworth.timeout = 600;
	toadsworth.tipIndex += 1;
	if (toadsworth.tipIndex == toadsworth.maxTipIndex + 1) {
		toadsworth.tipIndex = 0;
	}
}

function changeScenes(toInvisible, toDeactivate, toVisible, toActivate, activation) {
	// If it is time for a cutscene, the scene change is rerouted to play the cutscene
	// Triggers for cutscenes are hardcoded here
	
	// If the player has not yet viewed the opening cutscene
	if (+gameInfo.lastSceneCompleted == 0) {
		toVisible = gameInfo.sceneSprites["Gardener"];
		toActivate = [];
		gameInfo.currentCharacters = [gameInfo.characters["Princess Peach"].sprite, gameInfo.characters["Toad"].sprite, gameInfo.characters["Monty"].sprite];
		gameInfo.sceneTime = 0;
		activation = function() {
			gameInfo.currentScene = "Gardener";
			game.state = cutscene;
		};
		// Starting positions/animations of cutscene characters are processed here so the characters are in place before the transition curtain rises
		gameInfo.characters["Princess Peach"].sprite.setPosition(415, 352);
		gameInfo.characters["Princess Peach"].sprite.playAnimation(gameInfo.characters["Princess Peach"].sprite.states.sitright);
		gameInfo.characters["Toad"].sprite.setPosition(390, -50);
		gameInfo.characters["Toad"].sprite.playAnimation(gameInfo.characters["Toad"].sprite.states.fearfulWalkDown);
		gameInfo.characters["Monty"].sprite.setPosition(334, 472);
		gameInfo.characters["Monty"].sprite.show(3);
	}
	
	// If it is time to view the second cutscene, after the first level is completed once
	if (+gameInfo.lastLevelCompleted == 1 && gameInfo.lastSceneCompleted == 1) {
		// This cutscene has been cancelled in favor of spending development time on other priorities
		gameInfo.lastSceneCompleted = 2;
		localStorage.setItem("Completed Scene", 2);
		
	//	gameInfo.sceneSprites["Gardener"].removeChild(gameInfo.characters["Princess Peach"].sprite);
	//	gameInfo.sceneSprites["Gardener"].removeChild(gameInfo.characters["Toad"].sprite);
	//	gameInfo.sceneSprites["Sorceress"].addChild(gameInfo.characters["Princess Peach"].sprite);
	//	gameInfo.sceneSprites["Sorceress"].addChild(gameInfo.characters["Toad"].sprite);
	//	toVisible = gameInfo.sceneSprites["Sorceress"];
	//	toActivate = [];
	//	gameInfo.currentCharacters = [gameInfo.characters["Princess Peach"].sprite, gameInfo.characters["Toad"].sprite];
	//	gameInfo.sceneTime = 0;
	//	activation = function () {
	//		gameInfo.currentScene = "Sorceress";
	//		game.state = cutscene;
	//	};
	//	// Starting positions/animations of cutscene characters
	//	gameInfo.characters["Princess Peach"].sprite.setPosition(400, 300);
	//	gameInfo.characters["Princess Peach"].sprite.playAnimation(gameInfo.characters["Princess Peach"].sprite.states.walkLeft);
	}
	
	// If it is time to view the third cutscene, after the second level is completed once
	if (+gameInfo.lastLevelCompleted == 2 && +gameInfo.lastSceneCompleted == 2) {
		// This cutscene has been cancelled in favor of spending development time on other priorities
		gameInfo.lastSceneCompleted = 3;
		localStorage.setItem("Completed Scene", 3);
		
	//	if (gameInfo.characters["Princess Peach"].sprite in gameInfo.sceneSprites["Sorceress"]) {
	//		gameInfo.sceneSprites["Sorceress"].removeChild(gameInfo.characters["Princess Peach"].sprite);
	//		gameInfo.sceneSprites["Sorceress"].removeChild(gameInfo.characters["Toad"].sprite);
	//	}
	//	else if (gameInfo.characters["Princess Peach"].sprite in gameInfo.sceneSprites["Gardener"]) {
	//		gameInfo.sceneSprites["Gardener"].removeChild(gameInfo.characters["Princess Peach"].sprite);
	//		gameInfo.sceneSprites["Gardener"].removeChild(gameInfo.characters["Toad"].sprite);
	//	}
	//	gameInfo.sceneSprites["Engineer"].addChild(gameInfo.characters["Princess Peach"].sprite);
	//	gameInfo.sceneSprites["Engineer"].addChild(gameInfo.characters["Toad"].sprite);
	//	toVisible = gameInfo.sceneSprites["Engineer"];
	//	toActivate = [];
	//	gameInfo.currentCharacters = [gameInfo.characters["Princess Peach"].sprite, gameInfo.characters["Toad"].sprite];
	//	gameInfo.sceneTime = 0;
	//	activation = function () {
	//		gameInfo.currentScene = "Engineer";
	//		game.state = cutscene;
	//	};
	//	// Starting positions/animations of cutscene characters
	//	gameInfo.characters["Princess Peach"].sprite.setPosition(400, 300);
	//	gameInfo.characters["Princess Peach"].sprite.playAnimation(gameInfo.characters["Princess Peach"].sprite.states.walkLeft);
	}
	
	// If it is time to view the fourth cutscene, after the third level is completed once
	if (+gameInfo.lastLevelCompleted == 3 && +gameInfo.lastSceneCompleted == 3) {
		// This cutscene has been cancelled in favor of spending development time on other priorities
		gameInfo.lastSceneCompleted = 4;
		localStorage.setItem("Completed Scene", 4);
		
	//	if (gameInfo.characters["Princess Peach"].sprite in gameInfo.sceneSprites["Engineer"]) {
	//		gameInfo.sceneSprites["Engineer"].removeChild(gameInfo.characters["Princess Peach"].sprite);
	//		gameInfo.sceneSprites["Engineer"].removeChild(gameInfo.characters["Toad"].sprite);
	//	}
	//	if (gameInfo.characters["Princess Peach"].sprite in gameInfo.sceneSprites["Sorceress"]) {
	//		gameInfo.sceneSprites["Sorceress"].removeChild(gameInfo.characters["Princess Peach"].sprite);
	//		gameInfo.sceneSprites["Sorceress"].removeChild(gameInfo.characters["Toad"].sprite);
	//	}
	//	else if (gameInfo.characters["Princess Peach"].sprite in gameInfo.sceneSprites["Gardener"]) {
	//		gameInfo.sceneSprites["Gardener"].removeChild(gameInfo.characters["Princess Peach"].sprite);
	//		gameInfo.sceneSprites["Gardener"].removeChild(gameInfo.characters["Toad"].sprite);
	//	}
	//	gameInfo.sceneSprites["Victory"].addChild(gameInfo.characters["Princess Peach"].sprite);
	//	toVisible = gameInfo.sceneSprites["Victory"];
	//	toActivate = [];
	//	gameInfo.currentCharacters = [gameInfo.characters["Princess Peach"].sprite];
	//	gameInfo.sceneTime = 0;
	//	activation = function () {
	//		gameInfo.currentScene = "Victory";
	//		game.state = cutscene;
	//	};
	//	// Starting positions/animations of cutscene characters
	//	gameInfo.characters["Princess Peach"].sprite.setPosition(366, 349);
	//	gameInfo.characters["Princess Peach"].sprite.playAnimation(gameInfo.characters["Princess Peach"].sprite.states.sitright);
	}
	
	
	for (let sprite of toDeactivate) {
		sprite.interact = false;
	}
	
	gameInfo.ascendCounter = 40;
	gameInfo.curtain = game.sprite("resources/interface/sceneCurtain.png");
	gameInfo.curtain.anchor.x = 0;
	gameInfo.curtain.anchor.y = 0;
	gameInfo.curtain.setPosition(0, -915);
	gameInfo.curtain.vy = 15;
	gameInfo.curtain.descended = false;
	
	gameInfo.transitionInvisible = toInvisible;
	gameInfo.transitionVisible = toVisible;
	gameInfo.transitionActivate = toActivate;
	gameInfo.transitionActivation = activation;
	
	game.state = transition;
}

function nextInfoPane() {
	gameInfo.currentInfoPane2.interact = false;
	let lastIndex = gameInfo.currentInfoPane.index;
	if (lastIndex + 1 < gameInfo.currentUnlocks.length ) {
		game.remove(gameInfo.currentInfoPane);
		game.remove(gameInfo.currentInfoPane2);
		game.remove(gameInfo.currentInfoText);
		game.remove(gameInfo.currentInfoText2);
		createInfoPane(gameInfo.currentUnlocks[lastIndex + 1]);
		gameInfo.currentInfoPane.index = lastIndex + 1;
		gameInfo.currentInfoPane2.interact = true;
		gameInfo.currentInfoPane2.release = nextInfoPane;
	}
	else {
		if (gameInfo.currentInfoPane) {
			game.remove(gameInfo.currentInfoPane);
			game.remove(gameInfo.currentInfoPane2);
			game.remove(gameInfo.currentInfoText);
			game.remove(gameInfo.currentInfoText2);
			game.resume();
		}
	}
}

function createInfoPane(tower) {
	tower = gameInfo.towers[tower];
	let paneBackground = game.rectangle(400, 400, "tan", "black", 3);
	paneBackground.anchor.x = 0.5;
	paneBackground.anchor.y = 0;
	paneBackground.setPosition(400, 175);
	let descriptionText = new PIXI.Text("", {font: '20px Arial', fill: 'black', wordWrap: true, wordWrapWidth: 320});
	descriptionText.anchor.x = 0.5;
	descriptionText.anchor.y = 0;
	descriptionText.x = 400;
	descriptionText.y = 350;
	descriptionText.text = tower.description;
	let descriptionText2 = new PIXI.Text("", {font: '24px mariofont', fill: 'black', wordWrap: true, wordWrapWidth: 290, align: 'center'});
	descriptionText2.anchor.x = 0.5;
	descriptionText2.anchor.y = 0.5;
	descriptionText2.x = 400;
	descriptionText2.y = 225;
	descriptionText2.text = "Defender Unlocked: " + tower.name + "!";
	let portraitSprite = game.sprite(tower.buttonSource);
	portraitSprite.anchor.x = 0.5;
	portraitSprite.anchor.y = 0.5;
	portraitSprite.setPosition(400, 300);
	let infoGrouping = game.group(paneBackground, descriptionText, descriptionText2, portraitSprite);
	gameInfo.currentInfoPane = portraitSprite;
	gameInfo.currentInfoPane2 = paneBackground;
	gameInfo.currentInfoText = descriptionText;
	gameInfo.currentInfoText2 = descriptionText2;
}