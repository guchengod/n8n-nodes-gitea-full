import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeRepositorySearch(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	// For searching, we might have parameters like 'q' for query
	const query = context.getNodeParameter('query', i, '') as string;
	const limit = context.getNodeParameter('limit', i, 50) as number;

	const qs: { [key: string]: string | number } = {};
	if (query) {
		qs.q = query;
	}
	if (limit) {
		qs.limit = limit;
	}

	const options: IHttpRequestOptions = {
		method: 'GET',
		url: `${baseUrl}/api/v1/repos/search`,
		qs,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
