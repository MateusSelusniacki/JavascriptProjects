const btn = document.querySelector("#btn")

function generateQRCode() {
    console.log(document.getElementById("input").value)
    var canvas = document.getElementById("qrcode");
    var qrcode = new QRCode(canvas, {
       text: document.getElementById("input").value,
       width: 256,
       height: 256,
       colorDark : "#000000",
       colorLight : "#ffffff",
       correctLevel : QRCode.CorrectLevel.H
    });
}

btn.addEventListener('click', generateQRCode)