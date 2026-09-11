# Atividade prática — Desenvolvimento web

Projeto acadêmico desenvolvido em HTML para praticar a estruturação de páginas com elementos semânticos, links, imagens e formulários.

O repositório contém uma página da **ONG Conecta Futuro**, na raiz, e o portal de notícias **Brasil em Foco**, na pasta `html/`.

## Páginas

- **ONG Conecta Futuro (`index.html`):** apresentação da organização, imagem de uma ação social e informações de contato.
- **Brasil em Foco (`html/index.html`):** portal com notícias sobre tecnologia, educação e meio ambiente, com links para as fontes originais.
- **Projetos (`html/projetos.html`):** apresentação do portal Brasil em Foco e dos objetivos da atividade.
- **Cadastro (`html/cadastro.html`):** formulário demonstrativo com dados pessoais e áreas de interesse. O botão de cadastro está desabilitado e não há serviço de armazenamento de dados.

## Estrutura atual

```text
.
├── README.md
├── index.html
├── html/
│   ├── index.html
│   ├── projetos.html
│   └── cadastro.html
└── imagens/
    └── acao-social.jpg
```

## Como visualizar

Não é necessário instalar dependências ou iniciar um servidor. Abra o arquivo desejado diretamente em um navegador:

- `index.html` para visualizar a página da ONG Conecta Futuro.
- `html/index.html` para visualizar o portal Brasil em Foco e navegar pelas páginas de projetos e cadastro.

## Pendências atuais

- A página da ONG referencia `css/styles.css`, mas esse arquivo não está presente no projeto.
- Os links de projetos e cadastro na página da ONG apontam para arquivos na raiz, enquanto as páginas existentes estão na pasta `html/` e pertencem ao portal Brasil em Foco.
- O portal referencia `img/data-center.jpg`, mas essa imagem não está presente na estrutura atual.

## Tecnologias

- HTML5, com elementos semânticos e campos de formulário.
- Sem arquivos CSS ou JavaScript implementados na estrutura atual e sem backend ou banco de dados.

## Finalidade acadêmica

Atividade prática da faculdade para exercitar a organização de arquivos e a construção de páginas web. As notícias do portal Brasil em Foco possuem links para a Agência Brasil. Os materiais de terceiros permanecem sujeitos aos direitos de seus respectivos titulares.
