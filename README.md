Node Customizado para N8N: Gerador de Números Aleatórios

Oi, pessoal! Esse é o meu projeto para o desafio técnico da Onfly. Criei um node customizado para o N8N que gera números aleatórios usando a API da Random.org.Um guia rápido pra você entender e rodar o projeto!

O que esse node faz?





Nome: Random



Função: Gera um número aleatório de verdade com base em dois valores: Min e Max.



Integração: Usa a API da Random.org pra pegar números aleatórios.



Visual: Tem um ícone SVG achar o node fácil no N8N.

Tecnologias que usei





Node.js: Versão 22 LTS



TypeScript: Pra deixar o código mais organizado



Docker e Docker Compose: Pra rodar tudo direitinho



N8N: Versão 1.85.4



PostgreSQL: Banco de dados pro N8N

Como está organizado o projeto

.
├── custom-nodes/
│   └── n8n-nodes-random/ # Aqui tá o código do node
├── n8n-data/             # Dados do N8N 
├── postgres-data/        # Dados do Postgres 
├── docker-compose.yml    # Configuração dos serviços
└── README.md             # Tutorial

Como rodar o projeto

1. O que você precisa antes





Docker e Docker Compose: Confere se tão instalados.



Node.js e NPM: Use a versão 22 do Node.js (LTS) pra compilar o node.

2. Clonar o repositório

git clone <URL_DO_REPOSITORIO>
cd <NOME_DA_PASTA>

3. Compilar o node

Vai pra pasta do node e compila o código:

cd custom-nodes/n8n-nodes-random
npm install
npm run build

4. Subir os serviços

Volta pra pasta principal e roda o Docker:

cd ../..
docker-compose up --build



Dica: O --build é só pra primeira vez, pra criar a imagem do N8N. Depois, é só docker-compose up.

Aí é só acessar o N8N em http://localhost:5678.

Como usar o node no N8N





Abre o N8N no navegador (http://localhost:5678).



Cria um workflow novo.



Clica no + e procura por "Random Number".



Coloca os valores de Min e Max, roda o node e vê o número aleatório na tela!

Sobre os testes

Não criei testes automatizados dessa vez. Testei tudo na mão, criando workflows no N8N e checando se o node pegava os números direitinho da API da Random.org. 

Algumas observações

O docker-compose.yml já configura tudo pra carregar o node customizado no N8N automaticamente.



Obs.: Durante o desenvolvimento, utilizei também a IA Gemini como suporte para resolver conflitos.