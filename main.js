noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

 function setup()
 {
    video=createCapture(VIDEO);
    video.size(580, 530);
    canvas=createCanvas(1300, 550);
    canvas.position(600,150);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
 }

 function modelLoaded() {
   console.log('PoseNet Is Initialized!!!💥😧😦💥💥💥')
 }
 function draw()
  {
   background('#969A97');
   document.getElementById("font_size").innerHTML="the font size of the text will be: " + difference + "px";
   fill("#301934");
   textSize(difference);
   text("This text will rapidly change size based on the position of your arms.",0,200);
  }

  function gotPoses(results)
  {
    if(results.length > 0)
    {
      console.log(results);
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
      leftWristX = results[0].pose.leftWrist.x;
      rightWristX = results[0].pose.rightWrist.x;
      difference = floor(leftWristX - rightWristX)
    }
  }