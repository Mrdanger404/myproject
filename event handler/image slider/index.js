var pic = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg"]
var imgTag = document.querySelector("#img");

var count = 0;

function next() {
    count++;

    if (count >= pic.length) {
        count = 0;
        imgTag.src = pic[count]
    } else {
        imgTag.src = pic[count]
    }
}


function prev() {
    count--;

    if (count < 0) {
        count = pic.length;
        imgTag.src = pic[count]
    } else {
        imgTag.src = pic[count]
    }
}