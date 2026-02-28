import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

// 导入外部独立文件的参数和逻辑函数
import { giteaMigrateFields, executeMigrate } from './GiteaMigrate';
import { giteaRepositoryGetFields, executeRepositoryGet } from './GiteaRepositoryGet';
export class Gitea implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Gitea',
		name: 'gitea',
		icon: 'file:gitea.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Consume Gitea API',
		usableAsTool: true,
		defaults: {
			name: 'Gitea',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'giteaApi',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Repository',
						value: 'repository',
					},
				],
				default: 'repository',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['repository'],
					},
				},
				options: [
					{
						name: 'Get',
						value: 'get',
						description: 'Get a repository',
						action: 'Get a repository',
					},
					{
						name: 'Migrate',
						value: 'migrate',
						description: 'Migrate a remote git repository to Gitea',
						action: 'Migrate a repository',
					},
					// 以后新增单独接口文件，都在这里添加一行名字即可
				],
				default: 'migrate',
			},

			// ====== 这里开始加载独立文件中的参数 ======
			...giteaRepositoryGetFields,
			...giteaMigrateFields,
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const credentials = await this.getCredentials('giteaApi');
		const baseUrl = credentials.baseUrl as string;

		for (let i = 0; i < items.length; i++) {
			try {
				const resource = this.getNodeParameter('resource', 0) as string;
				const operation = this.getNodeParameter('operation', 0) as string;

				let responseData;

				if (resource === 'repository') {
					// ====== 根据操作，路由分发到各个独立文件的逻辑里 ======
					if (operation === 'get') {
						responseData = await executeRepositoryGet(this, i, baseUrl);
					}
					else if (operation === 'migrate') {
						// 将上下文(this), 循环序号(i) 和 基础URL 传给分离的文件
						responseData = await executeMigrate(this, i, baseUrl);
					}
				}

				const executionData = this.helpers.constructExecutionMetaData(
					this.helpers.returnJsonArray(responseData),
					{ itemData: { item: i } },
				);

				returnData.push(...executionData);
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({ json: { error: (error as Error).message } });
					continue;
				}
				throw error;
			}
		}

		return [returnData];
	}
}