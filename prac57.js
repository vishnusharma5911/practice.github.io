
function togglehide() {
    let btn = document.getElementById('btn');
    let para = document.getElementById('para');
    if (para.style.display != 'none') {
        para.style.display = "none";
    }
    else {
        para.style.display = "block";
    }
}

function displaytime() {
    time = new Date();
    console.log(time);
    document.getElementById('ghanta').innerHTML = time;
}
setInterval(displaytime, 1000);
