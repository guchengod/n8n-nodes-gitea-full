import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeUserAccessTokenGetAll(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const options: IHttpRequestOptions = {
		method: 'GET',
		url: `${baseUrl}/api/v1/user/tokens`, // Authenticated user
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
