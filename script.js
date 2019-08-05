/**
 * @name handleFail
 * @param err - error thrown by any function
 * @description Helper function to handle errors
 */
let handleFail = function(err){
    console.log("Error : ", err);
};

(()=>{
// Client Setup, Defines a client for RTC
    let client = AgoraRTC.createClient({
        mode: 'live',
        codec: "h264"
    });

    let appid = "<APP ID>";
    let channelid="1000";

// Defines a client for Real Time Communication
    client.init(appid,() => console.log("AgoraRTC client initialized") ,handleFail);

// The client joins the channel
    client.join(null,channelid,null, (uid)=>{
        var frameRate = 30;
        var canvas = document.getElementById("canv"); // canvas which is to be streamed to agora
        var mediaStream = canvas.captureStream(frameRate);  // convert to mediaStream
        var videoSource = mediaStream.getVideoTracks()[0];  // get the videoSource

        var localStream = AgoraRTC.createStream({
            video: true,
            audio: false,
            videoSource: videoSource // Pass in the video source to agora
        });
        localStream.init(function(){
            client.publish(localStream); // Publish it to the channel
        });
        console.log(`App id : ${appid}\nChannel id : ${channelid}`);
    },handleFail);
})();