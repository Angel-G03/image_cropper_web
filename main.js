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
    console.log("Cropping " + file + " by " + saveMode);
}
