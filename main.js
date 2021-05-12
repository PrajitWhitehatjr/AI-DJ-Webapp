leftWristX=0;
rightWrist=0;
difference=0;

function preload() {
    
}

function setup() {
 canvas=createCanvas(500,375);
 canvas.position(750,315);
 video=createCapture(VIDEO);
 video.position(200,250);
 video.size(500,500);
 classifier=ml5.poseNet(video,modelLoaded);
 classifier.on('pose',gotResult)

}
function modelLoaded()  {
    window.alert("Model is Loaded!")
}

function draw() {
   textSize(difference);
   text("Hi",180,175);
   fill(255,0,0)
   stroke(0,0,0);
}

function gotResult(results) {
    if (results.length<0) {
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference= rightWristX-leftWristX;
        console.log("Left wrist x= "+leftWristX+"Right wrist x= "+rightWristX+"difference="+difference);
    }
}
