# Nayane Cardoso · Catálogo Nail Designer

Catálogo interativo para hospedagem no GitHub Pages.

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `nayane-catalogo`).
2. Envie **todos** os arquivos deste pasta: `index.html`, `.nojekyll` e as imagens `1.png` a `6.png`.
3. No repositório: **Settings → Pages → Source: Deploy from a branch → main / root**.
4. Pronto! O site ficará em `https://SEU-USUARIO.github.io/nayane-catalogo/`.

## Antes de publicar, personalize no `index.html`:

- **WhatsApp**: busque por `5500000000000` (aparece 3 vezes) e troque pelo número real, no formato `55 + DDD + número`.
- **Endereço**: nas seções de localização, substitua `Rua (tal), Setor (tal)` e `Studio (tal)`.
- **Redes sociais**: no rodapé, troque os `href="#"` pelos links do Instagram/WhatsApp.

## Loja de produtos (página `produtos.html`)

Catálogo de vendas com visual igual ao site principal e botão **"Comprar pelo WhatsApp"** em cada card. Os dados ficam no **Firebase Firestore** (projeto `naydesign`), então **tudo atualiza em tempo real** — sem publicar nada de novo no GitHub.

### Como funciona
- **Cadastrar produtos**: abra `admin.html` (link "Área do Lojista" no rodapé) e preencha nome, detalhe, valor, estoque e foto. O produto aparece na hora na loja, para qualquer aparelho.
- **Vendeu? Baixe o estoque**: no painel, clique no botão **Vendido −1** do produto. O estoque cai automaticamente para todos os clientes (e a loja mostra "Últimas X un." até esgotar).
- **Estoque**: `0` deixa o card com selo "Esgotado" e botão desabilitado; estoque ≤ 4 mostra "Últimas X un."
- **Trocar o número da loja**: no painel, campo "WhatsApp da loja" → salvar (fica no Firestore + navegador).
- **Apagar todos os produtos**: botão vermelho no rodapé da lista (não desfaz).
- **Backup**: "Baixar products.js (backup)" gera cópia dos produtos atuais; o `products.js` no repo serve só de fallback caso o Firebase falhe.

### Infraestrutura (Firebase)
- Projeto: **naydesign** · Firestore em modo de produção · Authentication (e-mail/senha) habilitada.
- Configuração do app web: arquivo `firebase-config.js` (apiKey pública do app).
- **Login da Área do Lojista**: o `admin.html` pede e-mail + senha antes de mostrar o painel.
  - Conta única: `nayanecardoso221@gmail.com` (senha definida pela lojista; "Esqueci minha senha" envia e-mail de redefinição para ela mesma).
  - No 1º acesso, a lojista clica em **"Criar minha conta (1º acesso)"** com esse e-mail e define a senha. Depois disso o botão **some automaticamente em todos os aparelhos** (o site verifica na autenticação se a conta já existe), então o acesso passa a ser só por **"Entrar"**.
  - Botão **Sair** no menu. A sessão fica salva no aparelho (login persistente), então os acessos seguintes abrem direto logada.
- **Regras necessárias** (aba *Regras* do Firestore — publicar):
  ```
  rules_version = '2';
  service cloud.firestore {
    match /databases/{database}/documents {
      match /produtos/{doc} {
        allow read: if true;
        allow write: if auth != null;
      }
      match /config/{doc} {
        allow read: if true;
        allow write: if auth != null;
      }
    }
  }
  ```
  ⚠️ Com essas regras, **clientes leem a loja livremente**, mas só quem está logada escreve (cadastrar/editar produto, WhatsApp). Até publicar essas regras, as regras antigas abertas continuam valendo.
- Coleção usada: `produtos` (docs com `nome`, `detalhe`, `preco`, `estoque`, `img`). Documento `config/loja` guarda o `whatsapp`.

- O link **Produtos** já está disponível no menu do site principal (`index.html`).

## Recursos interativos incluídos

- Navegação fixa com destaque da seção ativa
- Botão flutuante de WhatsApp com mensagem pronta
- Galeria em lightbox (clique nas artes originais para ampliar)
- Cards de serviços com preços, tempo médio e valores de manutenção
- Seção de formatos clicável
- Animações de entrada ao rolar a página
- Layout 100% responsivo (celular/tablet/desktop)
- Botão "voltar ao topo"
