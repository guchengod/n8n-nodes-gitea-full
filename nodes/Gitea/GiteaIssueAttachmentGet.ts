import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeIssueAttachmentGet(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const owner = context.getNodeParameter('owner', i) as string;
	const repo = context.getNodeParameter('repo', i) as string;
	const index = context.getNodeParameter('issueIndex', i) as number;
	const attachmentId = context.getNodeParameter('attachmentId', i) as number;

	const options: IHttpRequestOptions = {
		method: 'GET',
		url: `${baseUrl}/api/v1/repos/${owner}/${repo}/issues/${index}/assets/${attachmentId}`,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
