import { IDataObject, IExecuteFunctions, INodeProperties, IHttpRequestOptions } from 'n8n-workflow';

export const giteaActionSecretCreateOrUpdateFields: INodeProperties[] = [
	{
		displayName: 'Secret Data',
		name: 'data',
		type: 'string',
		typeOptions: { password: true },
		required: true,
		displayOptions: {
			show: {
				resource: ['repositoryActionSecret'],
				operation: ['createOrUpdate'],
			},
		},
		default: '',
		description: 'Data of the secret to update',
	},
	{
		displayName: 'Additional Options',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['repositoryActionSecret'],
				operation: ['createOrUpdate'],
			},
		},
		options: [
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Description of the secret to update',
			},
		],
	},
];

export async function executeActionSecretCreateOrUpdate(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const owner = context.getNodeParameter('owner', i) as string;
	const repo = context.getNodeParameter('repo', i) as string;
	const secretname = context.getNodeParameter('secretname', i) as string;

	const data = context.getNodeParameter('data', i) as string;
	const additionalFields = context.getNodeParameter('additionalFields', i) as IDataObject;

	const body: IDataObject = { data };
	Object.assign(body, additionalFields); // 合并必填与可选字段

	const options: IHttpRequestOptions = {
		method: 'PUT',
		body,
		url: `${baseUrl}/api/v1/repos/${owner}/${repo}/actions/secrets/${secretname}`,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
