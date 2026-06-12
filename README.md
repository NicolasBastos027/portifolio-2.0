# Portfólio · Nicolas Bastos

Portfólio pessoal de **Nicolas Bastos Santos Cardoso** — desenvolvedor de software full-stack, mobile e games. Um site de página única (single-page), com rolagem contínua, linha do tempo de trajetória, vitrine de projetos e uma estética **liquid glass** (vidro fosco translúcido) sobre uma paleta azul → branco.

🔗 **Repositório:** https://github.com/NicolasBastos027/portifolio-2.0

---

## ✨ Destaques

- **Estética liquid glass** — painéis de vidro com `backdrop-filter: blur`, reflexos vindos de cima à direita e brilho sutil.
- **Imagem de fundo desfocada** com tint azul e vinheta para manter o conteúdo legível.
- **Lente de vidro deslizante na navbar** — um indicador único que escorrega fisicamente entre os itens, acompanhando a seção ativa no scroll e o hover.
- **Linha do tempo** combinando experiência profissional e formação acadêmica em ordem cronológica.
- **Card de projeto em destaque** (James Barber) com print real dentro de um frame de navegador.
- **Animações de scroll** (reveal), **contadores animados** e **navbar que encolhe**.
- **Chips com efeito liquid glass no hover**.
- **WhatsApp** como redirecionador de contato (`wa.me`) com mensagem pré-preenchida.
- **Ícones SVG** inline (sem emojis), herdando `currentColor`.
- **Totalmente responsivo** — em telas pequenas a timeline vira coluna única e a navbar vira menu hambúrguer.
- **Acessibilidade** — respeita `prefers-reduced-motion` (desliga animações para quem prefere).

---

## 🛠️ Tecnologias

| Camada | Stack |
|--------|-------|
| Marcação | HTML5 semântico |
| Estilo | CSS3 puro (custom properties, grid, flexbox, `backdrop-filter`) |
| Interação | JavaScript (Vanilla, ES6+) — `IntersectionObserver`, sem dependências |
| Tipografia | Google Fonts — *Space Grotesk* e *Inter* |

> Sem build, sem framework, sem `node_modules`. Abre direto no navegador.

---

## 📂 Estrutura do projeto

```
portifolio/
├── index.html          # Estrutura e conteúdo de todas as seções
├── styles.css          # Todo o visual (liquid glass, layout, responsivo)
├── script.js           # Scroll reveal, lente da navbar, contadores, menu mobile
├── assets/
│   ├── background.jpg   # Imagem de fundo (floresta nevada, desfocada)
│   └── james.png        # Print real do projeto James Barber
└── README.md
```

---

## 🚀 Como executar localmente

Por ser um site estático, basta abrir o arquivo:

```bash
# Opção 1 — abrir direto no navegador
xdg-open index.html        # Linux
open index.html            # macOS

# Opção 2 — servir com um servidor local (recomendado)
python3 -m http.server 8080
# depois acesse http://localhost:8080
```

---

## 🧭 Seções do site

1. **Hero** — apresentação, cargo e chamadas para ação.
2. **Sobre** — resumo profissional + estatísticas animadas.
3. **Skills** — competências em três grupos (Linguagens & Frameworks, Ferramentas & Tecnologias, Metodologias & Habilidades).
4. **Trajetória** — linha do tempo de experiência e formação, de 2020 até o presente.
5. **Projetos** — James Barber em destaque + grade de repositórios do GitHub.
6. **Contato** — e-mail, LinkedIn, GitHub e WhatsApp.

---

## 💼 Trajetória profissional

| Período | Cargo | Empresa / Studio |
|---------|-------|------------------|
| Out 2025 – Presente | Desenvolvedor | Analítica Gerenciadora de Dados S/A |
| Nov 2024 – Mar 2025 | Game Developer | Ara Game Studio |
| Out 2023 – Nov 2023 | Desenvolvedor Full Stack | Serodonto |

## 🎓 Formação

- **Análise e Desenvolvimento de Sistemas** — FATEC Ribeirão Preto *(Jul 2023 – Jul 2026)*
- **Desenvolvimento de Games (CST)** — SoulCode *(Ago 2024 – Dez 2024)*
- **Programação FullStack** — Fundação Educandário *(Jun 2023 – Dez 2023)*
- **Análise e Desenvolvimento de Sistemas** — Faculdade Reges *(Fev 2023 – Jun 2023)*
- **Técnico Integrado em Design de Interiores** — ETEC José Martimiano *(Jan 2020 – Dez 2022)*

---

## 🌐 Deploy (GitHub Pages)

Como o projeto é estático, pode ser publicado gratuitamente:

1. Acesse **Settings → Pages** no repositório.
2. Em *Source*, selecione a branch `main` e a pasta `/ (root)`.
3. Salve — o site ficará disponível em `https://nicolasbastos027.github.io/portifolio-2.0/`.

---

## 📬 Contato

- **E-mail:** nicolabastos716rp@gmail.com
- **LinkedIn:** [/nicolas-bastos](https://www.linkedin.com/in/nicolas-bastos/)
- **GitHub:** [@NicolasBastos027](https://github.com/NicolasBastos027)
- **WhatsApp:** [+55 16 98137-6185](https://wa.me/5516981376185)
- **Localização:** Ribeirão Preto, SP

---

<p align="center">Feito com café e código por Nicolas Bastos ☕</p>
