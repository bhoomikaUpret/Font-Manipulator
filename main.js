function setup()
{
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(450, 450);
    canvas.position(760, 100);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#969A97')
}

function modelLoaded()
{
    console.log("PoseNet Is Initialized");
}

function gotPoses()
{
    if(result.length > 0)
    {
        console.log(results);
    }
}
