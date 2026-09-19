const chave = "conectaFuturo.dadosUsuario";
export function salvarDados(dados) {
    localStorage.setItem(chave, JSON.stringify({nome: dados.nome, email: dados.email}));
}
export function recuperarDados() {
    try {
        const dados = JSON.parse(localStorage.getItem(chave));
        return dados && typeof dados.nome === "string" && typeof dados.email === "string" ? dados : null;
    } catch { return null; }
}
