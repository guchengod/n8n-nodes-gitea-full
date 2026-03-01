import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeUserFollowerGetAll(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const page = context.getNodeParameter('page', i, 1) as number;
	const limit = context.getNodeParameter('limit', i) as number | undefined;

	const qs: {
		page?: number;
		limit?: number;
	} = {};

	if (page) {
		qs.page = page;
	}

	if (limit) {
		qs.limit = limit;
	}

	const options: IHttpRequestOptions = {
		method: 'GET',
		url: `${baseUrl}/api/v1/user/followers`,
		qs,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
