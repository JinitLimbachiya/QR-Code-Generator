let userInput = document.getElementById('userInput')
let qrCodeDiv = document.getElementById('qrCodeContainer')
let generateBtn = document.getElementById('generateBtn')
let downloadBtn = document.getElementById('downloadBtn')

generateBtn.addEventListener('click', () => {
    if(userInput.value.trim().length > 0) {
        generateQrCode()
    }

    else {
        alert("Please enter text or paste URL!")
    }
})

downloadBtn.addEventListener('click', () => {
    let img = qrCodeDiv.querySelector('img')

    if(img) {
        let imgSrc = img.src
        let link = document.createElement('a')
        link.href = imgSrc
        link.download = "QR_Code.png"
        link.click()
    }
    
    else {
        alert("No QR code available to download. Please generate one first")
    }
})

const generateQrCode = () => {
    qrCodeDiv.innerHTML = ""

    new QRCode(qrCodeDiv, {
        text: userInput.value.trim(),
        height: 250,
        width: 250,
        colorDark: 'Black',
        colorLight: 'White'
    })
}