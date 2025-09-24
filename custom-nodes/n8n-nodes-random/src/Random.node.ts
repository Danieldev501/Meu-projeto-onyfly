import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

export class Random implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'True Random Number Generator',
		name: 'random',
		icon: 'file:icons/random.svg',
		group: ['transform'],
		version: 1,
		description: 'Usa a API da Random.org para gerar um número aleatório real.',
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

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		for (let i = 0; i < items.length; i++) {
			const min = this.getNodeParameter('min', i, 1) as number;
			const max = this.getNodeParameter('max', i, 100) as number;

			const url = `https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`;

			try {
				const response = await this.helpers.httpRequest({
					url,
					method: 'GET',
					json: false, // A API retorna texto plano
				});

				const randomNumber = parseInt(response as string, 10);

				returnData.push({
					json: {
						...items[i].json,
						randomNumber,
					},
				});

			} catch (error) {
				if (this.continueOnFail()) {
					const json = this.getInputData(i)[0].json;
					if (error instanceof Error) {
						json.error = error.message;
					} else {
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
