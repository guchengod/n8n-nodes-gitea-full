import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeOrgCreate(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const name = context.getNodeParameter('orgName', i) as string;
	const description = context.getNodeParameter('description', i, '') as string;
	const visibility = context.getNodeParameter('visibility', i, 'public') as string;

	const body: IDataObject = {
		username: name,
		description,
		visibility,
	};

	const options: IHttpRequestOptions = {
		method: 'POST',
		url: `${baseUrl}/api/v1/orgs`,
		body,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
