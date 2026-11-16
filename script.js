
var header = document.getElementById(`header`);
var navegation_header = document.getElementById(`navegation_header`);
var content = document.getElementById(`content`);
var showSidebar = false;


function toggleSidebar() {
    showSidebar = !showSidebar;
    if (showSidebar) {
        navegation_header.style.marginLeft = `-10vw`;
        navegation_header.style.animationName = `showSidebar`;
        content.style.filter = `blur(2px)`
    } else {
        navegation_header.style.marginLeft = `-100vw`;
        navegation_header.style.animationName = ``;
        content.style.filter = ``
    }

}
function closeSidebar() {
    if (showSidebar) {
        toggleSidebar();
    }
}
window.addEventListener(`resize`, function (event) {
    if (window.innerWidth > 788 && showSidebar) {
        toggleSidebar();
    }
});

