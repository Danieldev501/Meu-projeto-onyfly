# Meu Projeto para o Desafio Onfly: Conector n8n de Número Aleatório

E aí, pessoal da Onfly! 👋 Esse aqui é o meu projeto para o desafio técnico.

Criei um conector customizado pro n8n que gera números aleatórios de verdade, usando a API da [Random.org](http://random.org/). A ideia foi fazer algo funcional e fácil de usar.

## O que o conector faz?

- **Nome:** `Random`
- **Operação:** `True Random Number Generator`
- **Como funciona:** Você passa um número **Mínimo** e um **Máximo**, e ele te devolve um número aleatório nesse intervalo. Simples assim!
- **Ícone:** Criei um ícone SVG pra ele ficar bonitinho e fácil de achar na lista de nodes.

## Tecnologias que usei

- **Node.js:** v22 (LTS)
- **TypeScript**
- **n8n:** v1.85.4
- **Docker e Docker Compose**
- **PostgreSQL:** v16

## Como rodar o projeto

Pra testar, é só seguir os passos abaixo.

### O que você precisa ter aí:

- **Docker e Docker Compose:** Pra rodar o ambiente sem dor de cabeça.
- **Node.js e npm:** Pra compilar o conector (usei a versão 22 do Node).

### Passo 1: Baixar o projeto

```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_PROJETO>
```

### Passo 2: Compilar o conector

O código do conector tá em TypeScript, então precisa compilar pra JavaScript.

```bash
cd custom-nodes/n8n-nodes-random
npm install
npm run build
```

### Passo 3: Ligar tudo com o Docker

Agora é só voltar pra pasta principal e deixar o Docker fazer a mágica.

```bash
cd ../..
docker-compose up --build
```
> **Dica:** O `--build` é mais pra primeira vez. Nas próximas, só `docker-compose up` já resolve.

Depois que os containers subirem, o n8n vai estar rodando em **[http://localhost:5678](http://localhost:5678)**.

## Como usar no n8n

1.  Abre o n8n no seu navegador.
2.  Cria um workflow novo.
3.  Clica no `+` pra adicionar um node.
4.  Procura por "**Random**" e clica nele.
5.  Preenche os campos **Min** e **Max**.
6.  Executa e vê o resultado!

## Sobre os testes

Fiz os testes na mão mesmo, direto no n8n. Criei uns workflows, testei vários números, vi se a API da Random.org respondia certo e se o node tratava os dados direitinho.

## Observação

- O `docker-compose.yml` já tá configurado pra carregar o conector automaticamente.
- Usei a IA Gemini como uma ajudante pra acelerar algumas partes do desenvolvimento e tirar umas dúvidas.