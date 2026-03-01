import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeRepositoryBranchProtectionDelete(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const owner = context.getNodeParameter('owner', i) as string;
	const repo = context.getNodeParameter('repo', i) as string;
	const name = context.getNodeParameter('name', i) as string;

	const options: IHttpRequestOptions = {
		method: 'DELETE',
		url: `${baseUrl}/api/v1/repos/${owner}/${repo}/branch_protections/${name}`,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
