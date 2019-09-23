class GameScene extends Phaser.Scene {
    player: Phaser.Physics.Arcade.Sprite;
    platforms;

    constructor() {
        super({
            key: 'GameScene'
        });
    }

    preload(): void {
        this.load.image('sky', '/assets/sky.png');
        this.load.image('ground', '/assets/platform.png');
        this.load.image('star', '/assets/star.png');
        this.load.image('bomb', '/assets/bomb.png');
        this.load.image('gameOver', '/assets/gameOver.png');
        this.load.image('pressF5', '/assets/pressF5.png');
        this.load.spritesheet('dude', '/assets/dude.png', {
            frameWidth: 32,
            frameHeight: 48
        });
    }

    create(): void {
        // set sky
        this.add.image(400, 300, 'sky');

        // set platforms
        this.platforms = this.physics.add.staticGroup();
        this.platforms
            .create(400, 568, 'ground')
            .setScale(2)
            .refreshBody();
        this.platforms.create(600, 400, 'ground');
        this.platforms.create(50, 250, 'ground');
        this.platforms.create(750, 220, 'ground');

        // set player
        this.player = this.physics.add.sprite(100, 450, 'dude');

        // add bounce property to the player
        this.player.setBounce(0.2);

        // keep player inside the scene
        this.player.setCollideWorldBounds(true);

        // collide player and platforms
        this.physics.add.collider(this.player, this.platforms);

        // set animations
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', {
                start: 0,
                end: 3
            }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [
                {
                    key: 'dude',
                    frame: 4
                }
            ],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', {
                start: 5,
                end: 8
            }),
            frameRate: 10,
            repeat: -1
        });

    }

    update(): void {
    }
}

export default GameScene;
