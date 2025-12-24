console.log("Bowiz Tech Solutions website loaded");
function toggleMenu() {
    const menu = document.getElementById("nav-links");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}
