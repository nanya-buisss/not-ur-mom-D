
var canvas = new fabric.Canvas('myCanvas');

golf_x = 10;
golf_y = 10;
hole_y = 400;
hole_x = 800;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	
	fabric.Image.fromURL("golf-h.png", function(Img){
        hole_object = Img;
        hole_object.scaleToWidth(50);
        hole_object.scaleToHeight(50);
        hole_object.set({
            top: hole_y,
            left: hole_x
        });
        canvas.add(hole_object);
    });
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img){
        golf_object = Img;
        golf_object.scaleToWidth(50);
        golf_object.scaleToHeight(50);
        golf_object.set({
            top: golf_y,
            left: golf_x
        });
        canvas.add(golf_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	
	console.log(keyPressed);
	if((golf_x == hole_x)&&(golf_y == hole_y))
	{
		canvas.remove(golf_object);

		document.getElementById("hd3").innerHTML = "You have Hit the Goal!";
		document.getElementById("myCanvas").style.borderColor = "red"
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(golf_y >= 5)
    	{
        golf_y = golf_y - block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("when up arrow key is pressed, X = " + golf_x + ", y = " + golf_y);
        canvas.remove(golf_object);
        new_image();
    	}
	}

	function down()
	{
		if(golf_y <= 450)
    {
		golf_y = golf_y + block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("when down arrow key is pressed, x = " + golf_x + ", y = " + golf_y);
        canvas.remove(golf_object);
        new_image();
    	}
	}

	function left()
	{
		if(golf_x >5)
		{
			{
				golf_x = golf_x - block_image_width;
				console.log("block image width = " + block_image_width);
				console.log("when left arrow key is pressed, x = " + golf_x + ", y = " + golf_y);
				canvas.remove(golf_object);
				new_image();
			}
		}
	}

	function right()
	{
		if(golf_x <=1050)
		{
			{
				golf_x = golf_x + block_image_width;
				console.log("block image width = " + block_image_width);
				console.log("when right arrow key is pressed, x = " + golf_x + ", y = " + golf_y);
				canvas.remove(golf_object);
				new_image();
			}
		}
	}
	
}

