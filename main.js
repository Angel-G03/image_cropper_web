// This function isn't really neccesary but will stay for now
function upload() {
    console.log("Uploading files...");
}

function getSaveMode() {
    var saveMode = document.getElementsByName('saveType');
    for (var mode of saveMode) {
        if (mode.checked) {
            return mode.value
        }
    }
    return null;
}

function crop() {
    var file = document.getElementById("upload").value;
    var top = document.getElementById("top").value;
    var bottom = document.getElementById("bottom").value;
    var left = document.getElementById("left").value;
    var right = document.getElementById("right").value;
    var saveMode = getSaveMode()

    const originalImage = new Image();
    originalImage.src = 'test.jpeg';

    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    originalImage.addEventListener("load", 
    function() {
        canvas.width = right;
        canvas.height = bottom;
        context.drawImage(originalImage, 0, 0, right, bottom, 0, 0, right, bottom);
    });

    const downloadButton = document.querySelector("button.download");
    downloadButton.addEventListener('click',
    function() {
        var tempLink = document.createElement('a');
        var fileName = 'test-cropped.jpg';
        tempLink.download = fileName;
        tempLink.href = document.getElementById('canvas').toDataURL("image/jpeg", 0.9);
        tempLink.click();
    });
}
