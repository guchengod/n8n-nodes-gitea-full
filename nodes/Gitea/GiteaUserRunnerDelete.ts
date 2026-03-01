import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeUserRunnerDelete(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const runnerId = context.getNodeParameter('runnerId', i) as number;

	const options: IHttpRequestOptions = {
		method: 'DELETE',
		url: `${baseUrl}/api/v1/user/runners/${runnerId}`,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
