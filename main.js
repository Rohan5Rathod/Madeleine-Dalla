const elems = document.querySelectorAll(".container img");
let current = 0;
let zIndex = 11;

function reset(elem) {
    setTimeout(function () {
        elem.style.transform = "translateX(100%)";
        elem.style.transformOrigin = "100% 0%";
    },);
}

document.querySelector("#nextBtn").addEventListener("click", function () {
    reset(elems[current]);
    current = (current + 1) % elems.length;
    elems[current].style.transform = "translateX(0)";
    elems[current].style.transformOrigin = "0% 0%";
    elems[current].style.zIndex = zIndex++;
});

document.querySelector("#prevBtn").addEventListener("click", function () {
    reset(elems[current]);
    current = (current - 1 + elems.length) % elems.length;
    elems[current].style.transform = "translateX(0)";
    elems[current].style.transformOrigin = "0% 0%";
    elems[current].style.zIndex = zIndex--;
});
