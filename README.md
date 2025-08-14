# Teste de Busca “Pacto Soluções” no Yahoo com Cypress

Este projeto automatiza a busca da empresa **Pacto Soluções** no Yahoo e valida o carregamento do primeiro link do resultado, utilizando **Cypress**.

---

## Descrição

O teste realiza o seguinte fluxo:

1. Acessa o site [Yahoo Search Brasil](https://br.search.yahoo.com/).
2. Localiza o campo de busca e digita **"Pacto Soluções"**.
3. Envia a busca e aguarda os resultados aparecerem.
4. Verifica que pelo menos um resultado contém o termo **"Pacto Soluções"**.
5. Clica no **primeiro link** dos resultados.
6. Confirma que a nova página carregada tem título contendo "Pacto".

---
##Estrutura do teste

1.O arquivo do teste contém:

2.Acesso ao Yahoo: cy.visit('https://br.search.yahoo.com/')

3.Busca: localiza o input de pesquisa e envia "Pacto Soluções"

4.Validação: garante que o resultado da busca está visível e contém o termo esperado

5.Navegação: clica no primeiro link dos resultados

6.Validação final: assegura que a página carregada tem título contendo "Pacto"

7.Tratamento de erros: ignora exceções de cross-origin para evitar falhas com iframes

##Observações 
Caso o layout do Yahoo mude, os seletores podem precisar ser atualizados.

Recomenda-se ter conexão estável, pois o teste depende do carregamento da página de busca e do primeiro link.

O uso de cy.wait ou timeout garante que os elementos estejam visíveis antes das ações, simulando comportamento humano.

## Tecnologias

- [Cypress](https://www.cypress.io/)
- Node.js
- JavaScript (ES6)

---

## Como rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
2. Instale as dependências :
npm install
3. Abra o Cypress Test Runner:
npx cypress open
4. Execute o teste busca-yahoo.cy.js na interface do Cypress.



