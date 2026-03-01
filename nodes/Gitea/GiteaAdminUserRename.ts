import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeAdminUserRename(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const username = context.getNodeParameter('username', i) as string;
	const newUsername = context.getNodeParameter('newUsername', i) as string;

	const body: IDataObject = {
		new_username: newUsername,
	};

	const options: IHttpRequestOptions = {
		method: 'POST',
		url: `${baseUrl}/api/v1/admin/users/${username}/rename`,
		body,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
