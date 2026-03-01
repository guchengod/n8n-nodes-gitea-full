import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeUserBlockCreate(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const username = context.getNodeParameter('username', i) as string;

	const options: IHttpRequestOptions = {
		method: 'PUT',
		url: `${baseUrl}/api/v1/user/blocks/${username}`,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
