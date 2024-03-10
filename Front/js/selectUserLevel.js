

function changeColor() {
    let tierId = document.getElementById("tierID");
    let option = tierId.options[tierId.selectedIndex];

    let computedStyle = window.getComputedStyle(option);
    let color = computedStyle.color;

    tierId.style.color = color;
}