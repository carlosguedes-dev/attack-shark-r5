<div align="center">

# 🦈 Attack Shark R5 Ultra — Experiência Visual ⚡🎮

**Uma landing page ultra-premium, interativa e imersiva desenvolvida para celebrar a performance extrema do mouse de alta performance Attack Shark R5 Ultra.**

[![Versão](https://img.shields.io/badge/versão-1.0.0-00d2ff?style=for-the-badge&logo=react&logoColor=white)](https://github.com/carlosguedes-dev/attack-shark-r5)
[![Licença](https://img.shields.io/badge/licença-MIT-00ff88?style=for-the-badge)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Feito com Amor](https://img.shields.io/badge/Feito_com-MUITO_AMOR_❤️-ff0055?style=for-the-badge)](https://github.com/carlosguedes-dev)

---

🔗 **[Acessar o Projeto Ao Vivo / Demonstração Online](https://carlosguedes-dev.github.io/attack-shark-r5/)**

---

<p align="center">
  <img src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1200&auto=format&fit=crop" alt="Banner Attack Shark R5 Ultra" width="80%" style="border-radius: 20px; box-shadow: 0 10px 30px rgba(0, 210, 255, 0.4);">
</p>

</div>

---

## 📖 Sobre o Projeto

O **Attack Shark R5 Ultra — Experiência Visual** é um projeto de vitrine digital (*Product Showcase Landing Page*) de alto padrão concebido para redefinir a forma como periféricos de eSports e hardware de elite são apresentados na web. Explorando os limites da interatividade moderna, a interface transforma a navegação do usuário em uma jornada imersiva repleta de fluidez e tecnologia de ponta.

Inspirado nas apresentações cinematográficas das maiores empresas de tecnologia do mundo, o projeto implementa um sistema de animação sincronizado ao scroll da página (*Scroll-Driven Frame Scrubbing*), onde sequências de quadros de vídeo e elementos 3D do mouse respondem com precisão milimétrica ao movimento de rolagem do usuário. O design dark mode incorpora efeitos de *Glassmorphism*, gradientes vibrantes e tipografia minimalista para destacar o que realmente importa: a velocidade e a leveza do produto.

Este projeto foi construído como uma iniciativa de pesquisa e desenvolvimento em Engenharia de Front-End, com foco em otimização de performance visual, manipulação avançada do DOM e renderização gráfica via Canvas e CSS3 sem o uso de bibliotecas externas pesadas.

---

## ✨ Principais Funcionalidades

- ⚡ **Hero com Animação Interativa ao Scroll**: Renderização dinâmica e sequencial de quadros (*frame scrubbing*) vinculada à rolagem da página, proporcionando uma experiência de visualização 360° fluida do mouse.
- 💎 **Estética Dark Mode & Glassmorphism**: Cards com desfoque de fundo avançado (`backdrop-filter: blur`), bordas iluminadas com gradientes radiais e paleta cibernética moderna (Cyan e Neon Blue).
- 📊 **Especificações Técnicas em Destaque**: Apresentação visual interativa das especificações de nível competitivo do periférico: **39g** de peso ultra-leve, sensor **42.000 DPI** e taxa de sondagem de **8000Hz (8KHz)**.
- 🎬 **Micro-animações & Reveal on Scroll**: Elementos, textos e especificações surgem de forma orgânica e coreografada na tela através da `IntersectionObserver API` à medida que a leitura avança.
- 📱 **Responsividade Absoluta Pixel-Perfect**: Arquitetura CSS flexível adaptada para entregar uma navegação de excelência em desktops ultrawide, notebooks, tablets e dispositivos móveis.

---

## 💻 Tecnologias Utilizadas

O projeto foi desenvolvido inteiramente com tecnologias nativas (*Vanilla*), garantindo máxima performance de renderização, carregamento instantâneo e total controle arquitetural:

- **HTML5 Semântico**: Estruturação acessível, marcação limpa e otimizada para motores de busca (SEO) e leitores de tela.
- **CSS3 Moderno**: Utilização intensiva de Design Tokens (Variáveis CSS), Flexbox, CSS Grid, Efeitos de *Glassmorphism* (`backdrop-filter`), sombras difusas e `@keyframes` otimizados por GPU.
- **JavaScript Vanilla (ES6+)**: Controle de eventos de scroll de alta precisão, observadores de interseção para lazy-loading e gatilhos de animação modulares sem dependência de jQuery ou bibliotecas externas.
- **Manipulação de Mídia & Frames**: Otimização de sequências de quadros na pasta `frames/` para reprodução contínua e sem gargalos de memória.

---

## 📁 Estrutura de Arquivos

```text
attack-shark-r5/
│
├── frames/          # Quadros e frames de imagem para animação vinculada ao scroll (vídeo interativo)
├── img/             # Imagens ilustrativas, logotipos, ícones e assets gráficos do mouse
├── index.html       # Estrutura semântica principal da landing page e seções de produto
├── script.js        # Lógica JavaScript (animação ao scroll, observadores e interatividade)
├── style.css        # Sistema de design premium, glassmorphism e animações CSS3
├── README.md        # Documentação completa e guia técnico do projeto (este arquivo)
├── CONTRIBUTING.md  # Guia e diretrizes para contribuições de desenvolvedores da comunidade
└── LICENSE          # Licença MIT de código aberto
```

---

## 🚀 Como Executar o Projeto

A execução do projeto é extremamente simples e imediata, não exigindo instalação de dependências ou servidores complexos:

1. **Opção 1: Direto no Navegador (Formato Mais Rápido)**
   - Faça o clone ou o download deste repositório em sua máquina local:
     ```bash
     git clone https://github.com/carlosguedes-dev/attack-shark-r5.git
     ```
   - Acesse a pasta do projeto e dê um **duplo clique** no arquivo `index.html` para abri-lo em qualquer navegador moderno (Google Chrome, Microsoft Edge, Mozilla Firefox, Apple Safari).

2. **Opção 2: Com VS Code & Live Server (Recomendado para Desenvolvedores)**
   - Abra a pasta do projeto no [Visual Studio Code](https://code.visualstudio.com/).
   - Instale a extensão gratuita **Live Server** na loja do VS Code.
   - Clique com o botão direito sobre o arquivo `index.html` e selecione a opção **"Open with Live Server"**. O site será aberto automaticamente com suporte a *Hot Reloading*.

3. **Opção 3: Publicação / Deploy Online (GitHub Pages)**
   - Suba as alterações para o seu repositório no GitHub.
   - Nas configurações do repositório (**Settings** > **Pages**), selecione a branch `main` e salve.
   - O projeto estará disponível globalmente em instantes através do link gerado!

---

## 🤝 Como Contribuir

Contribuições da comunidade são sempre bem-vindas! Se você tem ideias para novas animações, melhorias na taxa de quadros, otimizações de CSS ou suporte a novos efeitos interativos, consulte o nosso arquivo [CONTRIBUTING.md](CONTRIBUTING.md) para saber como enviar o seu *Pull Request*.

---

## 📄 Licença

Este projeto está distribuído sob a licença de código aberto **MIT**. Veja o arquivo [LICENSE](LICENSE) para obter todos os detalhes legais de uso e distribuição.

---

<div align="center">
  <p>Feito com todo o carinho e dedicação por <a href="https://github.com/carlosguedes-dev">Carlos Guedes</a> ❤️</p>
  <p><b>Elevando o nível das experiências web de alta performance! ⚡✨</b></p>
</div>
