lip_x=0;
lip_y=0;

function preload()
{
lipstick_img=loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}

function setup()
{
    canvas=createCanvas(500,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(500,400);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',getposes);
}

function modelLoaded()
{
console.log("Posenet Model Loaded");
}

function getposes(results)
{
    if(results.length>0)
    {
        console.log(results);
        lip_x=results[0].pose.nose.x-20;
        lip_y=results[0].pose.nose.y+10;
        console.log(lip_x,lip_y);
    }
}
function draw()
{
image(video,0,0,500,400);
image(lipstick_img,lip_x,lip_y,35,25);
}

function takesnap()
{
    save("lipspic.png");
}