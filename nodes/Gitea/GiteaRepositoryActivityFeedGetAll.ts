import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeRepositoryActivityFeedGetAll(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const owner = context.getNodeParameter('owner', i) as string;
	const repo = context.getNodeParameter('repo', i) as string;
	
	const qs: IDataObject = {};
	const onlyPrivate = context.getNodeParameter('onlyPrivate', i, false) as boolean;
	if (onlyPrivate) {
		qs.only_private = onlyPrivate;
	}
	const date = context.getNodeParameter('date', i, '') as string;
	if (date) {
		qs.date = date;
	}
	const page = context.getNodeParameter('page', i, 1) as number;
	qs.page = page;
	const limit = context.getNodeParameter('limit', i) as number | undefined;
	if (limit) {
		qs.limit = limit;
	}


	const options: IHttpRequestOptions = {
		method: 'GET',
		url: `${baseUrl}/api/v1/repos/${owner}/${repo}/activities/feeds`,
		qs,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
