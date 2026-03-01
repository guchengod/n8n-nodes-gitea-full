import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeUserSecretDelete(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const secretName = context.getNodeParameter('secretName', i) as string;

	const options: IHttpRequestOptions = {
		method: 'DELETE',
		url: `${baseUrl}/api/v1/user/actions/secrets/${secretName}`,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
