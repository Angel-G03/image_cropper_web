// This function isn't really neccesary but will stay for now
function upload() {
    console.log("Uploading files...");
}

function crop() {
    var file = document.getElementById("upload").value;
    var top = document.getElementById("top").value;
    var bottom = document.getElementById("bottom").value;
    var left = document.getElementById("left").value;
    var right = document.getElementById("right").value;
    console.log("Cropping " + file);
}
