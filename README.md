# ONG Conecta Futuro — Projeto acadêmico

Site desenvolvido como atividade prática de desenvolvimento web, com foco em estruturação de páginas, estilização responsiva e interatividade no navegador.

> **Finalidade exclusivamente acadêmica:** a ONG Conecta Futuro é fictícia. Sua descrição, projetos sociais e informações de contato compõem um cenário didático e não representam uma organização real. O site não realiza cadastros reais de voluntários nem recebe doações.

## Apresentação

O projeto simula um site institucional de uma organização voltada à educação e à inclusão social. A proposta é aplicar fundamentos de desenvolvimento front-end em três páginas conectadas: apresentação institucional, projetos sociais e cadastro demonstrativo.

## Objetivos de aprendizagem

- Estruturar conteúdo com HTML semântico.
- Organizar arquivos e criar navegação entre páginas e seções.
- Construir layouts com CSS Grid e Flexbox.
- Padronizar cores, tamanhos e espaçamentos com variáveis CSS.
- Adaptar a interface a diferentes telas com media queries.
- Manipular elementos e eventos do navegador com JavaScript.
- Aplicar validações nativas de formulário e recursos básicos de acessibilidade.
- Registrar a evolução do trabalho com Git.

## Linguagens e tecnologias utilizadas

| Tecnologia | Aplicação no projeto |
| --- | --- |
| **HTML5** | Linguagem de marcação utilizada na estrutura das páginas, links, imagens e formulários. |
| **CSS3** | Linguagem de estilos utilizada no layout, cores, responsividade e estados visuais dos componentes. |
| **JavaScript** | Linguagem de programação utilizada no controle dos menus e na confirmação visual do formulário. |
| **Git** | Controle de versão e histórico de alterações. |

O site utiliza HTML, CSS e JavaScript puros, sem frameworks, bibliotecas externas ou etapa de compilação. Não possui backend ou banco de dados.

## Páginas e recursos

| Página | Conteúdo |
| --- | --- |
| [Início](html/index.html) | Apresentação da ONG fictícia, imagem ilustrativa e contatos demonstrativos. |
| [Projetos](html/projetos.html) | Projetos fictícios de Inclusão Digital, Capacitação Profissional e Educação para Todos, além de chamadas ilustrativas para participação. |
| [Cadastro](html/cadastro.html) | Formulário demonstrativo com dados pessoais, contato e endereço. |

### Interface e interação

- Menu de navegação adaptado para telas menores.
- Submenu com links diretos para as seções de projetos.
- Cartões de projetos organizados em grade responsiva.
- Indicadores de categoria nos projetos sociais.
- Campos obrigatórios e validação nativa de formatos no formulário.
- Mensagem temporária de confirmação ao submeter o formulário de demonstração.

### Recursos de acessibilidade presentes

- Idioma da página definido como português do Brasil.
- Elementos semânticos como `header`, `nav`, `main`, `section` e `footer`.
- Texto alternativo na imagem e rótulos associados aos campos.
- Agrupamento dos campos com `fieldset` e `legend`.
- Atributos ARIA nos controles de navegação e na mensagem de confirmação.
- Indicação visual de foco em componentes da interface.

Esses recursos fazem parte do exercício de aprendizagem; o projeto ainda não passou por uma auditoria completa de acessibilidade.

## Estrutura do repositório

```text
.
├── README.md
├── .gitignore
├── css/
│   └── styles.css
├── html/
│   ├── index.html
│   ├── projetos.html
│   └── cadastro.html
├── img/
│   └── acao-social.jpg
└── js/
    └── script.js
```

## Como executar

1. Baixe ou clone este repositório para o computador.
2. Mantenha a estrutura das pastas para preservar os caminhos dos arquivos.
3. Abra o arquivo `html/index.html` em um navegador atualizado.
4. Utilize o menu para acessar as páginas de projetos e cadastro.

Não é necessário instalar dependências. Opcionalmente, é possível abrir o projeto no Visual Studio Code e utilizar um servidor local, como a extensão Live Server.

## Roteiro de verificação manual

1. Acesse as três páginas e confira os links de navegação.
2. Redimensione a janela e observe a disposição dos cartões e do menu.
3. Em uma tela estreita, abra o menu e o submenu de projetos.
4. Navegue com a tecla `Tab` para observar os estados de foco.
5. Na página de cadastro, utilize apenas dados fictícios e confira os campos obrigatórios e formatos solicitados.
6. Envie um formulário válido e observe a confirmação temporária.

## Escopo e limitações

Este é um protótipo acadêmico em desenvolvimento. O formulário apresenta uma confirmação visual, mas não envia informações a um serviço de cadastro nem as armazena em um banco de dados. A validação de formato do CPF não verifica sua autenticidade ou seus dígitos verificadores.

As chamadas para voluntariado e doação são ilustrativas. Não há processamento de pagamentos, autenticação ou integração com serviços de uma ONG real. Para testar o formulário, utilize exclusivamente dados fictícios.

O projeto não possui uma suíte automatizada de testes. Revisões de responsividade, acessibilidade e comportamento entre páginas fazem parte de sua evolução acadêmica.

## Possíveis melhorias

- Revisar o JavaScript compartilhado para verificar a existência dos elementos antes de registrar eventos em cada página.
- Ampliar a verificação de navegação por teclado e de estados dos menus.
- Refinar a apresentação dos formulários e o comportamento das imagens em telas pequenas.
- Consolidar regras CSS repetidas e padronizar a formatação do código.
- Ampliar as opções de estados disponíveis no formulário demonstrativo.

## Natureza acadêmica

Este repositório documenta uma atividade prática e a evolução dos conhecimentos em desenvolvimento web. **A ONG Conecta Futuro é fictícia e todo o cenário institucional foi utilizado para fins educacionais.**
