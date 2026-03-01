import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeActionRunnerGet(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const owner = context.getNodeParameter('owner', i) as string;
	const repo = context.getNodeParameter('repo', i) as string;
	const runnerId = context.getNodeParameter('runnerId', i) as number;

	const options: IHttpRequestOptions = {
		method: 'GET',
		url: `${baseUrl}/api/v1/repos/${owner}/${repo}/actions/runners/${runnerId}`,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
