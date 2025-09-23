FROM docker.n8n.io/n8nio/n8n
USER root
RUN mkdir -p /home/node/.n8n/custom
COPY ./n8n-nodes-friendgrid /home/node/.n8n/custom/n8n-nodes-friendgrid
RUN chown -R node:node /home/node/.n8n/custom
USER node
WORKDIR /home/node/.n8n/custom/n8n-nodes-friendgrid
RUN npm install