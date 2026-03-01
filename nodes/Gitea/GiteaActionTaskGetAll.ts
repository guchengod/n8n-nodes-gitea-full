import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeActionTaskGetAll(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const owner = context.getNodeParameter('owner', i) as string;
	const repo = context.getNodeParameter('repo', i) as string;
	const page = context.getNodeParameter('page', i, 1) as number;
	const limit = context.getNodeParameter('limit', i, 30) as number;

	const qs: IDataObject = {
		page,
		limit,
	};
	
	// Optional filters from Gitea API
	const status = context.getNodeParameter('status', i, '') as string;
	if (status) {
		qs.status = status;
	}

	const options: IHttpRequestOptions = {
		method: 'GET',
		url: `${baseUrl}/api/v1/repos/${owner}/${repo}/actions/tasks`,
		qs,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
