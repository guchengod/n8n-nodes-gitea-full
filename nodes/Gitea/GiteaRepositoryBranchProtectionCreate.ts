import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeRepositoryBranchProtectionCreate(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const owner = context.getNodeParameter('owner', i) as string;
	const repo = context.getNodeParameter('repo', i) as string;
	
	// Simplified for now, a full implementation would have many more options
	const branchName = context.getNodeParameter('branchName', i) as string;
	const body: IDataObject = {
		branch_name: branchName,
		// Example of other potential parameters
		// enable_push: context.getNodeParameter('enablePush', i, true) as boolean,
		// required_approvals: context.getNodeParameter('requiredApprovals', i, 1) as number,
	};
	const additionalFields = context.getNodeParameter('additionalFields', i, {}) as IDataObject;
	Object.assign(body, additionalFields);


	const options: IHttpRequestOptions = {
		method: 'POST',
		url: `${baseUrl}/api/v1/repos/${owner}/${repo}/branch_protections`,
		body,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
