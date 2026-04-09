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
};

const CWS = {
    // Create a sprite object
    createSprite: (img, size = 20, x = 0, y = 0) => {
        return { img, size, x, y };
    },

    // Draw a single sprite
    drawSprite: (sprite, canvas) => {
        let ctx = canvas.getContext("2d");

        for (let y = 0; y < sprite.img.length; y++) {
            for (let x = 0; x < sprite.img[y].length; x++) {
                let value = sprite.img[y][x];
                if(COLORS.hasOwnProperty(value)){
                    ctx.fillStyle = COLORS[value];
                    ctx.fillRect(
                        (x * sprite.size) + sprite.x ,
                        (y * sprite.size) + sprite.y ,
                        sprite.size,
                        sprite.size
                    );
                }
        }
        }
    },

    // Draw multiple sprites
    drawSprites: (sprites, canvas) => {
        sprites.forEach(sprite => {
            CWS.drawSprite(sprite, canvas);
        });
    },

    // Move a sprite by dx, dy
    moveSprite: (sprite, dx, dy) => {
        sprite.x += dx;
        sprite.y += dy;
    },

    // Clear the canvas
    clear: (canvas) => {
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
};

export default CWS;
