import { IDataObject, IExecuteFunctions, INodeProperties, IHttpRequestOptions } from 'n8n-workflow';

export const giteaActionArtifactGetAllFields: INodeProperties[] = [
	{
		displayName: 'Additional Options',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
				resource: ['repositoryActionArtifact'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'Artifact Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Name of the artifact to filter by',
			},
		],
	},
];

export async function executeActionArtifactGetAll(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const owner = context.getNodeParameter('owner', i) as string;
	const repo = context.getNodeParameter('repo', i) as string;
	const additionalFields = context.getNodeParameter('additionalFields', i) as IDataObject;

	const options: IHttpRequestOptions = {
		method: 'GET',
		qs: { ...additionalFields }, // GET 请求的参数放在 qs 里
		url: `${baseUrl}/api/v1/repos/${owner}/${repo}/actions/artifacts`,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
