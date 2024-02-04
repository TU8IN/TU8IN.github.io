function calculateElementWidth(spanId, containerId) {
    // Change the variable to modify the speed of the number increasing from 0 to (ms)
    let SPEED = 40;
    // Retrieve the percentage value
    let limit = parseInt(document.getElementById(spanId).innerHTML, 10);
    const chart = document.getElementById(containerId);
    const chartWidth = limit * 5;
    chart.style.width = `${chartWidth}px`;

    for (let i = 0; i <= limit; i++) {
        setTimeout(function () {
            document.getElementById(spanId).innerHTML = i + "%";
        }, SPEED * i);
    }
} 