import { paginas } from "./paginas.js";
import { salvarDados, recuperarDados } from "./storage.js";
import { validarEmail } from "./validacao.js";

const conteudo = document.querySelector("#conteudo");
const botaoMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu-principal");
const botaoDropdown = document.querySelector(".dropdown-toggle");
const dropdown = document.querySelector(".dropdown");
let temporizador;
const rotas = {"index.html": "inicio", "projetos.html": "projetos", "cadastro.html": "cadastro"};
const titulos = {inicio: "Início", projetos: "Projetos Sociais", cadastro: "Cadastro"};

function fecharMenus() {
    menu?.classList.remove("ativo");
    dropdown?.classList.remove("aberto");
    botaoMenu?.setAttribute("aria-expanded", "false");
    botaoDropdown?.setAttribute("aria-expanded", "false");
}
botaoMenu?.addEventListener("click", () => {
    botaoMenu.setAttribute("aria-expanded", String(menu.classList.toggle("ativo")));
});
botaoDropdown?.addEventListener("click", () => {
    botaoDropdown.setAttribute("aria-expanded", String(dropdown.classList.toggle("aberto")));
});
document.addEventListener("keydown", event => { if (event.key === "Escape") fecharMenus(); });

function prepararLinks() {
    document.querySelectorAll("a[href]").forEach(link => {
        if (link.getAttribute("href").startsWith("#")) return;
        const url = new URL(link.getAttribute("href"), location.href);
        const rota = rotas[url.pathname.split("/").pop()];
        if (rota && url.origin === location.origin && url.pathname.slice(0, url.pathname.lastIndexOf("/")) === location.pathname.slice(0, location.pathname.lastIndexOf("/"))) {
            link.setAttribute("href", "#/" + rota + (url.hash ? "/" + url.hash.slice(1) : ""));
        }
    });
}
function carregarPagina(moverFoco = false) {
    clearTimeout(temporizador);
    const partes = location.hash.startsWith("#/") ? location.hash.slice(2).split("/") : [];
    const rota = Object.hasOwn(paginas, partes[0]) ? partes[0] : (rotas[location.pathname.split("/").pop()] || "inicio");
    const ancora = partes[1] || (!location.hash.startsWith("#/") ? location.hash.slice(1) : "");
    conteudo.innerHTML = paginas[rota];
    document.title = titulos[rota] + " | ONG Conecta Futuro";
    prepararLinks();
    fecharMenus();
    const form = conteudo.querySelector("form");
    if (form) {
        const dados = recuperarDados();
        if (dados) {
            form.elements.nome.value = dados.nome;
            form.elements.email.value = dados.email;
        }
        form.querySelectorAll("input, select").forEach(campo => {
            const erro = document.createElement("small");
            erro.id = "erro-" + campo.id;
            erro.className = "mensagem-erro";
            campo.setAttribute("aria-describedby", erro.id);
            campo.after(erro);
        });
    }
    if (moverFoco) { conteudo.focus(); window.scrollTo(0, 0); }
    if (ancora) document.getElementById(ancora)?.scrollIntoView();
}
conteudo.addEventListener("submit", event => {
    if (event.target.id !== "form-cadastro") return;
    event.preventDefault();
    const form = event.target;
    let primeiroErro = null;
    form.querySelectorAll("input, select").forEach(campo => {
        campo.setCustomValidity("");
        if (campo.required && !campo.value.trim()) campo.setCustomValidity("Preencha este campo.");
        else if (campo.type === "email" && !validarEmail(campo.value.trim())) campo.setCustomValidity("Digite um e-mail válido.");
        const valido = campo.checkValidity();
        campo.classList.toggle("campo-erro", !valido);
        campo.classList.toggle("campo-sucesso", valido);
        campo.setAttribute("aria-invalid", String(!valido));
        document.getElementById("erro-" + campo.id).textContent = valido ? "" : campo.validationMessage;
        if (!valido && !primeiroErro) primeiroErro = campo;
    });
    const toast = document.querySelector("#toast-sucesso");
    clearTimeout(temporizador);
    toast.classList.remove("ativo");
    if (primeiroErro) { primeiroErro.focus(); return; }
    try {
        salvarDados({nome: form.elements.nome.value.trim(), email: form.elements.email.value.trim()});
        toast.querySelector("strong").textContent = "✓ Nome e e-mail salvos neste navegador!";
        toast.querySelector("p").textContent = "Demonstração concluída. Nenhum cadastro foi enviado.";
    } catch {
        toast.querySelector("strong").textContent = "Não foi possível salvar os dados neste navegador.";
        toast.querySelector("p").textContent = "Verifique se o armazenamento local está disponível e tente novamente.";
    }
    toast.classList.add("ativo");
    temporizador = setTimeout(() => toast.classList.remove("ativo"), 5000);
});
window.addEventListener("hashchange", () => carregarPagina(true));
carregarPagina();
