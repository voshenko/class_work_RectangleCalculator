function drawCalculateRectangle() {
    const canvasRectangle = document.querySelector('#myCanvas');
    const painter = canvasRectangle.getContext('2d');
    const widthData = document.querySelector('#width');
    const heightData = document.querySelector('#height');
    const positionxData = document.querySelector('#positionx');
    const positionyData = document.querySelector('#positiony');
    const w = +widthData.value;
    const h = +heightData.value;
    const x = +positionxData.value;
    const y = +positionyData.value;

    if (w <= 0 || w + x > 300 || h <= 0 || h + y > 300) {
        alert("Invalid values!");
        return;
    }

    painter.fillStyle = "blue";
    painter.fillRect(x, y, w, h);
    const area = ectangleArea(w, h);
    document.querySelector('#area').innerHTML = `Rectangle area: ${area}`;
    localStorage.setItem("width", w);
    localStorage.setItem("heught", h);
    localStorage.setItem("positionX", x);
    localStorage.setItem("positionY", y);

}

function ectangleArea(n1, n2) {
    const area1 = n1 * n2;
    return area1;
}

function clearData() {
    const canvasRectangle = document.querySelector('#myCanvas');
    const painter = canvasRectangle.getContext('2d');
    painter.clearRect(0, 0, 300, 300);
    localStorage.clear();
}



function onWidowLoad() {
    const btnCalculat = document.querySelector('#btnCal');
    const btnReset = document.querySelector('#btnReset');

    btnCalculat.onclick = drawCalculateRectangle;
    btnReset.onclick = clearData;
}
window.onload = onWidowLoad;


