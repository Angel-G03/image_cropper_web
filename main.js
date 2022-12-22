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
    file = file.substring(12); // Trims string to be: filename.ext
    var height = document.getElementById("height").value;
    var width = document.getElementById("width").value;
    var saveMode = getSaveMode()

    // Get file source with string formatting
    const originalImage = new Image();
    originalImage.src = 'test.jpeg';

    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    // I dont't need to draw to canvas unless I may want to have an intermittent phase where you can crop several times and see result before downloading
    originalImage.addEventListener("load", 
    function() {
        canvas.width = right;
        canvas.height = bottom;
        context.drawImage(originalImage, 0, 0, right, bottom, 0, 0, right, bottom);
    });

    //Just download after pressing crop, unless we want a testing type of thing like stated before
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
