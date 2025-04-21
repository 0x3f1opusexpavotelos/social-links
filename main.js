import "./global.css" // vite handles inserting css
import { setupCamera, takePhoto, drawPreview } from './src/camera.js'
import { Modal } from "./src/modal.js"
import { setupThemeToggle } from "./src/theme.js"

async function setupTakeSelfie() {
  const selfie = document.getElementById('take-selfie')

  const savePhotoBtn = document.getElementById('save-photo')

  const selfieModal = new Modal(
    "Take a selfie",
    selfie,
    selfie.querySelector('.modal-content')
  )

  selfieModal.render()

  const previewCanvas = selfie.querySelector("#preview")

  const video = await setupCamera(previewCanvas)



  const selfieCanvas = document.querySelector('#selfie')
  savePhotoBtn.addEventListener('click', () => {
    takePhoto(video, selfieCanvas)
  })

}





(async function run() {
  setupTakeSelfie()
  setupThemeToggle()
})()
