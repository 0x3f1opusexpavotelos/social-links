
export async function setupCamera(previewCanvas) {
  const avStream = await navigator.mediaDevices.getUserMedia({
    video: true,
  });

  const video = document.createElement("video");
  try {
    // modern browsers
    video.srcObject = avStream;
  } catch (error) {
    // old browsers
    video.src = window.URL.createObjectURL(avStream);
  }


  if (previewCanvas) {
    video.addEventListener("canplay", () => {
      drawPreview(video, previewCanvas);
    });
  }

  await video.play();
  return video;
}


export function drawPreview(video, canvas) {
  const context = canvas.getContext('2d')
  setInterval(() => {
    context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight, 0, 0, canvas.width, canvas.height)
  }, 16)
}




export function takePhoto(video, canvas) {
  const context = canvas.getContext("2d")
  // match size
  canvas.width = video.videoWidth
  canvas.height = video.videoWidth
  context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight)
}
