import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeIssueCommentReactionCreate(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const owner = context.getNodeParameter('owner', i) as string;
	const repo = context.getNodeParameter('repo', i) as string;
	const commentId = context.getNodeParameter('commentId', i) as number;
	const content = context.getNodeParameter('reaction', i) as string;

	const body: IDataObject = {
		content,
	};

	const options: IHttpRequestOptions = {
		method: 'POST',
		url: `${baseUrl}/api/v1/repos/${owner}/${repo}/issues/comments/${commentId}/reactions`,
		body,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
