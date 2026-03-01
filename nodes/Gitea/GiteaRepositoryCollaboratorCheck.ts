import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeRepositoryCollaboratorCheck(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const owner = context.getNodeParameter('owner', i) as string;
	const repo = context.getNodeParameter('repo', i) as string;
	const collaborator = context.getNodeParameter('collaborator', i) as string;

	const options: IHttpRequestOptions = {
		method: 'GET',
		url: `${baseUrl}/api/v1/repos/${owner}/${repo}/collaborators/${collaborator}`,
		// This endpoint returns 204 if collaborator, 404 if not.
		// The helper should handle this and we can check the status code in the calling node.
		// Or we can return a boolean. Let's return the full response for now.
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
