canvas = document.getElementById('my_canvas');
ctx = canvas.getContext("2d");

blue_width = 100;
blue_height = 90;
blue_x = 10;
blue_y = 10;
cart_width = 100;
cart_height = 90;
cart_x = 10;
cart_y = 10;
background_image = "racing.gif";
blue_image = "blue.png";
cart_image = "cart.png";

function add () {
    background_img_tag = new Image();
    background_img_tag.onload = uploadBackground;
    background_img_tag.src = background_image;

    blue_pic = new Image();
    blue_pic.onload = uploadblue;
    blue_pic.src = blue_image;

    cart_pic = new Image();
    cart_pic.onload = uploadblue;
    cart_pic.src = cart_image;
}

function uploadBackground(){
    ctx.drawImage(background_img_tag, 0, 0, canvas.width, canvas.height);
}

function uploadblue(){
    ctx.drawImage(blue_pic, blue_x, blue_y, blue_width, blue_height);
}

window.addEventListener("keydown", key_down);

function key_down(e) {
    key_press = e.keyCode;
    if(key_press == '38'){
        up ();
        console.log("up");
    }
    if(key_press == '40'){
        down ();
        console.log("down");
    }
    if(key_press == '37'){
        left ();
        console.log("left");
    }
    if(key_press == '39'){
        right ();
        console.log("right");
    }
}