import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeActionWorkflowEnable(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const owner = context.getNodeParameter('owner', i) as string;
	const repo = context.getNodeParameter('repo', i) as string;
	const workflowId = context.getNodeParameter('workflowId', i) as string;

	const options: IHttpRequestOptions = {
		method: 'PUT',
		url: `${baseUrl}/api/v1/repos/${owner}/${repo}/actions/workflows/${workflowId}/enable`,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
