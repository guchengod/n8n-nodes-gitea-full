import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeIssueDependencyCreate(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const owner = context.getNodeParameter('owner', i) as string;
	const repo = context.getNodeParameter('repo', i) as string;
	const index = context.getNodeParameter('issueIndex', i) as number;
	const issueId = context.getNodeParameter('issueId', i) as number;

	const body: IDataObject = {
		issue_id: issueId,
	};

	const options: IHttpRequestOptions = {
		method: 'POST',
		url: `${baseUrl}/api/v1/repos/${owner}/${repo}/issues/${index}/dependencies`,
		body,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
