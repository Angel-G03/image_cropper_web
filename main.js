// Currently only works for jpg images
// Does not work due to DOMException

function crop() {
    var file = document.getElementById("upload").value;
    file = file.substring(12);
    var height = document.getElementById("height").value;
    var width = document.getElementById("width").value;

    const originalImage = new Image();
    originalImage.src = file;

    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    originalImage.addEventListener("load", 
    function() {
        canvas.width = width;
        canvas.height = height;
        context.drawImage(originalImage, 0, 0, width, height, 0, 0, width, height);
    });

    const downloadButton = document.querySelector("button.download");
    downloadButton.addEventListener('click',
    function() {
        var tempLink = document.createElement('a');
        var fileName = 'cropped.jpg';
        tempLink.download = fileName;
        tempLink.href = document.getElementById('canvas').toDataURL("image/jpeg", 0.9);
        tempLink.click();
    });
}
