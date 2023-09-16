import React, { useEffect, useRef } from "react";

function CapturePhoto({ setCamra, setImage }) {
  const videoRef = useRef();

  useEffect(()=>{
    let stream;
    const startCamera = async ()=>{
      stream = await  navigator.mediaDevices.getUserMedia({
        video:true,
        audio:false
      })
      videoRef.current.srcObject = stream;
    } 
    startCamera()

    return ()=>{
      stream?.getTracks().forEach((track)=>{
        track.stop()
      })
    }
  })

  function capturePhoto() {
    const canvas = document.createElement("canvas");
    canvas.getContext("2d").drawImage(videoRef.current, 0, 0, 300, 150);
    setImage(canvas.toDataURL("image/jpeg"));
    setCamra(false);
  }

  return (
    <div className="w-[50vw] md:w-[30vw]  h-[80vh] bg-dropdown-background absolute top-[0%] left-[50%] -translate-x-[50%] -translate-y-[50%] p-5  flex items-center justify-center flex-col">
      <div
        className="text-white text-left w-full"
        onClick={() => setCamra(false)}
      >
        X
      </div>
      <div className="h-[85%] w-[100%]">
        <video
          width="400"
          src=""
          id="video"
          ref={videoRef}
          autoPlay
          muted
        ></video>
      </div>
      <button
        onClick={capturePhoto}
        className="w-[5vw] h-[5vw] bg-black rounded-full flex items-center justify-center"
      >
        <div className="w-[4vw] h-[4vw] bg-white rounded-full"></div>
      </button>
    </div>
  );
}

export default CapturePhoto;
