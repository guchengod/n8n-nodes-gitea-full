import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeUserAccessTokenDelete(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const token = context.getNodeParameter('token', i) as string;

	const options: IHttpRequestOptions = {
		method: 'DELETE',
		url: `${baseUrl}/api/v1/user/tokens/${token}`,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
