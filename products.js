// ============================================================
// PRODUTOS — CATALOGO NAYANE CARDOSO
//
// Os produtos são cadastrados e vendidos pelo site em TEMPO REAL:
// os dados principais ficam no Firebase Firestore (projeto naydesign).
// A página admin.html lê e grava direto no banco.
//
// Este arquivo serve apenas como CÓPIA DE SEGURANÇA / fallback:
// se o Firebase não estiver acessível, a loja exibe os produtos
// que estiverem listados abaixo. Você pode gerar uma cópia atualizada
// clicando em "Baixar products.js (backup)" no painel.
//
// Formato de cada item:
//   nome    → nome exibido no card
//   detalhe → informação extra (ex.: "Box com 12 unidades")
//   preco   → valor numérico (ex.: 10.80)
//   estoque → quantidade; se 0, aparece "Esgotado"
//   img     → foto (pode ser arquivo incorporado em base64)
// ============================================================

const CATALOGO = {
  loja: 'Nayane Cardoso',
  whatsapp: '5588996281302', // 55 + DDD + número (sem espaços ou traços)

  produtos: [
    // cadastre os produtos pela "Área do Lojista" e substitua este arquivo
  ]
};
