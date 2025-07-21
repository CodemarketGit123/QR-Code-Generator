const popupqr = document.querySelector('.pop-up-qrcode');
const qrtext = document.querySelector('#qr-text');
const generateqr = document.querySelector('#generate-qr');
const downloadBtn = document.querySelector('#downloadBtn');
const closeBtn = document.querySelector('#closeBtn');
const qrImg = document.querySelector('#qrImg');

const Url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

generateqr.addEventListener('click', () => {
    if (qrtext.value === '') {
        alert('Please enter the text to generate QR code');
    } else {
        const imgUrl = Url + qrtext.value;
        qrImg.setAttribute('src', imgUrl);
        popupqr.style.display = "block";
    }
})

downloadBtn.addEventListener('click', () => {
    const imgUrl = Url + qrtext.value;
    fetch(imgUrl)
        .then((res) => res.blob())
        .then((blob) => {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'qr.jpg';
            link.click();
            URL.revokeObjectURL(link.href);
        })
        .catch((err) => console.error(err));
});

closeBtn.addEventListener('click', () => {
    popupqr.style.display = "none";
    setTimeout(function () {
        location.reload();
    }, 100); 
})