import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeIssueCommentEdit(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const owner = context.getNodeParameter('owner', i) as string;
	const repo = context.getNodeParameter('repo', i) as string;
	const commentId = context.getNodeParameter('commentId', i) as number;
	const bodyText = context.getNodeParameter('body', i) as string;

	const body: IDataObject = {
		body: bodyText,
	};

	const options: IHttpRequestOptions = {
		method: 'PATCH',
		url: `${baseUrl}/api/v1/repos/${owner}/${repo}/issues/comments/${commentId}`,
		body,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
