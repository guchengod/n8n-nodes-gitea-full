import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeRepositoryLabelDelete(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const owner = context.getNodeParameter('owner', i) as string;
	const repo = context.getNodeParameter('repo', i) as string;
	const labelId = context.getNodeParameter('labelId', i) as number;

	const options: IHttpRequestOptions = {
		method: 'DELETE',
		url: `${baseUrl}/api/v1/repos/${owner}/${repo}/labels/${labelId}`,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
