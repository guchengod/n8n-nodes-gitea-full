import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeAdminEmailSearch(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const query = context.getNodeParameter('query', i) as string;

	const options: IHttpRequestOptions = {
		method: 'GET',
		url: `${baseUrl}/api/v1/admin/emails/search`,
		qs: {
			q: query,
		},
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
