import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeUserActivityFeedGetAll(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const username = context.getNodeParameter('username', i) as string;
	const onlyPrivate = context.getNodeParameter('onlyPrivate', i, false) as boolean; // optional
	const date = context.getNodeParameter('date', i, '') as string; // optional
	const page = context.getNodeParameter('page', i, 1) as number;
	const limit = context.getNodeParameter('limit', i) as number | undefined;

	const qs: {
		only_private?: boolean;
		date?: string;
		page?: number;
		limit?: number;
	} = {};

	if (onlyPrivate) {
		qs.only_private = onlyPrivate;
	}
	if (date) {
		qs.date = date;
	}
	if (page) {
		qs.page = page;
	}
	if (limit) {
		qs.limit = limit;
	}

	const options: IHttpRequestOptions = {
		method: 'GET',
		url: `${baseUrl}/api/v1/users/${username}/activities/feeds`,
		qs,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
