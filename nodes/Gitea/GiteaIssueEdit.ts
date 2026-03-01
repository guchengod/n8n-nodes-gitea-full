import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeIssueEdit(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const owner = context.getNodeParameter('owner', i) as string;
	const repo = context.getNodeParameter('repo', i) as string;
	const index = context.getNodeParameter('issueIndex', i) as number;
	
	const title = context.getNodeParameter('title', i, '') as string;
	const bodyText = context.getNodeParameter('body', i, '') as string;
	const state = context.getNodeParameter('state', i, '') as string;

	const body: IDataObject = {};
	if (title) body.title = title;
	if (bodyText) body.body = bodyText;
	if (state) body.state = state;

	const options: IHttpRequestOptions = {
		method: 'PATCH',
		url: `${baseUrl}/api/v1/repos/${owner}/${repo}/issues/${index}`,
		body,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
