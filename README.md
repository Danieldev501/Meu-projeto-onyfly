# Desafio Onfly: Conector n8n Customizado - True Random Number Generator

Este repositório contém a implementação de um conector (node) customizado para a plataforma n8n, desenvolvido como parte do desafio técnico do processo seletivo da Onfly.

O conector, chamado **Random**, se integra à API pública da [Random.org](http://random.org/) para gerar números verdadeiramente aleatórios com base em um intervalo definido pelo usuário.

## Visão Geral do Conector

- **Nome do Node:** `Random`
- **Operação:** `True Random Number Generator`
- **Funcionalidade:** Recebe dois parâmetros numéricos, **Min** e **Max**, e retorna um número inteiro aleatório gerado pela API da Random.org.
- **Ícone:** Inclui um ícone SVG personalizado para facilitar a identificação na interface do n8n.

## Tecnologias Utilizadas

- **Node.js:** v22 (LTS)
- **TypeScript**
- **n8n:** v1.85.4
- **Docker e Docker Compose**
- **PostgreSQL:** v16

## Estrutura do Projeto

```
.
├── custom-nodes/
│   └── n8n-nodes-random/   # Código-fonte do conector customizado
├── n8n-data/               # Volume para persistência de dados do n8n
├── postgres-data/          # Volume para persistência de dados do PostgreSQL
├── docker-compose.yml      # Orquestração dos serviços n8n e PostgreSQL
└── README.md               # Este documento
```

## Guia de Instalação e Execução

Siga os passos abaixo para configurar e executar o ambiente localmente.

### Pré-requisitos

- **Docker e Docker Compose:** Essenciais para a execução do ambiente containerizado.
- **Node.js e npm:** Necessários para a compilação do conector customizado. Recomenda-se a versão 22 (LTS) do Node.js.

### 1. Clone o Repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_PROJETO>
```

### 2. Compile o Conector Customizado

Navegue até o diretório do conector, instale as dependências e compile o código TypeScript.

```bash
cd custom-nodes/n8n-nodes-random
npm install
npm run build
```

### 3. Inicie o Ambiente Docker

Retorne ao diretório raiz do projeto e utilize o Docker Compose para iniciar os serviços do n8n e do PostgreSQL.

```bash
cd ../..
docker-compose up --build
```

> **Nota:** O comando `--build` é necessário na primeira execução para construir a imagem do n8n com as configurações do projeto. Para execuções futuras, `docker-compose up` é suficiente.

Após a inicialização, a instância do n8n estará acessível em **[http://localhost:5678](http://localhost:5678)**.

## Como Utilizar o Conector no n8n

1.  Acesse a interface do n8n em seu navegador.
2.  Crie um novo workflow.
3.  Clique no botão `+` para adicionar um novo nó.
4.  Pesquise por "**Random**" e selecione o conector "**True Random Number Generator**".
5.  No painel de configurações do nó, defina os valores para **Min** e **Max**.
6.  Execute o nó para gerar e visualizar o número aleatório no output.

## Testes

Os testes foram realizados de forma manual e funcional diretamente na interface do n8n. O processo consistiu em:
- Criar workflows para validar a execução do conector.
- Testar diferentes intervalos de valores para `Min` e `Max`.
- Verificar se a resposta da API da Random.org era corretamente processada e retornada pelo nó.
- Validar o tratamento de erros em caso de falha na comunicação com a API.

## Observações Adicionais

- O arquivo `docker-compose.yml` está configurado para montar o diretório `custom-nodes` no volume correspondente do container do n8n, garantindo que o conector seja carregado automaticamente na inicialização.
- Durante o desenvolvimento, a IA Gemini foi utilizada como ferramenta de suporte para acelerar a resolução de dúvidas e a estruturação do código.
