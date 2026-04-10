const COLORS = {
    0: "white",
    1: "black",
    2: "red",
    3: "green",
    4: "blue",
    5: "yellow",
    6: "purple",
    7: "cyan",
    8: "grey",
    9: "rgb(255, 83, 0)",
    10: "pink"
};

const CWS = {

    createSprite: (img, size = 20, x = 0, y = 0) => {
        let height = img.length*size;
        let width = img[0].length*size;
        return { img, size, x, y, width, height };
    },


    drawSprite: (sprite, canvas) => {
        let ctx = canvas.getContext("2d");

        for (let y = 0; y < sprite.img.length; y++) {
            for (let x = 0; x < sprite.img[y].length; x++) {
                let value = sprite.img[y][x];
                if(COLORS.hasOwnProperty(value)){
                    ctx.fillStyle = COLORS[value];
                    ctx.fillRect(
                        (x * sprite.size) + sprite.x,
                        (y * sprite.size) +  sprite.y,
                        sprite.size,
                        sprite.size
                    );
                }
        }
        }
    },

    drawSprites: (sprites, canvas) => {
        sprites.forEach(sprite => {
            CWS.drawSprite(sprite, canvas);
        });
    },

    moveSprite: (sprite, dx, dy) => {
        sprite.x += dx;
        sprite.y += dy;
    },

    clear: (canvas) => {
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    },

    isCollision: (a, b) => {
    return (
        a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.y + a.height > b.y
    );
    },

    isInCanvas: (sprite, canvas) => {
        return (
            sprite.x >= 0 &&
            sprite.y >= 0 &&
            sprite.x + sprite.width <= canvas.width &&
            sprite.y + sprite.height <= canvas.height
        );
    },
    setPosition: (sprite, x, y) => {
        sprite.x = x;
        sprite.y = y;
    },
    centerSprite: (sprite, canvas) => {
        sprite.x = canvas.width / 2 - sprite.width / 2;
        sprite.y = canvas.height / 2 - sprite.height / 2;
    },

    centerSpriteByX:(sprite, canvas)=>{
        sprite.x = canvas.width / 2 - sprite.width / 2;
    },

    centerSpriteByY: (sprite, canvas)=>{
        sprite.y = canvas.height / 2 - sprite.height / 2;
    },

    cloneSprite: (sprite, x, y, size) => {
        return {
            img: sprite.img,
            size,
            x,
            y,
            width: sprite.img[0].length * size,
            height: sprite.img.length * size
        };
    },

    followSprite: (enemy, player, speed = 1) => {
        if (enemy.x < player.x) enemy.x += speed;
        if (enemy.x > player.x) enemy.x -= speed;

        if (enemy.y < player.y) enemy.y += speed;
        if (enemy.y > player.y) enemy.y -= speed;
    },

    keepInCanvas: (sprite, canvas) => {

        if (sprite.x < 0) {
            sprite.x = 0;
        }

        if (sprite.y < 0) {
            sprite.y = 0;
        }

        if (sprite.x + sprite.width > canvas.width) {
            sprite.x = canvas.width - sprite.width;
        }

        if (sprite.y + sprite.height > canvas.height) {
            sprite.y = canvas.height - sprite.height;
        }

    },

    arrowControl: (sprite, speed = 5) => {

    document.addEventListener("click", (e)=>{
        if (e.key === "ArrowUp") sprite.y -= speed;
        if (e.key === "ArrowDown") sprite.y += speed;
        if (e.key === "ArrowLeft") sprite.x -= speed;
        if (e.key === "ArrowRight") sprite.x += speed;
    }) {

    }, 

    WASDControl: (sprite, speed = 5) => {

    document.addEventListener("click", (e)=>{
        if (e.key === "w") sprite.y -= speed;
        if (e.key === "s") sprite.y += speed;
        if (e.key === "a") sprite.x -= speed;
        if (e.key === "d") sprite.x += speed;
    }) 

    }, 

    spriteGalery: {
        rocket: [
            ['', '', '', '', '', '', 1, '', '', '', '', '', '' ],
            ['', '', '', '', '', 1, 2, 1, '', '', '', '', ''],
            ['', '', '', '', 1, 2, 2, 2, 1, '', '', '', ''],
            ['', '', '', '', 1, 2, 2, 2, 1, '', '', '', ''],
            ['', '', '', 1, 2, 2, 2, 2, 2, 1, '', '', ''],
            ['', '', '', 1, 1, 1, 1, 1, 1, 1, '', '', ''],
            ['', '', '', 1, 0, 0, 0, 0, 0, 1, '', '', ''],
            ['', '', '', 1, 0, 0, 0, 0, 0, 1, '', '', ''],
            ['', '', '', 1, 0, 0, 0, 0, 0, 1, '', '', ''],
            ['', '', '', 1, 0, 0, 0, 0, 0, 1, '', '', ''],
            ['', '', '', 1, 0, 0, 0, 0, 0, 1, '', '', ''],
            ['', '', '', 1, 0, 0, 0, 0, 0, 1, '', '', ''],
            ['', '', 1, 1, 0, 0, 0, 0, 0, 1, 1, '', ''],
            ['', 1, 2, 1, 0, 0, 0, 0, 0, 1, 2, 1, ''],
            [1, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 1],
            [1, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 1],
            [1, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 1],
            [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
            [1, 1, "", "", 1, 5, 5, 5, 1, "", "", 1, 1],
            ["", "", "", 1, 9, 5, 5, 5, 9, 1, "", "", ""],
            ["", "", "", 1, 9, 9, 5, 9, 9, 1, "", "", ""],
            ["", "", "", "", 1, 9, 9, 9, 1, "", "", "", ""],
            ["", "", "", "", "", 1, 9, 1, "", "", "", "", ""],
            ["", "", "", "", "", "", 1, "", "", "", "", "", ""]
        ],

        heart: [
            ['', 2, '', 2, ''],
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2],
            ['', 2, 2, 2, ''],
            ['', '', 2, '', '']
        ],

        cat: [
            [1, 1, '', '', '', '', 1, 1, 1, '', '', '', '', '', ''],
            [1, 10, 1, '', '', 1, 10, 10, 1, '', '', '', '', '', ''],
            [1, 10, 8, 1, 1, 8, 10, 10, 1, '', '', '', '', '', ''],
            [1, 9, 8, 0, 8, 9, 9, 9, 1, '', '', '', '', '', ''],
            [1, 9, 0, 0, 9, 9, 9, 9, 1, '', '', '', '', '', ''],
            [1, 0, 1, 0, 9, 1, 9, 9, 1, '', '', '', 1, 1, ''],
            [1, 0, 1, 0, 0, 1, 9, 9, 1, '', '', 1, 9, 9, 1],
            [1, 0, 0, 10, 0, 0, 0, 0, 1, 1, '', 1, 9, 1, 1],
            ['', 1, 0, 0, 0, 0, 0, 1, 9, 9, 1, 9, 9, 1, ''],
            ['', '', 1, 0, 0, 0, 0, 0, 0, 0, 9, 1, 1, '', ''],
            ['', '', 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, '', '', ''],
            ['', '', 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, '', '', ''],
            ['', '', 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, '', '', ''],
            ['', '', 1, 1, 1, 1, 1, '', 1, 1, 1, 1, '', '', '']
        ],

        racingCar: [
            [1, 1, 1, '', '', '', '', '', 1, 1, '', '', '', '', '', '', '', '', '', '', '', '', ''],
            [1, 2, 1, '', '', '', 1, 1, 2, 1, '', '', '', '', '', '', '', '', '', '', '', '', ''],
            [1, 2, 1, '', '', 1, 2, 2, 2, 1, 1, '', '', '', '', '', '', '', '', '', '', '', ''],
            [1, 2, 1, 1, 1, 2, 2, 2, 2, 1, 5, 1, '', 1, 1, 1, 1, 1, '', '', '', '', ''],
            [1, 1, 8, 8, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 8, 8, 1, 1, '', '', ''],
            ['', 1, 8, 1, 8, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 8, 1, 1, 8, 2, 1, 1, ''],
            ['', 1, 8, 1, 8, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 8, 1, 1, 8, 2, 2, 2, 1],
            ['', '', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, '', '', 1, 1, 1, 1, 1, 1, 1, 1]
        ],

        car: [
            ['', '', '', '', '', '', '', 1, 1, 1, 1, 1, '', '', '', '', '', '', '', '', '', ''],
            [1, 1, 1, '', '', 1, 1, 2, 2, 7, 7, 7, 1, '', '', '', '', '', '', '', '', ''],
            ['', 1, '', '', 1, 1, 2, 2, 2, 7, 7, 7, 7, 1, '', '', '', '', '', '', '', ''],
            ['', 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, '', '', '', ''],
            ['', 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, '', ''],
            [1, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 1, ''],
            [1, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 1],
            [1, 2, 2, 1, 8, 8, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 8, 8, 1, 2, 2, 1],
            ['', 1, 1, 1, 8, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 8, 1, 1, 1, 1],
            ['', '', '', 1, 1, 1, 1, '', '', '', '', '', '', '', '', 1, 1, 1, 1, '', '', '']
        ]
    }    
};

export default CWS;
