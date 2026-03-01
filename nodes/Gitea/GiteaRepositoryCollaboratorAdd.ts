import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeRepositoryCollaboratorAdd(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const owner = context.getNodeParameter('owner', i) as string;
	const repo = context.getNodeParameter('repo', i) as string;
	const collaborator = context.getNodeParameter('collaborator', i) as string;
	const permission = context.getNodeParameter('permission', i) as string;

	const body: IDataObject = {};
	if (permission) {
		body.permission = permission;
	}

	const options: IHttpRequestOptions = {
		method: 'PUT',
		url: `${baseUrl}/api/v1/repos/${owner}/${repo}/collaborators/${collaborator}`,
		body,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
