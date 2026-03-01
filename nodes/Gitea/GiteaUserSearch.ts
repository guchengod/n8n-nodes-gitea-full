import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeUserSearch(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const query = context.getNodeParameter('query', i, '') as string;
	const page = context.getNodeParameter('page', i, 1) as number;
	const limit = context.getNodeParameter('limit', i) as number | undefined;

	const qs: {
		q?: string;
		page?: number;
		limit?: number;
	} = {};

	if (query) {
		qs.q = query;
	}

	if (page) {
		qs.page = page;
	}

	if (limit) {
		qs.limit = limit;
	}

	const options: IHttpRequestOptions = {
		method: 'GET',
		url: `${baseUrl}/api/v1/users/search`,
		qs,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
