noseX = 0
noseY = 0
fontSize = 0
leftWristX = 0
rightWristX = 0
confianceNose = 0

function setup(){
    canvas = createCanvas(600, 600)
    canvas.center()
    background("black")
    video = createCapture(VIDEO)
    video.size(600, 600)

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
} 

function modelLoaded(){
console.log("Modelo carregado!")
}

function gotPoses(results){
    if(results.length > 0){
      console.log(results)
     noseX = results[0].pose.nose.x
     noseY = results[0].pose.nose.y
     leftWristX = results[0].pose.leftWrist.x
     rightWristX = results[0].pose.rightWrist.x
     confianceNose = results[0].pose.nose.x
     fontSize = floor(leftWristX - rightWristX)
     document.getElementById("resultado").innerHTML =  + fontSize
    }
}

function draw(){
    if(confianceNose > 0.5){
    background("green")
    textSize(fontSize)
    fill("white")
    text(":D", noseX, noseY)
    }
}