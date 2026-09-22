# IMPLEMENTAÇÃO — PRÉ-AGENDAMENTO PELO WHATSAPP NO CATÁLOGO

Implemente a funcionalidade de pré-agendamento diretamente nos cards de serviços do catálogo existente.

**IMPORTANTE:** O sistema já possui integração com o WhatsApp. Reutilize a conexão, o número comercial e as configurações existentes. Não crie outra integração nem altere a configuração atual.

## Requisitos

1. Adicionar o botão **"Pré-agendar pelo WhatsApp"** em todos os cards de serviços do catálogo.
2. Ao clicar no botão, usar a integração existente para abrir o WhatsApp com uma mensagem personalizada contendo automaticamente o nome do serviço selecionado.
3. Utilizar este modelo de mensagem:

   Olá, Nayane! 💅

   Gostaria de realizar um pré-agendamento para o serviço de *[NOME DO SERVIÇO]*.

   Você poderia me informar quais datas e horários estão disponíveis?

   Obrigada!

4. Para **Alongamento Gel**, permitir selecionar previamente a modalidade (**Aplicação** ou **Manutenção**) e o tipo (**Simples**, **Decorada** ou **Encapsulada**). Incluir as opções escolhidas automaticamente na mensagem.
5. Preservar o layout, as fontes, as cores, os valores, as descrições e a identidade visual atual do catálogo.
6. Garantir o funcionamento do botão em computadores, tablets e celulares.
7. Abrir o WhatsApp em uma nova aba, mantendo o catálogo aberto.
8. Não alterar funcionalidades existentes nem criar um novo módulo de agendamento.

## Critérios de aceite

- Todos os serviços do catálogo possuem o botão de pré-agendamento.
- Cada serviço gera a mensagem com seu nome correto.
- A integração existente com o WhatsApp continua funcionando normalmente.
- A seleção da modalidade e do tipo de Alongamento Gel funciona corretamente e aparece na mensagem.
- A confirmação da data e do horário é realizada posteriormente pelo WhatsApp; o clique no botão não confirma um agendamento.

**Execução:** implemente diretamente no sistema existente, modificando apenas o necessário e preservando todos os demais recursos.
