const botaoMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu-principal");
botaoMenu.addEventListener("click", function () {
    menu.classList.toggle("ativo");
    const menuAberto = menu.classList.contains("ativo");
    botaoMenu.setAttribute("aria-expanded", menuAberto);
});
const botaoDropdown = document.querySelector(".dropdown-toggle");
const dropdown = document.querySelector(".dropdown");

botaoDropdown.addEventListener("click", function () {
    dropdown.classList.toggle("aberto");

    const dropdownAberto = dropdown.classList.contains("aberto");

    botaoDropdown.setAttribute("aria-expanded", dropdownAberto);
});