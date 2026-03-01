import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeRepositoryLabelUpdate(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const owner = context.getNodeParameter('owner', i) as string;
	const repo = context.getNodeParameter('repo', i) as string;
	const labelId = context.getNodeParameter('labelId', i) as number;
	
	const name = context.getNodeParameter('name', i, '') as string;
	const color = context.getNodeParameter('color', i, '') as string;
	const description = context.getNodeParameter('description', i, '') as string;

	const body: IDataObject = {};
	if (name) body.name = name;
	if (color) body.color = color;
	if (description) body.description = description;

	const options: IHttpRequestOptions = {
		method: 'PATCH',
		url: `${baseUrl}/api/v1/repos/${owner}/${repo}/labels/${labelId}`,
		body,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
