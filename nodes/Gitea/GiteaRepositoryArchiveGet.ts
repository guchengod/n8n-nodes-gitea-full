import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeRepositoryArchiveGet(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const owner = context.getNodeParameter('owner', i) as string;
	const repo = context.getNodeParameter('repo', i) as string;
	const archive = context.getNodeParameter('archive', i) as string; // e.g., 'master.zip' or the git reference

	const options: IHttpRequestOptions = {
		method: 'GET',
		url: `${baseUrl}/api/v1/repos/${owner}/${repo}/archive/${archive}`,
		json: false, // Returns a file
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
