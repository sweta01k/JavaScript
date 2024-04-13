required_click = 1;
current_click = 0;

function changeImage() {
    image = document.getElementById('myImage');
    current_click += 1;
    console.log(current_click);

    if (required_click == current_click) {
        //image.src = "bulbon (1).png";
        required_click += 1;
        current_click = 0;
        console.log(image.src, "imagesrc");

        var srcValue = image.getAttribute("src");
        if (srcValue === "bulboff.png") {
            image.setAttribute("src", "bulbon.png");
        } else {
            image.setAttribute("src", "bulboff.png");
        }
    }
}