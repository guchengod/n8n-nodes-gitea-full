import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeMilestoneCreate(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const owner = context.getNodeParameter('owner', i) as string;
	const repo = context.getNodeParameter('repo', i) as string;
	const title = context.getNodeParameter('title', i) as string;
	const description = context.getNodeParameter('description', i, '') as string;
	const deadline = context.getNodeParameter('deadline', i, '') as string;

	const body: IDataObject = {
		title,
		description,
	};
	if (deadline) body.due_on = deadline;

	const options: IHttpRequestOptions = {
		method: 'POST',
		url: `${baseUrl}/api/v1/repos/${owner}/${repo}/milestones`,
		body,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
