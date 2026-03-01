import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeRepositoryBranchCreate(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const owner = context.getNodeParameter('owner', i) as string;
	const repo = context.getNodeParameter('repo', i) as string;
	const newBranchName = context.getNodeParameter('newBranchName', i) as string;
	const oldBranchName = context.getNodeParameter('oldBranchName', i, '') as string;

	const body: IDataObject = {
		new_branch_name: newBranchName,
	};

	if (oldBranchName) {
		body.old_branch_name = oldBranchName;
	}

	const options: IHttpRequestOptions = {
		method: 'POST',
		url: `${baseUrl}/api/v1/repos/${owner}/${repo}/branches`,
		body,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
