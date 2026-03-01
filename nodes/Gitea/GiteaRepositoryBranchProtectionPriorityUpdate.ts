import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeRepositoryBranchProtectionPriorityUpdate(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const owner = context.getNodeParameter('owner', i) as string;
	const repo = context.getNodeParameter('repo', i) as string;
	
	const branchNames = context.getNodeParameter('branchNames', i) as string[];

	const body: IDataObject = {
		names: branchNames,
	};

	const options: IHttpRequestOptions = {
		method: 'POST',
		url: `${baseUrl}/api/v1/repos/${owner}/${repo}/branch_protections/priorities`,
		body,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
