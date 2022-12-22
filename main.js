function getSaveMode() {
    var saveMode = document.getElementsByName('saveType');
    for (var mode of saveMode) {
        if (mode.checked) {
            return mode.value
        }
    }
    return null;
}

// Currently only works for jpg images
// Does not work due to DOMException

function crop() {
    var file = document.getElementById("upload").value;
    file = file.substring(28); // Trims string to be: filename.ext
    var height = document.getElementById("height").value;
    var width = document.getElementById("width").value;
    var saveMode = getSaveMode()

    const originalImage = new Image();
    //originalImage.crossOrigin = "anonymous"; fixed someone else's DOM error but not this one
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
        if (saveMode == "overwrite") {
            var fileName = file;
        }
        else {
            var fileName = 'cropped.jpg';
        }
        tempLink.download = fileName;
        tempLink.href = document.getElementById('canvas').toDataURL("image/jpeg", 0.9);
        tempLink.click();
    });
}
