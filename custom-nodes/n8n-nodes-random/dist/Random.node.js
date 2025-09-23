"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
class Random {
    constructor() {
        this.description = {
            displayName: 'True Random Number Generator',
            name: 'random',
            icon: 'file:icons/random.svg',
            group: ['transform'],
            version: 1,
            description: 'Gera um número aleatório usando a API da Random.org',
            defaults: {
                name: 'True Random Number Generator',
            },
            inputs: ['main'],
            outputs: ['main'],
            properties: [
                {
                    displayName: 'Min',
                    name: 'min',
                    type: 'number',
                    default: 1,
                    required: true,
                    description: 'O valor mínimo para o número aleatório',
                },
                {
                    displayName: 'Max',
                    name: 'max',
                    type: 'number',
                    default: 100,
                    required: true,
                    description: 'O valor máximo para o número aleatório',
                },
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        for (let i = 0; i < items.length; i++) {
            const min = this.getNodeParameter('min', i, 1);
            const max = this.getNodeParameter('max', i, 100);
            const url = `https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`;
            try {
                const response = await this.helpers.httpRequest({
                    url,
                    method: 'GET',
                    json: false, // A API retorna texto plano
                });
                const randomNumber = parseInt(response, 10);
                returnData.push({
                    json: {
                        ...items[i].json,
                        randomNumber,
                    },
                });
            }
            catch (error) {
                if (this.continueOnFail()) {
                    const json = this.getInputData(i)[0].json;
                    if (error instanceof Error) {
                        json.error = error.message;
                    }
                    else {
                        json.error = 'An unknown error occurred';
                    }
                    returnData.push({ json, pairedItem: { item: i } });
                    continue;
                }
                throw error;
            }
        }
        return [this.helpers.returnJsonArray(returnData)];
    }
}
exports.Random = Random;
