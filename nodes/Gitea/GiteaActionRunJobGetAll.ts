import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeActionRunJobGetAll(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const owner = context.getNodeParameter('owner', i) as string;
	const repo = context.getNodeParameter('repo', i) as string;
	const runId = context.getNodeParameter('runId', i) as number;
	const page = context.getNodeParameter('page', i, 1) as number;
	const limit = context.getNodeParameter('limit', i, 30) as number;

	const qs = {
		page,
		limit,
	};

	const options: IHttpRequestOptions = {
		method: 'GET',
		url: `${baseUrl}/api/v1/repos/${owner}/${repo}/actions/runs/${runId}/jobs`,
		qs,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
