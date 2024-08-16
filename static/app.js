var i = 0;

let colors = ["#556B2F", "#9932CC", "#8FBC8F", "#FFFAF0", "#FFB6C1", "#FFA07A", "#F4A460"];

function changeBackgroundColor() {
    var bg = document.getElementById("home-resume-link");

    bg.style.color = colors[i];

    i = (i + 1) % colors.length;
}

// this calls the function every 2 seconds, changing the color
setInterval(changeBackgroundColor, 1000)